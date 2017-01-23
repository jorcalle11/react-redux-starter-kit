import React from 'react'
import sinon from 'sinon'
import { beforeEach,describe,it } from 'mocha'
import { mount } from 'enzyme'
import { expect } from 'chai'
import UsersList from '../../src/components/UsersList'

describe('Userslist component', () => {

  let users = []
  beforeEach(() => {
    users = [
      {id: 1, name: 'Jorge Calle', website: 'sadasd'},
      {id: 2, name: 'Maria Benitez', website: 'sadassdd'},
      {id: 3, name: 'Jamito Sierra', website: 'sadasdrt'},
      {id: 4, name: 'Juaquin Hernandez', website: 'sadasddfdf'},     
    ]
  })
  
  it('should to render four UserItem', () => {
    const wrapper = mount(<UsersList users={users} fetchUsers={() => {}} />)
    expect(wrapper.find('UserItem').length).to.equal(users.length)
  })

  it('should call fetchUsers function in method cwm', () => {
    const fetchUsersSpy = sinon.spy()
    const wrapper = mount(<UsersList users={users} fetchUsers={fetchUsersSpy} />)
    expect(fetchUsersSpy.callCount).to.equal(1)
  })
})
