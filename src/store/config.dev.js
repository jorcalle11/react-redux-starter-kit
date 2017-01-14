
import { applyMiddleware,createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import reducer from '../reducers'

const logger = new createLogger()

const configDev = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
)

export default configDev