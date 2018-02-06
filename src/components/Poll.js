import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/answers'
import { getPercentage, getTextKeys, getVoteKeys } from '../utils/helpers'

class Poll extends Component {
  handleAnswer = (answer) => {
    const { poll, authedUser } = this.props

    this.answered = true

    this.props.dispatch(handleAddAnswer({
      authedUser,
      answer,
      id: poll.id,
    }))
  }
  render() {
    if (this.props.poll === null) {
      return <p>This poll doesn't exist</p>
    }

    const { poll, vote, authorAvatar } = this.props

    const totalVotes = getVoteKeys()
      .reduce((total, key) => total + poll[key].length, 0)

    return (
      <div className='poll-container'>
        <h1 className='question'>
          {poll.question}
        </h1>
        <div className='poll-author'>
          By <img src={authorAvatar} alt="Author's avatar" />
        </div>
        <ul>
          {getTextKeys().map((key) => {
            const count = poll[key[0] + 'Votes'].length

            return (
              <li
                onClick={() => {
                  if (vote === null && !this.answered) {
                    this.handleAnswer(key[0])
                  }
                }}
                className={`option ${vote === key[0] ? 'chosen' : ''}`}
                key={key}>
                  {vote === null
                    ? poll[key]
                    : <div className='result'>
                        <span>{poll[key]}</span>
                        <span>{getPercentage(count ,totalVotes)}% ({count})</span>
                      </div>}
                </li>
              )
          })}
        </ul>
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

  const vote = getVoteKeys().reduce((vote, key) => {
    if (poll[key].includes(authedUser)) {
      return key
    }

    return vote === null ? null : vote[0]
  }, null)

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL,
  }
}

export default connect(mapStateToProps)(Poll)