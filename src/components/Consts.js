import React from 'react';
//import React, {Component} from 'react';  //Not using the component module

const Consts = props => {
     return (
          <form onSubmit={props.addName}>
               <p>Current Student: {props.displayName}</p>
               <input value={props.currentName}
                    onChange={props.changeName}
                    name="mName"
                    placeholder="Name..." />
          </form>
     )
}
export default Consts;

//Not using any styles so it will throw an error.