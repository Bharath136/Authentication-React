import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <div className="container">
    <div className="body-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
