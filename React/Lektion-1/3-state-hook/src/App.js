import React from 'react'
import { useState } from 'react'

const App = () => {

  //let counter = 0
  const [counter, setCounter] = useState(0)


  console.log(counter)

  const increment = () => {
    setCounter(counter + 1)
    console.log('inner ' + counter)
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default App