import React, { Component } from 'react'

class Login extends Component {

  render () {
    return <div className='login-screen'>
      <header>
        <img src='images/qtdlogo.svg' alt='Question the Day' />
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
        <p>Using the power of the written word to connect everyday people. Every day.</p>
      </div>
      <footer>
        <ul>
          <li>Copyright &copy; 2016</li>
          <li>Designed by Matt Schwartz for </li>
          <li><img src={require('../../images/tiyLogo.png')} alt='tiyLogo' /></li>
        </ul>
      </footer>
      <video className='background' playsinline autoPlay muted loop>
        <source src={require('../../images/brettwriting.mp4')} type='video/mp4' />
      </video>
    </div>
  }
}

export default Login
