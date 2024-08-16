import { useState } from 'react'
import { discoutProducts } from '../Assets/products'
import { products } from '../Assets/products'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const Shop = () => {
  const [productCategory, setProductCategory] = useState(discoutProducts)

  

  let LinkButtonHandler = (cat) => {
    console.log(cat);
    let getItems = products.filter((item) => {
      return item.category === cat;
    })
    setProductCategory(getItems)
    
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    let getItems = products.filter((item) => {  
      return item.category === e.target[0].value
    })
    if(getItems)
      setProductCategory(getItems)
      else
      setProductCategory([])
  }


  let buttonHandler = () => {
    toast.success("Addde Successfully")
  }

  return (

    <div className='container mt-4 mb-4'>

      {/* For dropdown and search bar */}
      <div className='row mt-4 mb-4 '>

        <div className='col-md-4 mt-2'>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
              style={{ backgroundColor: '#0f3460', color: 'white' }}>
              Filter By Category
            </button>
            <ul class="dropdown-menu">
              <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('sofa')}>Sofa</Link></li>
              <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('chair')}>Chair</Link></li>
              <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('watch')}>Watch</Link></li>
              <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('mobile')}>Mobile</Link></li>
              <li><Link className="dropdown-item" onClick={() => LinkButtonHandler('wireless')}>Wireless</Link></li>
            </ul>
          </div>
        </div>

        <div className='col-md-8 mt-2'>
          <form className="d-flex" role="search" onSubmit={handelSubmit}>
            <input className="form-control" type="search" placeholder="Search" />
            <button className="btn btn-secoandry" type="submit"><i className="bi bi-search p-2"></i></button>
          </form>
        </div>
      </div>

      {/* For Products */}
      <div className='row g-2 d-flex justify-content-center'>
        {
          productCategory.length>0 ? (
            productCategory.map((items) => (
              <div className='col-md-4'>
                <div className='card' style={{ height: '100%', }}>
                  <div className='card-body'>
                  <Link to={`/product/${items.id}`}>
                    <div className='card-img-top d-flex justify-content-center'>
                      <img src={items.imgUrl} class="card-img-top img-fluid " alt={items.id} />
                    </div>
                    </Link>
                    <div className='card-title'>
                      <h6 className="card-title">{items.productName}</h6>
                      <span className='d-flex mt-4 mb-4'>
                        <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
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
          ) : (
            
            <div className='col bg-light text-center'>
              <h5>Item not found</h5>
              </div>
          )
        }
      </div>
    </div>
  )
}

export default Shop
