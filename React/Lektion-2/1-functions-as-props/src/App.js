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

  const addCustomer = (customerName) => {
    const customer = {
      id: Date.now().toString(),
      name: customerName
    }
    setcustomers(oldCustomers => {
      return [...oldCustomers, customer]
    })
  }

  const removeCustomer = (id) => {

    setcustomers(oldCustomers => {
      return oldCustomers.filter(customer => customer.id !== id)
    })

  }
  return (
    <div>
      <Header title="Customer List" />
      <div className="container mt-5">
        <AddCustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} removeCustomer={removeCustomer} />

      </div>
    </div>
  )
}

export default App