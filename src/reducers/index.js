import { combineReducers } from 'redux'
import { FETCH_USERS } from '../actions'
import initialState from './initialState'

const usersReducer = (state = initialState.users, action) => {
  switch(action.type) {
  case FETCH_USERS:
    return [...action.payload ]
  default:
    return state
  }
}

const rootReducer = combineReducers({
  users : usersReducer
})

export default rootReducer