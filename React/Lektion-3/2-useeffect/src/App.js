import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css';

const App = () => {
  const [showtodos, setshowtodos] = useState(true)
  return (
    <div>
      <button className='btn' onClick={() => setshowtodos(false)}> Hide todos</button>
      {showtodos && <TodoList />}
    </div >
  )
}

export default App