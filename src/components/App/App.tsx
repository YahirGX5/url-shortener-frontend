import { useState, lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.tsx'));
const UrlsPage = lazy(() => import('../../pages/UrlsPage/UrlsPage.tsx'));
const ErrorComponent = lazy(() => import('../Error/Error.tsx'));

import Loading from '../Loading/Loading.tsx';
import backgroundVideo from '../../assets/background.mp4';
import MetricsPage from '../../pages/MetricsPage/MetricsPage.tsx';

import { MainHeader } from '../Main Header/MainHeader.tsx';
import { loginContext } from '../../contexts/LoginContext.ts';
import { urlsContext } from '../../contexts/UrlsContext.ts';
import { errorContext } from '../../contexts/ErrorContext.ts';
import { Route, Switch, Redirect } from 'wouter';

import './App.css';

const urlsForTest = [
  {"originalUrl": "https://www.google.com", "shortUrl": "g123456789"},
  {"originalUrl": "https://www.github.com", "shortUrl": "gh12345678"},
  {"originalUrl": "https://www.youtube.com", "shortUrl": "yt12345678"},
  {"originalUrl": "https://www.twitch.tv", "shortUrl": "tw12345678"},
  {"originalUrl": "https://www.microsoft.com", "shortUrl": "ms12345678"},
  {"originalUrl": "https://www.apple.com", "shortUrl": "ap12345678"}
]

function App() {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [urls, setUrls] = useState(urlsForTest);

  return (
    <main>
      <video autoPlay loop muted className='videoBackground'>
          <source src={backgroundVideo} type="video/mp4"/>
      </video>

      <loginContext.Provider value={{ login: login, setLogin: setLogin }}>
        <MainHeader />
      </loginContext.Provider>
      
      <errorContext.Provider value={{ error: error, setError: setError }}>
        <urlsContext.Provider value={{ urls: urls, setUrls: setUrls }}>
          <Suspense fallback={<Loading />}>
            {error && <ErrorComponent errorToShow={error}/>}
            <Switch>
              <Route path='/metrics' component={MetricsPage}/>
              <Route path='/home' component={HomePage}/>
              <Route path='/urls' component={UrlsPage}/>
              <Route path='/'><Redirect to='/home' /></Route>
              <Route>Not found page</Route>
            </Switch>
          </Suspense>
        </urlsContext.Provider>  
      </errorContext.Provider> 
    </main>
  )
}

export default App;
