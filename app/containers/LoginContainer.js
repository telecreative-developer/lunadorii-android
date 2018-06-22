import React, { Component } from 'react'
import Login from '../components/Login'

export default class LoginContainer extends Component {

  state={
    passwordFieldVisibility: true,
  }

  togglePasswordFieldVisibility(){
    this.setState({passwordFieldVisibility: !this.state.passwordFieldVisibility})
  }

  render() {
    return (
      <Login
        passwordFieldVisibility={this.state.passwordFieldVisibility}
        togglePasswordFieldVisibility={() => this.togglePasswordFieldVisibility()}
        navigateToRegister={() => this.props.navigation.navigate("RegisterContainer")}/>
    )
  }
}