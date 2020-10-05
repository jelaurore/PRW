import React from 'react';

const Main = () => {
  return(
    <main style={styles.container}>
      <p>Main</p>
      
    </main>
  )
}
export default Main;

const styles = {
  container: {
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column'
  },
  btn: {
    backgroundColor: 'brown'
  }
}