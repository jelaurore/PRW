import React from 'react';

const AdsContainer = props => {
  return(
    <article>
      <h1>{props.val.adTitle}</h1>
      <p>{props.val.adDescription}</p>
    </article>
  ) 
}
export default AdsContainer;