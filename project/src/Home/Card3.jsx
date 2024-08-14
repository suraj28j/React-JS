import React from 'react'

import iphone12pro from '../Assets/Images/phone-06.jpg'
import iphone12max from '../Assets/Images/phone-05.jpg'
import realme from '../Assets/Images/phone-03.png'
import onepluse from '../Assets/Images/phone-04.jpg'
import samsungS22 from '../Assets/Images/phone-02.jpg'
import iphone13pro from '../Assets/Images/phone-01.jpg'
import headphone1 from '../Assets/Images/wireless-01.png'
import headphone2 from '../Assets/Images/wireless-02.png'
import headphone3 from '../Assets/Images/wireless-03.png'
import headphone4 from '../Assets/Images/wireless-04.png'
import { Link } from 'react-router-dom'

const Card2 = () => {

  return (

    <div className='container mt-4 mb-4'>
      <h2 className='text-center'>New Arrivals</h2>
      
      <div className='row g-2 d-flex justify-content-center'>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
            {/* <Link to={`product/${items.id}`}> */}
              <div className='card-img-top d-flex justify-content-center'>
                <img src={iphone12pro} class="card-img-top w-75 " alt="iphone12pro" />
              </div>
              {/* </Link> */}
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
                <h6>$ 799</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
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
                <h6>$ 799</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
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
                <h6>$ 599</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
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
                <h6>$ 799</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
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
                <h6>$ 899</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
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
                <h6>$ 699</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={headphone1} class="card-img-top w-75 " alt="headphone1" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Beat Studio Wireless</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 199</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={headphone3} class="card-img-top w-75 " alt="headphone3" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Beat EP Headphones</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 199</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={headphone2} class="card-img-top w-75 " alt="headphone2" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Black Headphones</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 169</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={headphone4} class="card-img-top w-75 " alt="headphone4" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Bluetooth Headphones</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 139</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card2
