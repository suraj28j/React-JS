import React from 'react'
import { discoutProducts } from '../Assets/products'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/productAction/ProductAction'

const Card2 = () => {

  const dispatch = useDispatch();

  let buttonHandler = () => {
    toast.success("Addde Successfully")
  }

  return (
    <div style={{backgroundColor:'#f6f9fc'}}>
    <div className='container mt-4 mb-4'>
      <div className='row mt-4 g-2'>
      <h2 className='text-center mt-4'>Big Discount</h2>
        {
          discoutProducts.map((items) => (
            <div className='col-md-4'>

              <div className='card' style={{ height: '100%' }}>
                <div className='d-flex justify-content-between m-2'>
                  <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                  <i class="bi bi-heart"></i>
                </div>
                <div className='card-body'>
                  <Link to={`product/${items.id}`}>
                    <div className='card-img-top d-flex justify-content-center'>
                      <img src={items.imgUrl} class="card-img-top img-fluid" alt={items.id} />
                    </div>
                  </Link>
                  <div className='card-title'>
                    <h6 class="card-title">{items.productName}</h6>
                    <span className='d-flex mt-4 mb-4'>
                      <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h6>$ {items.price}</h6>
                    <button
                      style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}
                      onClick={()=>{dispatch(addToCart(items));buttonHandler()}}
                    >+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Card2
