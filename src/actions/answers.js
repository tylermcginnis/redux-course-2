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

export function handleAddAnswer (answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    savePollAnswer(answerData)
      .then(() => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()))
  }
}