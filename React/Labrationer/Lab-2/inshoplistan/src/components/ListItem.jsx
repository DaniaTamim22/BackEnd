import { useState } from 'react';
import ChangeItem from './ChangeItem';

const ListItem = ({ item, toggleComplete, deleteItem, changeItem }) => {
	const [ change, setChange ] = useState(false);

	const toggleChange = () => {
		setChange((state) => !state);
	};

	const changeText = (text) => {
		changeItem(item, text);
		setChange(false);
	};
	return (
		<div className="ListItem">
			{change ? (
				<ChangeItem item={item} changeText={changeText} />
			) : (
				<p onClick={() => toggleComplete(item)} className={`product-title ${item.completed && 'complete'}`}>
					{item.product}
				</p>
			)}
			<div className="buttons">
				<button className="btn btn-change" onClick={toggleChange}>
					<i class="fa-solid fa-pen" />
				</button>
				<button
					className="btn btn-delete"
					onClick={() => {
						deleteItem(item.id);
					}}
				>
					<i class="fa-solid fa-trash" />
				</button>
			</div>
		</div>
	);
};

export default ListItem;
