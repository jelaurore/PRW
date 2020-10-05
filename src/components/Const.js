import React, {Component} from 'react';

const Consts = props => {
  return (
       <form style={styles.formCont} onSubmit={props.addName}>
            <p>Current Student: {props.displayName}</p>
            <input style={styles.input}
                         value={props.currentName}
                          onChange={props.changeName}
                          name="mName"
                          placeholder="Name..." />
       </form>
  )
}
export default Consts;