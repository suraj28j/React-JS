import React, { useEffect, useState } from 'react'
import "./Shop.css";
import bannerImg from "../../Assets/Images/cover.jpg"
import { Products } from '../../Assets/Products';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/productAction/ProductAction';
import { toast } from 'react-toastify';

// Star Icons Randring //
const renderRatingIcon = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className='bi bi-star-fill me-1'></i>)
      rating--;
    } else {
      if (rating > 0 && rating < 1) {
        stars.push(<i key={`half${i}`} className='bi bi-star-half me-1'></i>)
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className='bi bi-star me-1'></i>)
      }
    }
  }
  return stars;
}

const Shop = () => {

  const dispatch = useDispatch()
  const toastMessage = () => {
    toast.success("Added Successfully");
  }

  let sofa = Products.filter((item) => {
    return item.category === 'sofa';
  })

  const [shopProduct, setShopProduct] = useState(sofa);
  const [coverHeading, setCoverHeading] = useState('product');

  const filterByCategory = (categoryName) => {
    let filterProduct = Products.filter((item) => {
      return item.category === categoryName;
    })
    setShopProduct(filterProduct);
    setCoverHeading(categoryName)
  }

  const handleInput = (e) => {

    const filterProduct = Products.filter((item) => {
      return item.category.match(e.target.value) || item.productName.toLowerCase().match(e.target.value.toLowerCase());
    })
    if (e.target.value !== "") {
      setShopProduct(filterProduct);
    } else {
      setShopProduct([]);
    }

  }


  return (
    <section className='shop_section'>
      <div className='banner'>
        <img src={bannerImg} alt='banner_image' />
        <h4>{coverHeading}</h4>
      </div>
      <div className='container'>

        {/* Filter By Category and Search Item */}
        <div className='filter_section mt-4 mb-4'>
          <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter by Category
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={() => filterByCategory('sofa')}>Sofa</li>
              <li className="dropdown-item" onClick={() => filterByCategory('chair')}>Chair</li>
              <li className="dropdown-item" onClick={() => filterByCategory('watch')}>Watch</li>
              <li className="dropdown-item" onClick={() => filterByCategory('mobile')}>Mobile</li>
              <li className="dropdown-item" onClick={() => filterByCategory('wireless')}>Wireless</li>
            </ul>
          </div>
          <div className='search_item border'>
            <input type='text' placeholder='Search...' onChange={handleInput} />
            <button><i className="bi bi-search"></i></button>
          </div>
        </div>

        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <div className='row  g-2 d-flex justify-content-center'>
              {
                shopProduct.length ? (
                  <>
                    {
                      shopProduct.map((item) => (
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
                                <button onClick={() => { dispatch(addToCart(item)), toastMessage() }}>+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </>
                ) : (
                  <>
                    <div className='col-sm-6 col-lg-4 col-lg-3 mt-4' >
                      <h3>Product Not Found !!</h3>
                    </div>
                  </>
                )
              }
            </div>
          </div>
          <div className='col-1'></div>

        </div>
      </div>

    </section>
  )
}

export default Shop
