import { ADD_POLL, RECEIVE_POLLS } from '../actions/polls'
import { ADD_ANSWER } from '../actions/answers'

export default function polls (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL :
      return {
        ...state,
        [action.poll.id]: action.poll,
      }
    case ADD_ANSWER :
      const { answer, id, authedUser } = action
      const poll = state[id]
      const votersKey = answer + 'Voters'
      const countKey = answer + 'Count'

      return {
        ...state,
        [action.id]: {
          ...poll,
          [votersKey]: poll[votersKey].concat([authedUser]),
          [countKey]: poll[countKey] + 1
        }
      }
    default :
      return state
  }
}