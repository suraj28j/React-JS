import React from 'react'

const Cart = () => {
  return (
    <div className='container'>
      <div className='row mt-4 mb-4'>
        <div className='col-md-7 bg-light' style={{height:'25vh'}}>
          No Items add in Cart
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-4 bg-light'>
          <h6 className='mt-4'>Cart Summary</h6>
          <hr/>
          <p>Total Price</p>
          <h3>0</h3>
        </div>
      </div>
    </div>
  )
}

export default Cart
