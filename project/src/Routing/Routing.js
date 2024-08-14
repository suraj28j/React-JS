import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default Routing
