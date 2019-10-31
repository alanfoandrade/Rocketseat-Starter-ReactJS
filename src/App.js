import React from 'react';

import Main from './pages/main';

import './styles.css';

import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

/**
 *
 *
 *
 import React, { Component } from 'react';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
 *
 *
 */
