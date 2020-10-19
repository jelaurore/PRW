import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return(
    <nav style={styles.container}>
      <NavLink to='/NewsFeed' style={styles.btn}>New Feeds</NavLink>
      <NavLink to='/Messages'>Messages</NavLink>
      <NavLink to='/Watch'>Watch</NavLink>
    </nav>
  )
}
export default Nav;

const styles = {
  container: {
    backgroundColor: 'lavender',
    display: 'flex',
    flexDirection: 'column',
    width: '10%',
    //padding: '10%',
    paddingBottom: '5%'
  },
  btn: {
    backgroundColor: 'brown'
  }
}