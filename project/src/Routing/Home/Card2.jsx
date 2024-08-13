import React, { useState } from 'react'

import sofa1 from '../../Assets/Images/double-sofa-01.png'
import sofa2 from '../../Assets/Images/double-sofa-02.png'
import chair2 from '../../Assets/Images/arm-chair-02.jpg'
import chair3 from '../../Assets/Images/arm-chair-03.jpg'
import realme from '../../Assets/Images/phone-03.png'
import onepluse from '../../Assets/Images/phone-04.jpg'
import { Link } from 'react-router-dom'


const Card2 = () => {
  const[color,setColor] = useState(true)

  return (
    // <div className='container mt-4'>
    //   <h2 className='text-center'>Big Discount</h2>
    //   <div class="row row-cols-1 row-cols-md-3 g-2">

    //     <div class="col">
    //       <div class="card" style={{width:'350px',height:'400px'}}>
    //         <div className='d-flex justify-content-between m-2'>
    //           <span className='p-2' style={{ backgroundColor: '#0f3460',color:'white',borderRadius: '5px',fontSize: '12px' }}>30% off</span><i class="bi bi-heart-fill"></i>
    //         </div>
    //         <div className='d-flex justify-content-center'>
    //           <img src={sofa1} class="card-img-top w-50 " alt="sofa1" />
    //         </div>
    //         <div class="card-body">
    //           <h6 class="card-title">Stone and Beam<br />Westview</h6>
    //           <span className='d-flex mt-4 mb-4'>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //           </span>
    //           <div className='d-flex justify-content-between m-2'>
    //             <span>$ 193</span>
    //             <span>+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="col">
    //       <div class="card" style={{width:'350px',height:'400px'}}>
    //         <div className='d-flex justify-content-between m-2'>
    //           <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px', fontSize: '12px' }}>20% off</span><i class="bi bi-heart-fill"></i>
    //         </div>
    //         <div className='d-flex justify-content-center'>
    //           <img src={sofa2} class="card-img-top w-50 " alt="sofa1" />
    //         </div>
    //         <div class="card-body">
    //           <h6 class="card-title">Rivet Bigelow Modern</h6>
    //           <span className='d-flex mt-4 mb-4'>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //           </span>
    //           <div className='d-flex justify-content-between m-2'>
    //             <span>$ 253</span>
    //             <span>+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="col">
    //       <div class="card" style={{width:'350px',height:'400px'}}>
    //         <div className='d-flex justify-content-between m-2'>
    //           <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px', fontSize:'12px'}}>30% off</span><i class="bi bi-heart-fill"></i>
    //         </div>
    //         <div className='d-flex justify-content-center'>
    //           <img src={chair2} class="card-img-top w-50" alt="chair2" />
    //         </div>
    //         <div class="card-body">
    //           <h6 class="card-title">Baltsar Chair</h6>
    //           <span className='d-flex mt-4 mb-4'>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //           </span>
    //           <div className='d-flex justify-content-between'>
    //             <span>$ 89</span>
    //             <span>+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="col">
    //       <div class="card" style={{width:'350px',height:'400px'}}>
    //         <div className='d-flex justify-content-between m-2'>
    //           <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px', fontSize:'12px'}}>30% off</span><i class="bi bi-heart-fill"></i>
    //         </div>
    //         <div className='d-flex justify-content-center'>
    //           <img src={chair3} class="card-img-top w-50 " alt="chair3" />
    //         </div>
    //         <div class="card-body">
    //           <h6 class="card-title">Baltsar Chair</h6>
    //           <span className='d-flex mt-4 mb-4'>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //           </span>
    //           <div className='d-flex justify-content-between'>
    //             <span>$ 89</span>
    //             <span>+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="col">
    //       <div class="card" style={{width:'350px',height:'400px'}}>
    //         <div className='d-flex justify-content-between m-2'>
    //           <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px', fontSize: '12px'}}>10% off</span><i class="bi bi-heart-fill"></i>
    //         </div>
    //         <div className='d-flex justify-content-center m-2'>
    //           <img src={realme} class="card-img-top w-50 " alt="realme" />
    //         </div>
    //         <div class="card-body">
    //           <h6 class="card-title">Realme 8</h6>
    //           <span className='d-flex mt-4 mb-4'>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //           </span>
    //           <div className='d-flex justify-content-between m-2'>
    //             <span>$ 599</span>
    //             <span>+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="col">
    //       <div class="card" style={{width:'350px',height:'400px'}}>
    //         <div className='d-flex justify-content-between m-2'>
    //           <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px', fontSize: '12px' }}>5% off</span><i class="bi bi-heart-fill"></i>
    //         </div>
    //         <div className='d-flex justify-content-center m-2'>
    //           <img src={onepluse} class="card-img-top w-50 " alt="onepluse" />
    //         </div>
    //         <div class="card-body">
    //           <h6 class="card-title">One Plus Nord</h6>
    //           <span className='d-flex mt-4 mb-4'>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-star-fill"></i>
    //           </span>
    //           <div className='d-flex justify-content-between m-2'>
    //             <span>$ 799</span>
    //             <span>+</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div className='container mt-4 mb-4'>

      <div className='row g-2'>

      <h2 className='text-center'>Big Discount</h2>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='d-flex justify-content-between m-2'>
              <span className='p-2' style={{backgroundColor:'#0f3460',color:'white',borderRadius:'5px'}}>30% off</span>
              <Link><i class="bi bi-heart-fill" style={{color:color ? "white" : "black"}}
              onMouseEnter={()=>setColor(false)}
              onMouseLeave={()=>setColor(true)}
              ></i></Link>
            </div>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={sofa1} class="card-img-top w-75 " alt="sofa1" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Stone and Beam<br/>Westview</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star"></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 193</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='d-flex justify-content-between m-2'>
              <span className='p-2' style={{backgroundColor: '#0f3460', color: 'white', borderRadius: '5px'}}>20% off</span>
              <i class="bi bi-heart-fill"></i>
            </div>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={sofa2} class="card-img-top w-75 " alt="sofa2" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Rivet Bigelow Modern</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 253</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card' style={{height:'100%'}}>
            <div className='d-flex justify-content-between m-2'>
              <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px'}}>15% off</span>
              <i class="bi bi-heart-fill"></i>
            </div>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={chair2} class="card-img-top w-50 " alt="chair2" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Baltsar Chair</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 89</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='d-flex justify-content-between m-2'>
              <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px'}}>35% off</span>
              <i class="bi bi-heart-fill"></i>
            </div>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={chair3} class="card-img-top w-50 " alt="chair3" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Helmar Chair</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                </span>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>$ 112</h6>
                <button 
                style={{border:'0px',borderRadius:'50%',width:'30px',height:'30px',paddingBottom:'4px'}}>+
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card'style={{height:'100%'}}>
            <div className='d-flex justify-content-between m-2'>
              <span className='p-2' style={{backgroundColor: '#0f3460',color: 'white',borderRadius: '5px'}}>10% off</span>
              <i class="bi bi-heart-fill"></i>
            </div>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={realme} class="card-img-top w-50 " alt="realme" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">Realme 8</h6>
                <span className='d-flex mt-4 mb-4'>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star-fill" style={{color:'yellow'}}></i>
                  <i class="bi bi-star"></i>
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
            <div className='d-flex justify-content-between m-2'>
              <span className='p-2' style={{backgroundColor: '#0f3460',color: 'white',borderRadius: '5px'}}>5% off</span>
              <i class="bi bi-heart-fill"></i>
            </div>
            <div className='card-body'>
              <div className='card-img-top d-flex justify-content-center'>
                <img src={onepluse} class="card-img-top w-50 " alt="onepluse" />
              </div>
              <div className='card-title'>
                <h6 class="card-title">One Plus Nord</h6>
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

      </div>

    </div>
  )
}

export default Card2
