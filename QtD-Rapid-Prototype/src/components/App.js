import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  render () {
    return <div className='App'>
      <header>
        <img src='images/qtdlogo.svg' />
      </header>
      <main>
        <ul>
          <li><button>Home</button></li>
          <li><button>About</button></li>
          <li><button>My Profile</button></li>
          <li><input placeholder='Search Users'></input></li>
        </ul>
        <img src='images/todaysQuestion.svg' />
        <p>What was the last thing that made you laugh so much your stomach hurt?</p>
        <form method='post'>
          Your Answer:<br />
          <textarea name='comment' id='comment'></textarea><br />
          <input type='hidden' name='articleid' id='articleid' value='<? echo $_GET["id"]; ?>' />
          <input type='submit' value='Submit' />
        </form>
        <div className='answers'>
          <img src='images/answers.svg' />
        </div>
        <div className='filters'>
          <p>Sort By:</p>
          <ul>
            <li><button>My Friends</button></li>
            <li><button>Most Liked</button></li>
            <li><button>Staff picks</button></li>
          </ul>
        </div>
        <div className='followerOne'>
          <ul>
            <li><img src='images/avatarOne.png' /></li>
            <p>Matt Schwartz</p>
            <li><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div></li>
          </ul>
        </div>
        <div className='followerTwo'>
          <ul>
            <li><img src='images/avatarTwo.png' /></li>
            <p>Lady Gaga___</p>
            <li><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div></li>
          </ul>
        </div>
        <div className='followerThree'>
          <ul>
            <li><img src='images/avatarThree.png' /></li>
            <p>Sara Sonsalla</p>
            <li><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></li>
          </ul>
        </div>
        <footer>
          <ul>
            <li>Copyright &copy; 2016 Question the Day/Matt Schwartz</li>
            <li><img src='images/logorough.svg' /></li>
          </ul>
        </footer>
      </main>
    </div>
  }
}

export default App
