import React, { Component } from 'react'
import './App.css'
import AddProductForm from './components/AddProductForm'
import Product from './components/Product'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        { id: Date.now().toString(), name: 'Product 1', desc: 'product Description' }
      ]
    }

  }


  componentDidMount() { }
  componentDidUpdate() { }
  render() {
    return (
      <div>
        <AddProductForm />
        {
          this.state.products.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    )
  }
}
