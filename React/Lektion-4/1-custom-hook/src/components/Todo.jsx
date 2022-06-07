import { useState, useEffect } from 'react';

const Todo = () => {
	const [ url, setUrl ] = useState('https://jsonplaceholder.typicode.com/todos');

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
		};
	});
	return (
		<div className="todo-list">
			<button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>All user</button>
			<button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=1')}>User 1</button>
			<button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=2')}>User 2</button>
			<button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=3')}>User 3</button>
			<button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=4')}>User 4</button>
		</div>
	);
};

export default Todo;
