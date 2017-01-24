import initialState from './initialState'
import { ADD_USER,FETCH_USERS_SUCCESS } from '../constants'

const usersReducer = (state = initialState.users, action) => {
  switch(action.type) {
  case FETCH_USERS_SUCCESS:
    return action.payload
  case ADD_USER:
    return [...state,action.payload ]
  default:
    return state
  }
}

export default usersReducer
