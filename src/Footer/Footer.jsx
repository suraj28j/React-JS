import React, { useEffect, useState } from 'react'
import "./footer.css";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const listnerToScroll = () => {
        const windoScroll = document.body.scrollTop || document.documentElement.scrollTop;
        windoScroll > 250 ? setIsVisible(true) : setIsVisible(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', listnerToScroll)
    })

    return (
        <>
            <footer>
                <div className='container pt-2'>
                    <div className='row m-4'>

                        <div className='col-md-3'>
                            <h4><i class="bi bi-bag-fill"></i> Mart</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae eligendi maiores ratione corporis assumenda, consequuntur dolor voluptas vero numquam quos laborum deserunt? Ducimus, similique.</p>
                        </div>

                        <div className='col-md-3'>
                            <h5 className='ms-md-4'>About Us</h5>
                            <ul className='ms-md-4' style={{ listStyle: 'none', padding: '0px' }}>
                                <li style={{ padding: '2px 0px' }}>Carrers</li>
                                <li style={{ padding: '2px 0px' }}>Our Store</li>
                                <li style={{ padding: '2px 0px' }}>Our Cares</li>
                                <li style={{ padding: '2px 0px' }}>Term and Conditions</li>
                                <li style={{ padding: '2px 0px' }}>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className='col-md-3'>
                            <h5>Coutomer Care</h5>
                            <ul style={{ listStyle: 'none', padding: '0px' }}>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Help Center</li>
                                <li style={{ padding: '2px 0px 2px 0px' }}>How to Buy</li>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Track Your Order</li>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Corporate & Bulk Purchasing</li>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Return & Refunds</li>
                            </ul>
                        </div>

                        <div className='col-md-3'>
                            <h5>Contact US</h5>
                            <ul style={{ listStyle: 'none', padding: '0px' }}>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Venkateshwara PG, Brookflied, Bangalore, Karnataka</li>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Email : suraj28j@gmail.com</li>
                                <li style={{ padding: '2px 0px 2px 0px' }}>Phone : +91 8115188825</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
            {
                isVisible && (<div id='arrow_up' onClick={scrollToTop}>
                    <i class="bi bi-caret-up-square-fill"></i>
                </div>)
            }
        </>
    )
}

export default Footer
