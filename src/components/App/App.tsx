import { HomePage } from '../../pages/HomePage/HomePage.tsx';
import { UrlsPage } from '../../pages/UrlsPage/UrlsPage.tsx';
import { MainHeader } from '../../components/Main Header/MainHeader.tsx';
import { loginContext } from '../../contexts/LoginContext.ts';
import { urlsContext } from '../../contexts/UrlsContext.ts';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'wouter';

import './App.css';

const urlsForTest = [
  {"originalUrl": "https://github.com/YahirGX5", "shortUrl": "tttorsiwzgawkha"},
  {"originalUrl": "https://docs.nestjs.com/techniques/performance", "shortUrl": "qcrggcglcnxtxoz"},
  {"originalUrl": "https://react.dev/reference/rules/rules-of-hooks", "shortUrl": "qsrzrpebnqucrhjb"},
  {"originalUrl": "https://react.dev/reference/react/createContext", "shortUrl": "tttorsiwzgatkha"},
  {"originalUrl": "https://github.com/molefrog/wouter?tab=readme-ov-file", "shortUrl": "qsrzrpebnqucrlb"}
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
