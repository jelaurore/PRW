import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Export from './components/Export'
import Classes from './components/Class'
import Consts from './components/Const'


class  App extends Component {
  render() {
    return (
      <div className="App">
        <p>Testing.</p>
        <Header />
        <Export />
        <Classes />
        <Consts />
      </div>
    );
  }
}

export default App;
