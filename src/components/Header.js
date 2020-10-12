import React from 'react';

// Dummy component
const Header = () => {
  return(
    <header style={styles.container}>Facepost</header>
  )
}
export default Header;

const styles = {
  container: {
    backgroundColor: 'lavender',
    display: 'flex',
    marginTop: '0.97rem',
    marginBottom: '1rem' 
  }
}