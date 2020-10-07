import React from 'react';

const MyForm = props => {
  return(
    <form>
      <input type="text" name="name" placeholder="name"/>
      <input type="text" name="age" placeholder="age"/>
      <button type="submit"> 
        add
      </button>
    </form>
  )
}
export default MyForm;