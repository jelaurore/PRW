import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
//import Main from './components/Main';
import Ads from './components/Ads';
import MyForm from './components/myForm/MyForm';
import MyList from './components/myList/MyList';

class App extends Component {

  state = {
    people: [{
      name: 'Jean', 
      age: '50'
    },{
      name: 'Thomas',
      age: '18'
    }]
  }

  render () {
      let people = this.state.people.map((element, i) => {
        return <MyList key={i} val={element} />
      })
    return (
      <div className="App">
        <Header />
        <section style={styles.container}>
          <Nav />
          {/* <Main /> */}
          <MyForm />
          {people}
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