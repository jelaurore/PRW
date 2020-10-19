import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { CgProfile} from 'react-icons/cg';
import {NavLink} from 'react-router-dom';

// Dummy component
const Header = () => {
  return(
    <header style={styles.container}>
      <h2 style={styles.h2}>Facepost <FaInstagram/></h2>
      <input type="text" placeholder="Search" className="search"/>
      <div style={styles.icons}>
        <button><CgProfile/></button>
        <button><AiFillSetting/></button>
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