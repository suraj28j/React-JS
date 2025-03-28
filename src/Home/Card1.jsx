import React from 'react'
import { serviceData } from '../Assets/products'

const Card1 = () => {
    return (
        <section className='service_section'>
            <div className='container mt-4 mb-4'>
                <div className='row'>
                    {
                        serviceData.map((item) => (
                            <div className='col-sm-6 col-lg-4 col-xl-3 text-center' key={item.title}>
                                <div className="card" style={{ background: `${item.bg}` }}>
                                    <div className="card-body">
                                        <i className={`mt-3 ${item.icon}`}></i>
                                        <h5 className="card-title mt-4">{item.title}</h5>
                                        <p className="card-text mt-4 mb-4">{item.subtitle}</p>
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

export default Card1
