import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Router, Route, browserHistory } from 'react-router'
import requireAuth from './components/RequireAuthentication'
import App from './components/App'
import Resources from './components/Resources'
import './styles/screen.scss'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route exact path='/' component={App}>
        <Route path='/resources' component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
