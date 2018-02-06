import { RECEIVE_USERS } from '../actions/users'
import { ADD_ANSWER } from '../actions/answers'
import { ADD_POLL } from '../actions/polls'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case ADD_ANSWER :
      const user = state[action.authedUser]

      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answers: user.answers.concat([action.id])
        }
      }
    case ADD_POLL :
      const poll = action.poll
      const { author, id } = poll

      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      }
    default :
      return state
  }
}