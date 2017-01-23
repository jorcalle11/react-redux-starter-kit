import React from 'react'
import { beforeEach,describe,it } from 'mocha'
import { expect } from 'chai'
import { mount } from 'enzyme'
import UserItem from '../../src/components/UserItem'

describe('UserItem component', () => {
  let user
  beforeEach(() => {
    user = {id: 1,name: 'Jorge',website:'sadsad@al.com'}
  })

  it('should to have user prop', () => {
    const wrapper = mount(<UserItem user={user}/>)
    expect(wrapper.props().user).to.equal(user)
  })

  it('should to have one children', () => {
    const wrapper = mount(<UserItem user={user}/>)
    expect(wrapper.children.length).to.equal(1)
  })

  it('should to render website property in span tag with class ".label-info"', () => {
    const wrapper = mount(<UserItem user={user}/>)
    expect(wrapper.find('.label-info').text()).to.equal(user.website)
  })
})
