import { getInitialData } from '../utils/api'
import { receieveUsers } from '../actions/users'
import { receievePolls } from '../actions/polls'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(receieveUsers(users))
        dispatch(receievePolls(polls))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}