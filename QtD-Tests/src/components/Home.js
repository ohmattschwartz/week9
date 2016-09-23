import React, { Component } from 'react'
import '../styles/screen.sass'

class Home extends Component {

  static propTypes = {
  }

  render () {
    return <div className='home-screen'>
      <header>
        <img src={require('../../images/qtdlogo.svg')} alt='QuestionOftheDay' />
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
    </div>
  }
}

export default Home
