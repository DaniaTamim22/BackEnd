import { useState } from 'react';

import './App.css';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerList from './components/CustomerList';
import Header from './components/Header';


const App = () => {
  const [customers, setcustomers] = useState([
    { id: '23243guy8', name: 'Dania' },
    { id: '7gff6t843', name: 'Zain' }
  ]);
  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm />
        <CustomerList />

      </div>
    </div>
  )
}

export default App