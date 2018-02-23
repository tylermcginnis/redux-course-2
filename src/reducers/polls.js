import { RECEIVE_POLLS } from '../actions/polls'

export default function polls (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls,
      }
    default :
      return state
  }
}