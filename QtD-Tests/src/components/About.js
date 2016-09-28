import React, { Component } from 'react'

class About extends Component {

  render () {
    return <div className='about-screen'>
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
    </div>
  }
}
export default About
