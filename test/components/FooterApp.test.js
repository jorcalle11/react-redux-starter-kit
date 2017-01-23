import React from 'react'
import { describe,it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import FooterApp from '../../src/components/FooterApp'

describe('FooterApp component', () => {
  it('should to have css class named "credits"', () => {
    const wrapper = shallow(<FooterApp/>)
    expect(wrapper.find('.credits'))
  })

  it('should to have one code tag with text "Jorge Calle"', () => {
    const wrapper = shallow(<FooterApp/>)
    expect(wrapper.find('code').text()).to.equal('Jorge Calle')
  })
})
