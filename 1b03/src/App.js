import './App.css';
import { useState } from 'react'
import Logado from './components/Logado';

function App() {
  const [login, setLogin] = useState(false)
  const user = 'Guilherme'
  return (
    <div className="App">
      <header className="App-header">
        <Logado login={login} setLogin={setLogin} user={user}/>
      </header>
    </div>
  );
}

export default App;
