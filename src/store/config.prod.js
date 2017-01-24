
import { createStore } from 'redux'
import reducer from '../reducers'
import initialState from '../reducers/initialState'

const configProd = createStore(
  reducer,
  initialState
)

export default configProd
