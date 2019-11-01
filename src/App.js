import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const User = lazy(() => import('./components/User'))

function App () {
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <Router>
          <div className='nav'>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/user'>User</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user' component={User} />
        </Router>
      </Suspense>
    </Provider>
  )
}

export default App
