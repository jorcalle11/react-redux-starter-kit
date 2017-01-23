import React, { Component,PropTypes } from 'react'
import { ListGroup,ListGroupItem,Grid,Label } from 'react-bootstrap'

class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser() {
    const { users } = this.props
    return users.map(user => {
      return (
        <ListGroupItem key={user.id}>
          <div className="pull-right"><Label bsStyle="info">{user.website}</Label></div>
          {user.name}
        </ListGroupItem>
      )
    })
  }
  
  render() {
    return (
      <Grid>
        <ListGroup>
          {this.renderUser()}
        </ListGroup>
      </Grid>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

export default UsersList
