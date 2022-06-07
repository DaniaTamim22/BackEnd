import { useState, useRef, useEffect } from 'react';

const ChangeItem = ({ item, changeText }) => {
	const [ text, setText ] = useState(item.product);
	const input = useRef();

	useEffect(() => {
		input.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefualt();
		changeText(text);
	};
	return (
		<form className="ChangeItem" onSubmit={handleSubmit}>
			<input type="text" ref={input} value={text} onChange={(e) => setText(e.target.value)} />
			<button className="btn btn-check">
				<i className="fa-solid fa-check" />
			</button>
		</form>
	);
};

export default ChangeItem;
