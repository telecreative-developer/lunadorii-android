import React, { Component } from 'react'
import LoginTroubleshooting from '../components/LoginTroubleshooting'

export default class LoginTroubleshootingContainer extends Component{
  render(){
    return(
      <LoginTroubleshooting
        navigateToLogin={() => this.props.navigation.navigate('LoginContainer')}/>
    )
  }
}