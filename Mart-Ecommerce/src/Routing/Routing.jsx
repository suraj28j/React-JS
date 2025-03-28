import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home Page/Home'
import Product from '../components/Product Page/Product'
import Shop from '../components/Shop Page/Shop'
import Cart from '../Components/Cart/Cart'

const Routhing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default Routhing
