import axios from 'axios'
import {
  API_URL,
  ADD_USER,
  FETCH_USERS
} from '../constants'

const requestUsers = data => {
  return {
    type: FETCH_USERS,
    payload: data
  }
}

export const addUser = newUser => {
  return {
    type: ADD_USER,
    payload: newUser
  }
}

export const fetchUsers = () => {
  const request = axios.get(`${API_URL}/users`)

  return dispath => {
    request.then(({ data }) => dispath(requestUsers(data)))
  }
}
