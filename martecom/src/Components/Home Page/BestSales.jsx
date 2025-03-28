import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../../Assets/Products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/productAction/ProductAction';
import { toast } from 'react-toastify';


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

const BestSales = () => {
    const dispatch = useDispatch()
     const toastMessage = () => {
            toast.success("Added Successfully");
        }

    const BestSalesProducts = Products.filter((item) => {
        return item.category === "sofa"
    })
    return (
        <section className='bestSales_section'>
            <div className='container'>
                <h2 className='text-center mb-4'>Best Sales</h2>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <div className='row g-2 d-flex justify-content-center'>
                            {
                                BestSalesProducts.map((item) => (
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
                                                    <button onClick={() => { dispatch(addToCart(item)),toastMessage() }}>+</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-1'></div>

                </div>
            </div>
        </section>
    )
}

export default BestSales
