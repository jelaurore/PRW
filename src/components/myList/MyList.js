import React from 'react';

const MyList = props => {
  return(
      <li key={props.id}> 
        {props.val.name}
        {props.val.age}
      </li>
  )
}
export default MyList;