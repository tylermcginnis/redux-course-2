import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/answers'
import { getPercentage } from '../utils/helpers'
import Checked from 'react-icons/lib/io/ios-checkmark-outline'

class Poll extends Component {
  render() {
    return (
      <div className='question-container'>
        POLLLLL
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, polls, users }, { match }) {
  const { id } = match.params
  const poll = polls[id]

  if (!poll) {
    return {
      poll: null
    }
  }

  const voteKeys = ['aVotes', 'bVotes', 'cVotes', 'dVotes']

  const vote = voteKeys.reduce((vote, key) => {
    if (poll[key].includes(authedUser)) {
      return key
    }

    return vote
  }, null)

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL,
  }
}

export default connect(mapStateToProps)(Poll)