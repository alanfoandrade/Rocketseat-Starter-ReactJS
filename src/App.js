import React from 'react';
import Routes from './routes';
import './styles.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
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
