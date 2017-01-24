import { describe,it } from 'mocha'
import { expect } from 'chai'
import { addUser } from './users'
import { ADD_USER } from '../constants'

describe('Users actions creators', () => {
  it('should create a "ADD_USER" action', () => {
    const user = { id:45 ,name:'patricio', website: 'js@algo.co'}
    const expectedAction = {
      type: ADD_USER,
      payload: user
    }

    const action = addUser(user)
    expect(action).to.eql(expectedAction)
  })
})
