import { combineReducers } from 'redux'
import userReducer from '../user/userReducers'

const rootReducer = combineReducers({
  users: userReducer
})

export default rootReducer
