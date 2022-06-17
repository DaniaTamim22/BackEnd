import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import TodoItem from './components/TodoItem';
import './App.css';


function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: 'todo 1',
    //   completed: false,
    //   user: 1
    // },
    // {
    //   id: 2,
    //   title: 'todo 2',
    //   completed: false,
    //   user: 1
    // }
  ])

  const [url] = useState(' http://localhost:8080/todos')


  // const getTodos = async () => {
  //   const res = await axios.get(url)
  //   setTodos(res.data)

  // }

  const getTodos = useCallback(async () => {
    const res = await axios.get(url)
    setTodos(res.data)


  }, [url])
  useEffect(() => {
    // axios.get(url)
    //   .then(res => {
    //     setTodos(res.data)
    //   })
    getTodos()

  }, [getTodos])
  return (
    <div className="App container">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
      <button className='btn'>All users</button>
      <button className='btn'>user 1</button>
    </div>
  );
}

export default App;
