import React, { useState, useEffect } from 'react'
import "./product.css"
import bannerImg from '../../Assets/Images/cover.jpg'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Products } from '../../Assets/Products'


const renderRatingIcon = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className='bi bi-star-fill me-1'></i>)
      rating--;
    } else {
      if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className='bi bi-star-half me-1'></i>)
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className='bi bi-star me-1'></i>)
      }
    }
  }
  return stars;
}


const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const getSingleProduct = () => {
    const getProduct = Products.find((item) => {
      return item.id === id;
    })
    setProduct(getProduct);
    setReviews(getProduct.reviews);
    // console.log(getProduct);

    const getSimilarProduct = Products.filter((item) => {
      return item.id !== id && item.category === getProduct.category;
    })
    setSimilarProduct(getSimilarProduct);
  }



  return (
    <section className='product_section'>
      <div className='banner'>
        <img src={bannerImg} alt='banner_image' />
        <h4 className='translate-middle'>{product.productName}</h4>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={product.imgUrl} alt={product.productName} className='img-fluid' />
          </div>
          <div className='col-md-6 pt-4'>
            <h2>{product.productName}</h2>
            <div className='product_rating'>
              <p><span className='me-4'>{renderRatingIcon(product.avgRating)}</span> {product.avgRating}</p>
            </div>
            <div className='product_price_n_category'>
              <h5>$ {product.price}</h5>
              <h6>Category : {product.category}</h6>
            </div>
            <div className='short_desc'>
              <p>{product.shortDesc}</p>
            </div>
            <div className='input_add_button'>
              <input type='text' />
              <button>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className='row mt-3'>

          <div id="AccExample1">
            <div className="accordion-item">
              <div className='description_n_review'>
                <h6>Description</h6>
                <div data-bs-target="#collapseone" data-bs-toggle="collapse">Reviews ({reviews.length})</div>
              </div>
              <div className="collapse accordion-collapse" id="collapseone" data-bs-parent="#AccExample1">
                {
                  reviews.map((item) => (
                    <div className='acc-item' key={Math.random()}>
                      <span>Jhon Doe</span>
                      <span className='text-warning'>{item.rating} (rating)</span>
                      <span className="accordion-body">{item.text}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <p className='mt-3'>{product.description}</p>
        </div>

        <div className='row g-2 mt-4 mb-4'>
          <h2>You might also like</h2>
          {
            similarProduct.map((item) => (
              <div className='col-sm-6 col-lg-4 col-lg-3' key={item.id}>
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body ">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.imgUrl} className="card-img-top" alt={item.productName} />
                    </Link>
                  </div>
                  <div className="card-title ms-3 me-3">
                    <h5 >{item.productName}</h5>
                    <div className='stars_icon'>{renderRatingIcon(item.avgRating)}</div>
                    <div className='d-flex justify-content-between align-items-center price_tag'>
                      <h6>$ {item.price}</h6>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Product
