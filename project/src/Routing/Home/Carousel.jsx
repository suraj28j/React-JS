import React from 'react'

import watch from '../../Assets/Images/watch-07.png'
import headphone from '../../Assets/Images/wireless-01.png'
import greenShopha from '../../Assets/Images/hero-img.png'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide mt-2" data-bs-ride="carousel" >
      <div class="carousel-inner border d-flex justify-items-center align-items-center" style={{height:'100vh'}}>

        <div class="carousel-item active" data-bs-interval="3000">
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-4 border'>
              <h2>50% Off For Your First Shopping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
              <img src={watch} class="d-block w-25" alt="watch" />
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-4 border'>
              <h2>50% Off For Your First Shopping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
              <img src={headphone} class="d-block w-25"alt="headphone" />
            </div>
            <div className='col-md-1'></div>
          </div>

        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <div className='row '>
            <div className='col-md-1'></div>
            <div className='col-md-4 border'>
              <h2>50% Off For Your First Shopping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
              <img src={greenShopha} class="d-block w-50"alt="greenShopha" />
            </div>
            <div className='col-md-1'></div>
          </div>
        </div>

      

      </div>
    </div>

  
  )
}

export default Carousel
