import React from 'react'

const Form = ({onChange}) => {
  return (
        <form>
          <input type='text' placeholder='Search by title or keywords' onChange={onChange}/>
        </form>
  );
}
export default Form
