import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Ads from './components/Ads';

class App extends Component {
  render () {

    return (
      <div className="App">
        <Header />
        <section style={styles.container}>
          <Nav />
          <Main />
          <Ads />
        </section>
      </div>
    );
  }
}
export default App;

const styles = {
  container: {
    display: 'flex',
    background: 'gray',
    justifyContent: 'space-between'
  }
}