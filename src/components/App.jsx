import React, { Component } from 'react'
import UsersList from '../containers/UsersList'
import FooterApp from './FooterApp'

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">React redux starter kit!</h3>
        <UsersList/>
        <FooterApp/>
      </div>
    )
  }
}

export default App
