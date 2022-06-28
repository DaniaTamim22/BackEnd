import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Products from './Views/Products'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/products' element={<Products />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App