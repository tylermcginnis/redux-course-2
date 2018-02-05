import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_POLL = 'ADD_POLL'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function handeAddPoll (poll) {
  return (dispatch) => {
    dispatch(showLoading())
    return savePoll(poll)
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()))
  }
}