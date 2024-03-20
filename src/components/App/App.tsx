import { useState } from 'react';
import { loginContext } from '../../contexts/LoginContext';
import { MainHeader } from '../Main Header/MainHeader';

import './App.css'

function App() {
  const [login, setLogin] = useState(false);

  return (
    <loginContext.Provider value={{ login: login, setLogin: setLogin }}>
      <main className='Main'>
        <MainHeader />
     
        
      </main>
    </loginContext.Provider>
    
  )
}

export default App
