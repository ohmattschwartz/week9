import React, { Component } from 'react'

class Login extends Component {

  render () {
    return <div className='login-screen'>
      <header>
        <img src={require('../../images/qtdfullwlogo.png')} alt='Question the Day' />
      </header>
      <div className='login'>
        <ul>
          <li><img src='images/loginfacebook.svg' alt='Facebook' /></li>
          <li><img src='images/logintwitter.svg' alt='Twitter' /></li>
        </ul>
      </div>
      <div className='appLogo'>
        <img src='images/applogo.svg' alt='applogo' />
      </div>
      <div className='about'>
        <p>Using the power of the written word to connect everyday people.</p>
        <p>Every day.</p>
      </div>
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
      <video className='background' playsinline autoPlay muted loop>
        <source src={require('../../images/brettwriting.mp4')} type='video/mp4' />
      </video>
    </div>
  }
}

export default Login
