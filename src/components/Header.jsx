import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer)
  const cart = useSelector((state) => state.cartReducer)
  return (
    // navbar
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#999", padding: "15px 0 15px 0", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
      <div className="container px-4 px-lg-5">
        {/* <a className="navbar-brand"><i className="fa-solid fa-cart-shopping me-2"></i>E-Kart</a>
        <Link to={'/'} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></Link> */}
        <Link className='fs-3 mt-2 mb-2' to={'/'} style={{ textDecoration: 'none' }}><i className="fa-solid fa-cart-shopping me-2"></i><span className='ms-1 fw-bold' style={{ color: '#fff' }}>E-Cart</span></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex ms-auto">
            <Link to={'/whishlist'} className="btn btn-outline-dark me-3" type="submit">
              <i class="fa-solid fa-heart text-danger me-2"></i>
              Whishlist
              <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist.length}</span>
            </Link>
            <Link to={'/cart'} className="btn btn-outline-dark" type="submit">
              <i className='fa-solid fa-cart-plus me-2'></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header