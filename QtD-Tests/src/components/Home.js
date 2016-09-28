import React, { Component } from 'react'
import '../styles/screen.sass'
import Answer from './Answer'

class Home extends Component {

  static propTypes = {
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitAnswer(this.refs.answer.value)
  }

  get answers () {
    let question = this.props.todaysQuestion;
    let answers = this.props.answersFromFriendsForQuestion(question)

    return answers.reverse().map((answer) => <Answer answer={answer} />)
  }

  render () {
    return <div className='home-screen'>
      <header>
        <img src={require('../../images/qtdfullwlogo.png')} alt='QuestionOftheDay' />
        <div className='options'>
          <div className='menu'>
            <nav className='nav-desktop'>
              <a href='#'>Home</a>
              <a href='#'>My Profile</a>
              <a href='#'>About Us</a>
            </nav>
            <nav className='nav-mobile'>
              <button id='nav-toggle'>Toggle</button>
              <div className='nav-menu nav-hidden'>
                <a href='#'>Home</a>
                <a href='#'>My Profile</a>
                <a href='#'>About Us</a>
              </div>
            </nav>
          </div>
          <div className='search-container'>
            <div className='search-icon-btn'>
              <i className='fa fa-search' />
            </div>
            <div className='search-input'>
              <input type='search' className='search-bar' placeholder='Search Users...' />
            </div>
          </div>
        </div>
      </header>
      <div className='todaysQuestion'>
        <img src={require('../../images/todaysQuestion.png')} alt='todaysQuestion' />
        <h1>{this.props.todaysQuestion.text}</h1>
      </div>
      <div className='myResponse'>
        <div className='myResponse-avatar'>
          <img src={require('../../images/avatarFour.jpg')} alt='myAvatar' />
        </div>
        <div className='answer-container'>
          <div className='answer-comment-box'>
            <div className='answer-comment-form'>
              <form>
                <div>
                  <textarea id='comment' placeholder='Type your Response Here...' ref='answer' />
                </div>
                <nav className='nav-answer'>
                  <button type='submit' onClick={this.handleSubmit}>RESPOND</button>
                </nav>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='user-responses'>
        <div className='user-responses-header'>
          <img src={require('../../images/todaysAnswers.png')} />
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation' className='active'><a href='#friends' aria-controls='home' role='tab' data-toggle='tab'>My Friends</a></li>
            <li role='presentation'><a href='#stars' aria-controls='profile' role='tab' data-toggle='tab'>Most Stars</a></li>
            <li role='presentation'><a href='#staffpicks' aria-controls='messages' role='tab' data-toggle='tab'>Staff Picks</a></li>
          </ul>
        </div>
        {this.answers}
        <footer>
          <div className='copyright-footer'>
            <p>Copyright &copy; 2016</p>
          </div>
          <div className='designed-by-footer'>
            <p>Designed by Matt Schwartz</p>
          </div>
          <div className='TIY-footer'>
            <img src={require('../../images/tiyLogo.png')} alt='TIY Logo' />
          </div>
        </footer>
      </div>
    </div>
  }
}
export default Home
