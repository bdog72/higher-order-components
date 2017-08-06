import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import App from './components/App'

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
    <App />
  </Provider>
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
