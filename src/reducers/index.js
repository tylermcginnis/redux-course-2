import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import polls from './polls'

export default combineReducers({
  authedUser,
  users,
  polls,
})