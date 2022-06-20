import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);

	const [ url, setUrl ] = useState(' http://localhost:8080/todos');

	// const getTodos = async () => {
	//   const res = await axios.get(url)
	//   setTodos(res.data)

	// }

	const getTodos = useCallback(
		async () => {
			const res = await axios.get(url);
			setTodos(res.data);
		},
		[ url ]
	);
	useEffect(
		() => {
			// axios.get(url)
			//   .then(res => {
			//     setTodos(res.data)
			//   })
			getTodos();
		},
		[ getTodos ]
	);
	return (
		<div className="todo-list container">
			{todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
			<button className="btn" onClick={() => setUrl(' http://localhost:8080/todos')}>
				All users
			</button>
			<button className="btn" onClick={() => setUrl(' http://localhost:8080/todos?user=1')}>
				user 1
			</button>
		</div>
	);
};

export default TodoList;
