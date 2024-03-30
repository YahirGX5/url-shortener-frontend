import { useState, lazy, Suspense } from 'react';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.tsx'));
const UrlsPage = lazy(() => import('../../pages/UrlsPage/UrlsPage.tsx'));
import { MainHeader } from '../../components/Main Header/MainHeader.tsx';
import { loginContext } from '../../contexts/LoginContext.ts';
import { urlsContext } from '../../contexts/UrlsContext.ts';

import { Route, Switch, Redirect } from 'wouter';

import './App.css';

const urlsForTest = [
  {"originalUrl": "", "shortUrl": ""}
]

function App() {
  const [login, setLogin] = useState(false);
  const [urls, setUrls] = useState(urlsForTest);

  return (
    <main>
      <loginContext.Provider value={{ login: login, setLogin: setLogin }}>
        <MainHeader />
      </loginContext.Provider>
      
      <urlsContext.Provider value={{ urls: urls, setUrls: setUrls }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/urls' component={UrlsPage}/>
            <Route path='/'><Redirect to='/home' /></Route>
            <Route>Not found page</Route>
          </Switch>
        </Suspense>
      </urlsContext.Provider>
        
    </main>
  )
}

export default App
