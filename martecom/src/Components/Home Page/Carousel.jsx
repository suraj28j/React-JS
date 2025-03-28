import React from 'react'
import { SliderData } from '../../Assets/Products'

const Carousel = () => {
    return (
        <section className='carousel_section'>
            <div className='container'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <div className='row '>
                                <div className='col-md-7 d-flex align-items-center'>
                                    <div>
                                        <h2>{SliderData[0].title}</h2>
                                        <p>{SliderData[0].desc}</p>
                                        <button className='btn btn-light'>Visit Collection</button>
                                    </div>
                                </div>
                                <div className='col-md-5 d-flex justify-content-center align-items-center'>
                                    <img src={SliderData[0].cover} className="img-fluid" alt="sofa" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item " data-bs-interval="2000">
                            <div className='row'>
                                <div className='col-md-7 d-flex align-items-center'>
                                    <div>
                                        <h2>{SliderData[1].title}</h2>
                                        <p>{SliderData[1].desc}</p>
                                        <button className='btn btn-light'>Visit Collection</button>
                                    </div>
                                </div>
                                <div className='col-md-5 d-flex justify-content-center align-items-center'>
                                    <img src={SliderData[1].cover} className="img-fluid " alt="mobile" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item " data-bs-interval="2000">
                            <div className='row'>
                                <div className='col-md-7 d-flex align-items-center'>
                                    <div>
                                        <h2>{SliderData[2].title}</h2>
                                        <p>{SliderData[2].desc}</p>
                                        <button className='btn btn-light'>Visit Collection</button>
                                    </div>

                                </div>
                                <div className='col-md-5 d-flex justify-content-center align-items-center'>
                                    <img src={SliderData[2].cover} className="img-fluid " alt="headphone" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item " data-bs-interval="2000">
                            <div className='row'>
                                <div className='col-md-7 d-flex align-items-center'>
                                    <div>
                                        <h2>{SliderData[3].title}</h2>
                                        <p>{SliderData[3].desc}</p>
                                        <button className='btn btn-light'>Visit Collection</button>
                                    </div>
                                </div>
                                <div className='col-md-5 d-flex justify-content-center align-items-center'>
                                    <img src={SliderData[3].cover} className="h-75 " alt="watch" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel
