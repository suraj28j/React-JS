import React from 'react'

import watch from '../../Assets/Images/watch-07.png'
import headphone from  '../../Assets/Images/wireless-01.png'
import greenShopha from '../../Assets/Images/hero-img.png'

const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">

          <div className='row'>
            <div className='col-1'></div>
            <div className='col-4 '>
              <h5>50% Off For Your First Shopping</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel inventore ex aliquam facere eius aspernatur atque! 
                Cupiditate beatae necessitatibus error dolorum voluptatem. 
                Atque ea, accusamus unde enim perspiciatis iusto asperiores.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-2'></div>
            <div className='col-4'>
              <img src={watch} class="d-block h-75" alt="watch" />
            </div>
            <div className='col-1'></div>
          </div>

        </div>

        <div class="carousel-item" data-bs-interval="3000">

          <div className='row'>
            <div className='col-1'></div>
            <div className='col-6 align-item-center'>
                
                <h5>50% Off For Your First Shopping</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel inventore ex aliquam facere eius aspernatur atque! 
                Cupiditate beatae necessitatibus error dolorum voluptatem. 
                Atque ea, accusamus unde enim perspiciatis iusto asperiores.</p>
              <button>Visit Collection</button>

              
            </div>
            <div className='col-4'>
              <img src={headphone} class="d-block h-75" alt="headphone" />
            </div>
            <div className='col-1'></div>
          </div>

        </div>

        <div class="carousel-item" data-bs-interval="3000">

          <div className='row'>
            <div className='col-1'></div>
            <div className='col-4'>
              <h5>50% Off For Your First Shopping</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel inventore ex aliquam facere eius aspernatur atque! 
                Cupiditate beatae necessitatibus error dolorum voluptatem. 
                Atque ea, accusamus unde enim perspiciatis iusto asperiores.</p>
              <button>Visit Collection</button>
            </div>
            <div className='col-2'></div>
            <div className='col-4'>
              <img src={greenShopha} class="d-block" alt="greenShopha" />
            </div>
            <div className='col-1'></div>
          </div>

        </div>
      </div>
    </div>
    )
}

export default Carousel
