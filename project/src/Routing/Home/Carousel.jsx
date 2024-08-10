import React from 'react'

import watch from '../../Assets/Images/watch-07.png'
import headphone from '../../Assets/Images/wireless-01.png'
import greenShopha from '../../Assets/Images/hero-img.png'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
      <div class="carousel-inner" style={{height:'450px'}}>

        <div class="carousel-item active" data-bs-interval="3000">
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-1'></div>
            <div className='col-5 '>
              <h5>50% Off For Your First Shopping</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-1'></div>
            <div className='col-4'>
              <img src={watch} class="d-block md-w-100" alt="watch" />
            </div>
            <div className='col-1'></div>
          </div>
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-1'></div>
            <div className='col-5'>
              <h5>50% Off For Your First Shopping</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-1'></div>
            <div className='col-4'>
              <img src={headphone} class="d-block md-w-100" alt="headphone" />
            </div>
            <div className='col-1'></div>
          </div>

        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-1'></div>
            <div className='col-5'>
              <h5>50% Off For Your First Shopping</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-4'>
              <img src={greenShopha} class="d-block md-w-100" alt="greenShopha" />
            </div>
            <div className='col-2'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Carousel
