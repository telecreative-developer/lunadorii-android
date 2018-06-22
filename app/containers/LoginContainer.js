import React, { Component } from 'react'
import Login from '../components/Login'

export default class LoginContainer extends Component {
  render() {
    return (
      <Login 
        navigateToRegister={() => this.props.navigation.navigate("RegisterContainer")}/>
    )
  }
}