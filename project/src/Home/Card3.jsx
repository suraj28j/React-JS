import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../Assets/products'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/productAction/ProductAction'

const Card2 = () => {

  const dispatch = useDispatch();

  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    let data = [];
    data = products.filter((item) => {
      return item.category === 'mobile' || item.category === 'wireless'
    })
    setArrivals(data);
  }

  let buttonHandler = () => {
    toast.success("Added Successfully")
  }

  return (
    <div className='container mt-4 mb-4'>
      <h2 className='text-center mt-4'>New Arrivals</h2>
      <div className='row g-2 d-flex justify-content-center'>

        {
          arrivals.map((item) => (
            <div className='col-md-4'>
              <div className='card' style={{ height: '100%' }}>
                <div className='card-body'>
                  <Link to={`product/${item.id}`}>
                    <div className='card-img-top d-flex justify-content-center'>
                      <img src={item.imgUrl} class="card-img-top w-75 " alt={item.id} />
                    </div>
                  </Link>
                  <div className='card-title'>
                    <h6 class="card-title">{item.productName}</h6>
                    <span className='d-flex mt-4 mb-4'>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h6>$ {item.price}</h6>
                    <button
                      style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }} 
                      onClick={()=>{dispatch(addToCart(item));buttonHandler()}}
                      >+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card2
