import React, { Component } from 'react'
import FooterApp from './FooterApp'
import WrapperUsersList from '../containers/WrapperUsersList'

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">React redux starter kit!</h3>
        <WrapperUsersList/>
        <FooterApp/>
      </div>
    )
  }
}

export default App
