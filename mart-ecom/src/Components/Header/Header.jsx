import React from 'react'
import logo from "../../Assets/Images/logo.png"
import { Link } from 'react-router-dom'
import "./Header.css"
import { useSelector } from 'react-redux'


const Header = ({ isDarkMode, toggleBackgroundColor }) => {
  const modeIcon = isDarkMode ? "bi bi-brightness-high" : "bi bi-moon";
  const navbarClass = isDarkMode ? "navbar-dark bg-dark text-dark" : "bg-body-tertiary"

  const cartData = useSelector((state) => state.productData.cartData);

  return (
    <header className='sticky-top '>
      <nav className={`navbar navbar-expand-lg shadow p-3 rounded ${navbarClass}`}>
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} alt='logo' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link me-4" aria-current="page" to="/">Home</Link>
              <Link className="nav-link me-4" to="/shop">Shop</Link>
              <Link className="nav-link me-4" to="/cart">Cart</Link>
              <Link className="nav-link me-4" ><i className="bi bi-person-fill"></i></Link>
              <Link className="nav-link me-4">
                <p className='cart_logo'><i className="bi bi-cart-fill"></i><span>{cartData.length}</span></p>
              </Link>
              <Link className="nav-link ms-3" onClick={toggleBackgroundColor}><i className={modeIcon}></i></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
