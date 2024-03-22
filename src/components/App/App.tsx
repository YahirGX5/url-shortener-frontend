import { HomePage } from '../../pages/HomePage/HomePage.tsx';
import { UrlsPage } from '../../pages/UrlsPage/UrlsPage.tsx';
import { MainHeader } from '../../components/Main Header/MainHeader.tsx';
import { loginContext } from '../../contexts/LoginContext.ts';
import { urlsContext } from '../../contexts/UrlsContext.ts';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'wouter';

import './App.css';

function App() {
  const [login, setLogin] = useState(false);
  const [urls, setUrls] = useState([{ originalUrl: '', shortUrl: '' }]);

  return (
    <main>
      <loginContext.Provider value={{ login: login, setLogin: setLogin }}>
        <MainHeader />
      </loginContext.Provider>
      
      <urlsContext.Provider value={{ urls: urls, setUrls: setUrls }}>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/urls' component={UrlsPage}/>
            <Route path='/'><Redirect to='/home' /></Route>
            <Route>Not found page</Route>
          </Switch>
      </urlsContext.Provider>
        
    </main>
  )
}

export default App
