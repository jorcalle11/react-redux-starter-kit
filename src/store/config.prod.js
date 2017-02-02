
import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const configProd = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default configProd
