import React from 'react';
import { FaBeer } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

// Dummy component
const Header = () => {
  return(
    <header style={styles.container}>
      <h2 style={styles.h2}>Facepost <FaBeer/></h2>
      <input type="text" placeholder="Search" className="search"/>
      <div style={styles.icons}>
        <button>icon</button>
        <NavLink to='/Settings'>settings</NavLink>
      </div>
    </header>
  )
}
export default Header;

const styles = {
  container: {
    backgroundColor: 'lavender',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: '0.97rem',
    marginBottom: '1rem' 
  },
  icons: {
    backgroundColor: 'blue'
  },
  h2: {
    paddingTop: '1rem',
    fontSize: '20px',
  }
}