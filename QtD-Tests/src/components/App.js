import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return this.props.children
  }
}

export default App
