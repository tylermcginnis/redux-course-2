import { savePollAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_ANSWER = 'ADD_ANSWER'

export function addAnswer ({ authedUser, id, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer,
  }
}

export function handleAddAnswer ({ authedUser, id, answer }) {
  return (dispatch) => {
    dispatch(showLoading())
    savePollAnswer(id, answer)
      .then(() => dispatch(addAnswer({
        authedUser,
        id,
        answer,
      })))
      .then(() => dispatch(hideLoading()))
  }
}