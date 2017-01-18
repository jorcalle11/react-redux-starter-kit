import axios from 'axios'
export const FETCH_USERS = 'FETCH_USERS'

const API_URL = 'http://jsonplaceholder.typicode.com'

const requestUsers = data => {
  return {
    type: FETCH_USERS,
    payload: data
  }
}

export const fetchUsers = () => {
  const request = axios.get(`${API_URL}/users`)

  return dispath => {
    request.then(({ data }) => dispath(requestUsers(data)))
  }
}