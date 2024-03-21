import { HomePage } from '../../pages/HomePage/HomePage.tsx';
import { UrlsPage } from '../../pages/UrlsPage/UrlsPage.tsx';
import { MainHeader } from '../../components/Main Header/MainHeader.tsx';
import { loginContext } from '../../contexts/LoginContext.ts';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'wouter';

import './App.css';

function App() {
  const [login, setLogin] = useState(false);
  
  return (
    <main>
      <loginContext.Provider value={{ login: login, setLogin: setLogin }}>
        <MainHeader />
      </loginContext.Provider>
      

        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route path='/urls' component={UrlsPage}/>
          <Route path='/'><Redirect to='/home' /></Route>
          <Route>Not found page</Route>
        </Switch>
    </main>
  )
}

export default App
