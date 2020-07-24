import React from 'react';

import logo from './logo.svg';
import './_App.scss';

import Clavier from './Keyboard/clavier'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="toto">
          <span>GOURMANDISE</span>
        </div>

        <Clavier />

      </header>
    </div>
  );
}

export default App;
