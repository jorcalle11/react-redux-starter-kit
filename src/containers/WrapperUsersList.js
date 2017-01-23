import { connect } from 'react-redux'
import {fetchUsers} from '../actions/index'
import UsersList from '../components/UsersList'

const mapStateToProps = ({ users }) => {
  return { users }
}

export default connect(mapStateToProps,{ fetchUsers })(UsersList)
