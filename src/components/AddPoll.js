import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handeAddPoll } from '../actions/polls'

class AddPoll extends Component {
  state = {
    question: '',
    aText: '',
    bText: '',
    cText: '',
    dText: '',
  }
  handleInputChange = (e) => {
    const { value, name } = e.target

    this.setState(() => ({
      [name]: value
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.dispatch(handeAddPoll(this.state))
  }
  isDisabled = () => {
    const { question, aText, bText, cText, dText }  = this.state
    return question === ''
      || aText === ''
      || bText === ''
      || cText === ''
      || dText === ''
  }
  render() {
    const { question, aText, bText, cText, dText }  = this.state

    return (
      <form className='add-form' onSubmit={this.handleSubmit}>
        <h3 style={{marginBottom: 5}}>What is your question?</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name='question'
          className="input"
          type="text"
        />

        <h3>What are the options?</h3>

        <label className="label" htmlFor="input">A.</label>
        <input
          value={aText}
          onChange={this.handleInputChange}
          name='aText'
          className="input"
          type="text"
        />

        <label className="label" htmlFor="input">B.</label>
        <input
          value={bText}
          onChange={this.handleInputChange}
          name='bText'
          className="input"
          type="text"
        />

        <label className="label" htmlFor="input">C.</label>
        <input
          value={cText}
          onChange={this.handleInputChange}
          name='cText'
          className="input"
          type="text"
        />

        <label className="label" htmlFor="input">D.</label>
        <input
          value={dText}
          onChange={this.handleInputChange}
          name='dText'
          className="input"
          type="text"
        />

        <button className='btn' type='submit' disabled={this.isDisabled()}>
          Submit
        </button>

        <input className="radio" type="radio" name="radio" id="radio" />
        <label className="radio-label" htmlFor="radio">Radio</label>

        <input className="radio" type="radio" name="radio2" id="radio2" />
        <label className="radio-label" htmlFor="radio2">Radio 2</label>
      </form>
    )
  }
}

export default connect()(AddPoll)