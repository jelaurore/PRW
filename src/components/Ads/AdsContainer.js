import React from 'react';

const AdsContainer = props => {
  return(
    <article>
      <h1>{props.val.adTitle}</h1>
      <p>{props.val.adDescription}</p>
      <img {...props.val.adImageUrl} alt="img"></img>
    </article>
  ) 
}
export default AdsContainer;