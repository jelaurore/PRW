import React from 'react';

const Ads = () => {
  return(
    <aside style={styles.container}>
      <p>Ads</p>
      
    </aside>
  )
}
export default Ads;

const styles = {
  container: {
    backgroundColor: 'silver',
    display: 'flex',
    flexDirection: 'column'
  },
  btn: {
    backgroundColor: 'brown'
  }
}