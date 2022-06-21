import { useState } from 'react'
import './App.css';
import Todos from './components/Todos';

const App = () => {

  const [showtodos, setShowtodos] = useState(true)
  return (
    <div>
      <button onClick={() => setShowtodos(false)}>Hide Todos</button>
      {showtodos && <Todos />}
    </div>
  )
}

export default App