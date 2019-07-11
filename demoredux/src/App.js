import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserContainer from './container/user-list';

function App() {
  return (
    <div className="App">
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to react js with redux
        </p>
        <h1>List food</h1>
        <UserContainer />
        <hr/>
        <h1>Food detail</h1>
      </header>
    </div>
  );
}

export default App;
