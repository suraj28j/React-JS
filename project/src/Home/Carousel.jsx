import React from 'react'
import { SliderData } from '../Assets/products'

const Carousel = () => {
  return (
    <div className='container' >
      <div className='row d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
      <div class="carousel-inner">
        {
          SliderData.map((item) => (
            <div class='carousel-item active' data-bs-interval="3000" >
              <div className='row d-flex align-items-center'>
              <div className='col-md-1'></div>
                <div className='col-md-5 '>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <button>Visit Collection</button>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-3'>
                  <img src={item.cover} class="d-block img-fluid" alt={item.id} />
                </div>
                <div className='col-md-2'></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
    </div>

  )
}

export default Carousel
