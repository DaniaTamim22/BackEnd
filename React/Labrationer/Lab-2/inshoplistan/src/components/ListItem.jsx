import React from 'react';

const ListItem = ({ item, toggleComplete }) => {
	return (
		<div className="ListItem">
			<p onClick={() => toggleComplete(item)} className={`product-title ${item.completed && 'complete'}`}>
				{item.product}
			</p>
			<div className="buttons">
				<button className="btn btn-change">
					<i class="fa-solid fa-pen" />
				</button>
				<button className="btn btn-delete">
					<i class="fa-solid fa-trash" />
				</button>
			</div>
		</div>
	);
};

export default ListItem;
