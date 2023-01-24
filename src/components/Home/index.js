import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="shop-details">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="description">
          Fashion is part of the daily air and it does not quit help that it
          changes all the time. Clothes have always been a marker of the era and
          we in a revolution. You fashion makes you been seen and heard that way
          you are. So celebrate the seasons new and exciting fashion in your own
          way.
        </p>
        <div className="shop-details-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-image"
          />
        </div>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <div className="shop-details-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
    </div>
  </>
)

export default Home
