import React from 'react'

import iphone12pro from '../../Assets/Images/phone-06.jpg'
import iphone12max from '../../Assets/Images/phone-05.jpg'
import realme from '../../Assets/Images/phone-03.png'
import onepluse from '../../Assets/Images/phone-04.jpg'
import samsungS22 from '../../Assets/Images/phone-02.jpg'
import iphone13pro from '../../Assets/Images/phone-01.jpg'



const Card2 = () => {

  return (

    <div className='container mt-4 mb-4'>

      <div className='row g-2'>

      <h2 className='text-center'>New Arrivals</h2>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={iphone12pro} class="card-img-top w-75 " alt="iphone12pro" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Apple iPhone 12 Pro</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star"></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>$ 799</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={iphone12max} class="card-img-top w-75 " alt="iphone12max" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Apple iPhone 12 Pro</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>$ 799</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card' style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={realme} class="card-img-top w-75 " alt="realme" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Realme 8</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>$ 599</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={onepluse} class="card-img-top w-75 " alt="onepluse" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">One Pluse Nord</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>$ 799</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={iphone13pro} class="card-img-top w-75 " alt="iphone13pro" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Apple iPhone 13 Pro</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star"></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <span className='fw'>$ 899</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={samsungS22} class="card-img-top w-75 " alt="samsungS22" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Samsung Galaxy S22</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <span>$ 699</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Card2
