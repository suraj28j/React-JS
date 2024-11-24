import cover from '../Assets/Images/cover.jpg'
import { useState } from 'react'
import { products } from '../Assets/products'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productAction/ProductAction'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Shop = () => {
  const [coverHeading, setCoverHeading] = useState('product')

  const dispatch = useDispatch();

  // for initial (filter) items to show the page
  let sofa = products.filter((item) => {
    return item.category === 'sofa';
  })
  const [productCategory, setProductCategory] = useState(sofa);

  // item search with dropdown 
  let LinkButtonHandler = (category) => {
    let getItems = products.filter((item) => {
      return item.category === category;
    })
    setProductCategory(getItems)
    setCoverHeading(category)
  }

  // item search with search input 
  const handelSubmit = (e) => {
    e.preventDefault();
    let getItems = products.filter((item) => {
      return item.category === e.target[0].value
    })
    if (getItems) {
      setProductCategory(getItems)
      setCoverHeading(e.target[0].value)
    }
    else
      setProductCategory([])
  }

  // to route pageup //
  const { pathname } = useLocation();
  //  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  // onChange Effect //
  const handleChange = (e) => {
    // console.log(e.target.value);
    let value = e.target.value
    let getItems = products.filter((item) => {
      return item.productName.match(value) || item.category.toLocaleLowerCase().match(value)
    })
    // console.log(getItems);
    if (getItems) {
      setProductCategory(getItems)
      setCoverHeading('product')
    }
    else
      setProductCategory([])
  }


  let buttonHandler = () => {
    toast.success("Added Successfully")
  }

  return (
    <div>
      <div className="position-relative">
        <img src={cover} alt='cover' style={{ width: '100%', height: '25vh', filter: 'brightness(40%)' }} />
        <h3 className="position-absolute top-50 start-50 translate-middle text-white" style={{ zIndex: 2 }}>{coverHeading}</h3>
      </div>
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
              <input className="form-control" type="search" placeholder="Search" onChange={handleChange} />
              <button className="btn btn-secoandry" type="submit"><i className="bi bi-search p-2"></i></button>
            </form>
          </div>
        </div>

        {/* For Products */}
        <div className='row g-2 d-flex justify-content-center'>
          {
            productCategory.length > 0 ? (
              productCategory.map((item) => (
                <div className='col-md-4'>
                  <div className='card' style={{ height: '100%', }} key={item.id}>
                    <div className='card-body'>
                      <Link to={`/product/${item.id}`}>
                        <div className='card-img-top'>
                          <img src={item.imgUrl} className="img-fluid" alt={item.id} />
                        </div>
                      </Link>
                    </div>
                    <div className='card-title ms-4 me-4'>
                      <h6 className="card-title">{item.productName}</h6>
                      <span className='d-flex mt-4 mb-4'>
                        <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      </span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center ms-4 me-4 mb-4'>
                      <h6>$ {item.price}</h6>
                      <button
                        onClick={() => { dispatch(addToCart(item)); buttonHandler() }}
                        style={{ border: '0px', borderRadius: '50%', width: '45px', height: '45px', paddingBottom: '5px', fontSize: '25px' }}
                      >+
                      </button>
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
    </div>
  )
}

export default Shop
