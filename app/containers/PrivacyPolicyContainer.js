import React, { Component } from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'

export default class PrivacyPolicyContainer extends Component{
  render(){
    return(
      <PrivacyPolicy
        goback={() => this.props.navigation.goBack()}/>
    )
  }
}