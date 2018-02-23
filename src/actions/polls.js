export const RECEIVE_POLLS = 'RECEIVE_POLLS'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}