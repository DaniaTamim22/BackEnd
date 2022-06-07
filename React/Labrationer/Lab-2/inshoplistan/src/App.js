import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddItemForm from './components/AddItemForm';
import Header from './components/Header';
import Modal from './components/Modal';
import ShoppingList from './components/ShoppingList';

function App() {
  const [showModal, setShowModal] = useState(false)

  const [items, setItems] = useState([
    {
      id: uuidv4(),
      product: 'Milk',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'Bread',
      completed: true
    },
    {
      id: uuidv4(),
      product: 'Butter',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'Cookies',
      completed: false
    }
  ]);

  const addItem = product => {
    setItems(state => {
      return [{ id: uuidv4(), product, completed: false }, ...state]
    })

  }


  const toggleComplete = item => {
    item.completed = !item.completed
    setItems(state => {
      state.sort((a, b) => a.completed - b.completed)
      return [...state]
    })
  }

  const deleteItem = id => {
    setItems(state => state.filter(item => item.id !== id))
  }

  const changeItem = (item, newText) => {
    item.product = newText
    setItems(state => [...state])
  }

  const clearList = () => {
    setItems([])
    setShowModal(false)
  }

  return (
    <div className=" App container">
      <Header title='Shopping List' openModal={setShowModal} />
      <ShoppingList items={items} toggleComplete={toggleComplete} deleteItem={deleteItem} changeItem={changeItem} />
      <AddItemForm addItem={addItem} />
      {showModal && <Modal clearList={clearList} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
