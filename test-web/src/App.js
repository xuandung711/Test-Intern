import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import Logout from './components/Logout'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={Login}/>
          <Route path = "/home" component={Home}/>
          <Route path = "/logout" component={Logout}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


