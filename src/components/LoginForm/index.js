import {Component} from 'react'
import './index.css'

// let errorMessage = null

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    if (username === 'rahul' && password === 'rahul@2021') {
      history.replace('/')
    } else if (username === '' && password === '') {
      this.setState({errorMessage: "*Username and Password didn't match"})
    } else if (username === 'rahul' && password === '') {
      this.setState({errorMessage: "*Username and Password didn't match"})
    } else if (username === '' && password === 'rahul@2021') {
      this.setState({errorMessage: "*Username and Password didn't match"})
    } else {
      this.setState({errorMessage: "*Username and Password didn't match"})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-form-container">
        <div className="login-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="login-form" onSubmit={this.onSubmit}>
          <div className="login-form-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-form-image"
            />
          </div>
          <label className="label-input" htmlFor="username">
            USERNAME
          </label>
          <input
            id="username"
            className="input"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            placeholder="Username"
          />
          <label className="label-input" htmlFor="password">
            PASSWORD
          </label>
          <input
            id="password"
            className="input"
            type="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
