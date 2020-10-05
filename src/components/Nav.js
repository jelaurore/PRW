import React from 'react';

const Nav = () => {
  return(
    <nav style={styles.container}>
      <button style={styles.btn}>New Feeds</button>
      <button>Messages</button>
      <button>Watch</button>
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