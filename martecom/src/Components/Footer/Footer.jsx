import React, { useEffect, useState } from 'react'
import "./Footer.css"

const Footer = () => {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false)
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const listenToScroll = () => {
    let hightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > hightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  })

  return (
    <>
      <footer>
        <div className='container pt-4'>
          <div className='row'>

            <div className='col-md-3'>
              <h4><i className="bi bi-bag-fill"></i> Mart</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae eligendi maiores ratione corporis assumenda, consequuntur dolor voluptas vero numquam quos laborum deserunt? Ducimus, similique.</p>
            </div>

            <div className='col-md-3'>
              <h5 className='ms-md-4'>About Us</h5>
              <ul className='ms-md-4'>
                <li>Carrers</li>
                <li>Our Store</li>
                <li>Our Cares</li>
                <li>Term and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h5>Coutomer Care</h5>
              <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Return & Refunds</li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h5>Contact US</h5>
              <ul>
                <li>Venkateshwara PG, Brookflied, Bangalore, Karnataka</li>
                <li>Email : suraj28j@gmail.com</li>
                <li>Phone : +91 8115188825</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {
        isVisible && (<div className='scroll_top' onClick={scrollTop}>
          <i className="bi bi-caret-up-square-fill"></i>
        </div>)
      }

    </>
  )
}

export default Footer

// isVisible scrollTop listenToScroll windowScroll hightToHidden
// className="bi bi-caret-up-square-fill"