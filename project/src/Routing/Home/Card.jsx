import React from 'react'

const Card = () => {
  return (
    <div className='container mt-4 mb-4'>
    <div className='row g-2'>
       
        <div className='col-md-3 mb-3 mb-md-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#fdefe6'}}>
                <div class="card-body">
                    <i class="bi bi-car-front-fill bg-light p-2 rounded-circle"></i>
                    <h5 class="card-title m-4">Free Shiping</h5>
                    <p class="card-text m-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='col-md-3 mb-3 mb-md-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#ceebe9'}}>
                <div class="card-body">
                    <i class="bi bi-credit-card-fill bg-light p-2 rounded-circle"></i>
                    <h5 class="card-title m-4">Safe Payment</h5>
                    <p class="card-text m-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='col-md-3 mb-3 mb-md-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#e2f2b2'}}>
                <div class="card-body">
                    <i class="bi bi-shield-shaded bg-light p-2 rounded-circle"></i>
                    <h5 class="card-title m-4">Secure Payment</h5>
                    <p class="card-text m-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>

        <div className='col-md-3 mb-3 mb-md-0'>
            <div class="card text-center" style={{width: "18rem;", backgroundColor:'#d6e5fb'}}>
                <div class="card-body">
                    <i class="bi bi-headphones bg-light p-2 rounded-circle"></i>
                    <h5 class="card-title m-4">Back Guarantee</h5>
                    <p class="card-text m-4">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
       

    </div>
</div>
  )
}

export default Card
