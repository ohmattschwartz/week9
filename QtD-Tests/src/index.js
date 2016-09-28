import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

const router = <Router history={browserHistory}>
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/about' component={About} />
  </Route>
</Router>

render(router, document.getElementById('root'))

// TODO: Turn this nav into a react component
let toggle = document.getElementById('nav-toggle')

toggle.onclick = (event) => {
  toggle.classList.toggle('expanded')
  let siblings = Array.prototype.filter.call(toggle.parentNode.children, (child) => child !== toggle)
  siblings.forEach((element) => {
    element.classList.toggle('nav-hidden')
  })
}
