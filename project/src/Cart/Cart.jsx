import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart_data = useSelector((state) => state.productData.cartData);
  console.log(cart_data);

  return (

    <div className='container' style={{backgroundColor:'#f6f9fc'}}>
      <div className='row'>
        <div className='col-md-8'>
          {
            cart_data && cart_data.length ? (
              cart_data.map((item)=>(
                <div className='row ms-1 me-1 mt-4 mb-4'style={{backgroundColor:'#ffffff'}}>

                  <div className='col-md-4 '>
                    <img src={item.imgUrl} alt={item.id} className='img-fluid'/>
                  </div>

                  <div className='col-md-7 '>
                    <h4 className='mt-4'>{item.productName}</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='mt-4'>$ {item.price}</p>
                      <div className='me-4'>
                        <button className='pb-1' style={{ border: '0px' }}>+</button>
                        <button className='ms-1 ps-2 pe-2 pb-1' style={{ border: '0px' }}>-</button>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div>
                <h4>No Items add in Cart</h4>
              </div>
            )
          }
        </div>

        {/* Cart Summary */}
        <div className='col-md-3 mt-4 ms-1 me-1'style={{backgroundColor:'#ffffff', height:'25vh'}}>
          <h6 className='mt-4'>Cart Summary</h6>
          <hr />
          <p>Total Price</p>
          <h3>0</h3>
        </div>

      </div>
    </div>
  )
}

export default Cart
