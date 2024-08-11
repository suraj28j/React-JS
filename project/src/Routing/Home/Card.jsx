import React from 'react'

const Card = () => {
  return (
    <div className='container mt-2'>
    <div className='row'>
       
        <div className='col-sm-3 mb-3 mb-sm-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#fdefe6'}}>
                <div class="card-body">
                    <span><i class="bi bi-car-front-fill mt-4"></i></span>
                    <h5 class="card-title mt-4">Free Shiping</h5>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='col-sm-3 mb-3 mb-sm-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#ceebe9'}}>
                <div class="card-body">
                    <i class="bi bi-credit-card-fill mt-4"></i>
                    <h5 class="card-title mt-4">Safe Payment</h5>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='col-sm-3 mb-3 mb-sm-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#e2f2b2'}}>
                <div class="card-body">
                    <i class="bi bi-shield-shaded mt-4"></i>
                    <h5 class="card-title mt-4">Secure Payment</h5>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='col-sm-3 mb-3 mb-sm-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#d6e5fb'}}>
                <div class="card-body">
                    <i class="bi bi-headphones mt-4"></i>
                    <h5 class="card-title mt-4">Back Guarantee</h5>
                    <p class="card-text mt-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
       

    </div>
</div>
  )
}

export default Card
