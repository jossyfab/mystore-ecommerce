import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import './App.css'
import { useState } from "react"
import ProductDetails from "./pages/ProductDetails"
import Navbar from "./components/Navbar"
import Checkout from "./pages/Checkout"

function App() {



  return (
    
   <Router>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>

    
  )
}

export default App
