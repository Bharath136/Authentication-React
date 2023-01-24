import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const onLogout = props => {
    console.log(props)
  }
  return (
    <div>
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="links-container">
          <Link to="/" className="option-item">
            <li className="link-item">Home</li>
          </Link>
          <Link to="/products" className="option-item">
            <li className="link-item">Products</li>
          </Link>
          <Link to="/cart" className="option-item">
            <li className="link-item">Cart</li>
          </Link>
          <button className="logout-btn" type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
        <button
          type="button"
          className="nav-logout-btn-mobile"
          onClick={onLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
            alt="nav logout"
            className="nav-logout"
          />
        </button>
      </nav>
      <div className="links-container-mobile">
        <Link to="/" className="option-item">
          <li className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="link-icon"
            />
          </li>
        </Link>
        <Link to="/products" className="option-item">
          <li className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="link-icon"
            />
          </li>
        </Link>
        <Link to="/cart" className="option-item">
          <li className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="link-icon"
            />
          </li>
        </Link>
      </div>
    </div>
  )
}

export default Header
