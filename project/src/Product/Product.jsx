import cover from '../Assets/Images/cover.jpg'
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { products } from '../Assets/products'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productAction/ProductAction'

const Product = () => {

  // to route pageup
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  let { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [alsoLike, setalsoLike] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [coverHeading, setCoverHeading] = useState('productName')


  useEffect(() => {
    getProduct()
  },[id]);

  let getProduct = () => {
    let getItem = products.find((item) => {
      return item.id === id;
    })
    // console.log(getItem.reviews.length);
    setProduct(getItem);
    setReviews(getItem.reviews)
    setCoverHeading(getItem.productName);

    let Like = [];
    Like = products.filter((item) => {
      return item.category === getItem.category && item.id !== getItem.id
    })
    setalsoLike(Like)
    // console.log(Like);
  }

  let handelSubmit = (e) => {
    e.preventDefault();
    toast.success("Added Successfully");
  }
  let buttonHandler = () => {
    toast.success("Added Successfully");
  }
  return (
    <>
    <span>
      {/*Cover Photo */}
      <div className="position-relative">
        <img src={cover} alt='cover' style={{ width: '100%', height: '25vh', filter: 'brightness(40%)' }} />
        <h3 className="position-absolute top-50 start-50 translate-middle text-white" style={{ zIndex: 2 }}>{coverHeading}</h3>
      </div>

      <div className='container'>

        {/* for Single Product Details */}
        <div className='row'>
          <div className='col-md-6 mt-2'>
            <img src={product.imgUrl} alt={product.id} className='img-fluid' />
          </div>
          <div className='col-md-6 mt-2'>
            <h2 className='pt-3'>{product.productName}</h2>
            <div className='mt-3'>
              <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <span className='ms-4'>{product.avgRating} ratings</span>
            </div>
            <div className='mt-3'>
              <h5 className='p-2'>$ {product.price} <span className='ms-4 text-muted'>category : {product.category}</span></h5>
              <p className='mt-3'>{product.shortDesc}</p>
            </div>
            <form className='mt-3' onSubmit={handelSubmit}>
              <input type='text' className="form-control" style={{ width: '100px' }} />
              <button className='btn px-2 py-2 mt-2' style={{ backgroundColor: '#0f3460', color: 'white' }}
                onClick={() => { dispatch(addToCart(product)) }}
              >Add to Cart</button>
            </form>
          </div>
        </div>

        <div className='row mt-3 mb-4'>
          <h6>Description
            <Link className='text-decoration-none' data-bs-toggle="collapse" data-bs-target="#Example">
              <span className='ms-4 text-muted' > Reviews ({reviews.length})</span>
            </Link>
          </h6>

          <div className="collapse" id="Example">
            {
              reviews.map((item) => (
                <div className='mt-2 mb-3'>
                  <p>Jhon Doe
                    <br />
                    <span className='text-warning'>{item.rating} (rating)</span>
                    <br />
                    {item.text}</p>
                </div>
              ))
            }
          </div>

          <p>{product.description}</p>
        </div>


        {/* You might also like */}
        <h3>You might also like</h3>
        <div className='row g-2 mt-4 mb-4 d-flex justify-content-center'>
          {
            alsoLike.map((items) => (
              <div className='col-md-4'>
                <div className='card' style={{ height: '100%' }}>
                  <div className='card-body'>
                    <Link to={`/product/${items.id}`}>
                      <div className='card-img-top'>
                        <img src={items.imgUrl} class="img-fluid" alt={items.id} />
                      </div>
                    </Link>
                    </div>
                    <div className='card-title ms-4 me-4'>
                      <h6 className="card-title">{items.productName}</h6>
                      <span className='d-flex mt-4 mb-4'>
                        <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                        <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      </span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center ms-4 me-4 mb-4'>
                      <h6>$ {items.price}</h6>
                      <button
                        style={{ border: '0px',borderRadius: '50%', width:'45px',height:'45px',paddingBottom:'5px',fontSize:'25px'}}
                        onClick={() => { dispatch(addToCart(items)); buttonHandler() }}
                      >+
                      </button>
                    </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      </span>
    </>
  )
}

export default Product
