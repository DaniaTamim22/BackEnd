import React from 'react';
import ListItem from './ListItem';

const ShoppingList = ({ items, toggleComplete, deleteItem, changeItem, setShowModal }) => {
	return (
		<div className="ShoppingList">
			{items &&
				items.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						toggleComplete={toggleComplete}
						deleteItem={deleteItem}
						changeItem={changeItem}
					/>
				))}
		</div>
	);
};

export default ShoppingList;
