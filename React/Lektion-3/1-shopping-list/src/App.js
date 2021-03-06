import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import AddItemForm from './components/AddItemForm';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';

function App() {

  const [Items, setItems] = useState([
    {
      id: uuidv4(),
      product: 'Milk',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'Bread',
      completed: false
    },
    {
      id: uuidv4(),
      product: 'Butter',
      completed: false
    },
  ])

  return (
    <div className='App container'>
      <Header title="Shopping List" Items={Items} />
      <ShoppingList />
      <AddItemForm />
    </div>
  );
}

export default App;
