import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadData() {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setUser(data.results);
    }

    loadData()
  }, [])

  console.log(user)

  return (
    

    
    <div className="App">
      <ul>
          {

            user && user.results.map(usr => <User user={usr}></User>)
          }
      </ul>
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
