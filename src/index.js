import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'configureStore'
import { loadData } from 'helpers/localStorage'
import App from 'components/App'
import './styles.css'


const store = configureStore(loadData())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.log('%cBook Editor', 'color:red')

