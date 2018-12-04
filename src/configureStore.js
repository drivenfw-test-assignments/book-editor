import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducer from 'reducers'


const configureStore = preloadedState => {
  const middleware = [thunkMiddleware]

  if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger()

    middleware.push(loggerMiddleware)
  }

  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    ) 
  ) 
}

export default configureStore

