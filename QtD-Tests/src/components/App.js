import React, { Component } from 'react'
import '../styles/screen.sass'
import Api from './Api'

class App extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  constructor () {
    super()

    this.state = {
      questions: [],
      answers: []
    }
  }

  reloadQuestions () {
    window.fetch(`${Api.url}/questions`, {
      headers: { 'Authorization': Api.bearer_token, 'Content-Type': 'application/json' }})
      .then((response) => response.json())
      .then((data) => {
        this.setState({questions: data})
      })
  }

  reloadAnswers () {
    window.fetch(`${Api.url}/answers`, {
      headers: { 'Authorization': Api.bearer_token, 'Content-Type': 'application/json' }})
      .then((response) => response.json())
      .then((data) => {
        this.setState({answers: data})
      })
  }

  componentWillMount () {
    this.reloadQuestions()
    this.reloadAnswers()
  }

  answersFromFriendsForQuestion = (question) => {
    return this.state.answers.filter((answer) => {
      // also will compare to friends
      return answer.question_id === question.id
    })
  }

  get todaysQuestion () {
    let question = this.state.questions.find((question) => question.day_posted === '2016-09-27')

    if (question) {
      return question
    } else {
      // Return something meaningful here
      return { text: 'Oooops', day_posted: 'Never' }
    }
  }

  submitAnswer = (text) => {
    let question = this.todaysQuestion

    window.fetch(`${Api.url}/answers`, {
      method: 'POST',
      headers: { 'Authorization': Api.bearer_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text,
        question_id: question.id,
        user_id: 42,
        staff_pick: false,
        star_count: 0
      })
    }).then(() => this.reloadAnswers())
  }

  render () {
    return React.cloneElement(this.props.children,
      {
        todaysQuestion: this.todaysQuestion,
        submitAnswer: this.submitAnswer,
        answersFromFriendsForQuestion: this.answersFromFriendsForQuestion
      })
  }
}

export default App
