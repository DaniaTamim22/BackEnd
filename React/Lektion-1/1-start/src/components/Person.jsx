import React from 'react'

const Person = (props) => {
  return (
    <div className='card'>
      <h2>Name: {props.name} </h2>
      <p>Age: {props.age} </p>
      
    </div>
  )
}

export default Person