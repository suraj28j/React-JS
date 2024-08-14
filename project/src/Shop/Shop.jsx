import {discoutProducts} from '../Assets/products'
import { toast } from 'react-toastify'


const shop = () => {

    let buttonHandler = () => {
        toast.success("Addde Successfully")
      }

    return (

        // <div className='container mt-4 mb-4'>

        //     <div className='row mt-4 mb-4'>

        //         <div className='col-md-4'>
        //             <div class="dropdown">
        //                 <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
        //                     style={{ backgroundColor: '#0f3460', color: 'white' }}>
        //                     Filter By Category
        //                 </button>
        //                 <ul class="dropdown-menu">
        //                     <li><a class="dropdown-item" href='#'>Sofa</a></li>
        //                     <li><a class="dropdown-item" href='#'>Chair</a></li>
        //                     <li><a class="dropdown-item" href='#'>Watch</a></li>
        //                     <li><a class="dropdown-item" href='#'>Mobile</a></li>
        //                     <li><a class="dropdown-item" href='#'>Wireless</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className='col-md-8'>
        //             <form class="d-flex" role="search">
        //                 <input class="form-control" type="search" placeholder="Search"/>
        //                 <button class="btn btn-secoandry" type="submit"><i class="bi bi-search p-2"></i></button>
        //             </form>
        //         </div>

        //     </div>

        //     <div className='row g-2 d-flex justify-content-center'>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa1} class="card-img-top w-75 " alt="sofa1" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Stone and Beam<br />Westview</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star"></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 193</h6>
        //                         <button
        //                             onClick={buttonHandler}
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa2} class="card-img-top w-75 " alt="sofa2" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Rivet Bigelow Modern</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 253</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa3} class="card-img-top w-75 " alt="chair2" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Amazon Brand Modern Sofa</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 173</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa2} class="card-img-top w-75 " alt="sofa2" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Rivet Bigelow Modern</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 253</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa5} class="card-img-top w-50 " alt="sofa5" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Fllufy Sheep Sofa</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star"></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 163</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa4} class="card-img-top w-75 " alt="sofa4" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Fllufy Velvet Sofa</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 163</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa5} class="card-img-top w-50 " alt="sofa5" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Fllufy Sheep Sofa</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 163</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-md-4'>
        //             <div className='card' style={{ height: '100%' }}>
        //                 <div className='card-body'>
        //                     <div className='card-img-top d-flex justify-content-center'>
        //                         <img src={sofa6} class="card-img-top w-50 " alt="sofa6" />
        //                     </div>
        //                     <div className='card-title'>
        //                         <h6 class="card-title">Modern Arm Sofa</h6>
        //                         <span className='d-flex mt-4 mb-4'>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                             <i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>
        //                         </span>
        //                     </div>
        //                     <div className='d-flex justify-content-between'>
        //                         <h6>$ 173</h6>
        //                         <button
        //                             style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //     </div>

        // </div>

        <div className='container mt-4 mb-4'>
          <div className='row mt-4 mb-4'>

<div className='col-md-4'>
    <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
            style={{ backgroundColor: '#0f3460', color: 'white' }}>
            Filter By Category
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href='#'>Sofa</a></li>
            <li><a class="dropdown-item" href='#'>Chair</a></li>
            <li><a class="dropdown-item" href='#'>Watch</a></li>
            <li><a class="dropdown-item" href='#'>Mobile</a></li>
            <li><a class="dropdown-item" href='#'>Wireless</a></li>
        </ul>
    </div>
</div>
<div className='col-md-8'>
    <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search"/>
        <button class="btn btn-secoandry" type="submit"><i class="bi bi-search p-2"></i></button>
    </form>
</div>

</div>
      <div className='row g-2'>
        {
          discoutProducts.map((items) => (
            <div className='col-md-4'>
              <div className='card' style={{ height: '100%', }}>
                <div className='d-flex justify-content-between m-2'>
                  <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                  <i class="bi bi-heart-fill" style={{display:'none'}}></i>
                </div>
                <div className='card-body'>
                  <div className='card-img-top d-flex justify-content-center'>
                    <img src={items.imgUrl} class="card-img-top w-75 " alt={items.id} />
                  </div>
                  <div className='card-title'>
                    <h6 class="card-title">{items.productName}</h6>
                    <span className='d-flex mt-4 mb-4'>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star"></i>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h6>$ {items.price}</h6>
                    <button
                        onClick={buttonHandler}
                      style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}
                      >+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    )
}

export default shop
