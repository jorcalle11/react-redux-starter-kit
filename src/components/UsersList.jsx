import React, { Component,PropTypes } from 'react'
import { ListGroup,Grid } from 'react-bootstrap'
import UserItem from './UserItem'

class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }
  
  render() {
    const { users } = this.props
    return (
      <div>
        <Grid>
          <ListGroup>
            {users.map(user => <UserItem key={user.id} user={user}/>)}
          </ListGroup>
        </Grid>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

export default UsersList
