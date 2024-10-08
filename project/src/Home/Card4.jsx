import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../Assets/products'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/productAction/ProductAction'

const Card4 = () => {

  const dispatch = useDispatch();
  
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    let data = [];
    data = products.filter((item) => {
      return item.category === 'sofa'
    })
    setArrivals(data);
  }

  let buttonHandler = () => {
    toast.success("Added Successfully")
  }

  return (
    <>
    <div style={{backgroundColor:'#f6f9fc'}}>
    <div className='container mt-4 mb-4'>
      <div className='row mt-4 g-2 d-flex justify-content-center'>
      <h2 className='text-center mt-4'>Best Sales</h2>
        {
          arrivals.map((item) => (
            <div className='col-md-4'>
              <div className='card' style={{ height: '100%' }} key={item.id}>
                <div className='card-body'>
                  <Link to={`product/${item.id}`}>
                    <div className='card-img-top'>
                      <img src={item.imgUrl} className="img-fluid" alt={item.id} />
                    </div>
                  </Link>
                  </div>
                  <div className='card-title ms-4 me-4'>
                    <h6>{item.productName}</h6>
                    <span className='d-flex mt-4 mb-4'>
                      <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center ms-4 me-4 mb-4'>
                    <h6>$ {item.price}</h6>
                    <button
                      style={{ border: '0px',borderRadius: '50%', width:'45px',height:'45px',paddingBottom:'5px',fontSize:'25px' }} 
                      onClick={()=>{dispatch(addToCart(item));buttonHandler()}}
                      >+</button>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

    </div>
    </>
  )
}

export default Card4
