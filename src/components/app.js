import React, { Component } from 'react'
import FooterApp from './footer/footer'
import UserList from '../user/userList/userList'

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">React redux starter kit!</h3>
        <UserList/>
        <FooterApp/>
      </div>
    )
  }
}

export default App
