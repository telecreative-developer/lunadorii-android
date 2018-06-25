import React, { Component } from 'react'
import Payments from '../components/Payments'
import RegisterIdentify from '../components/RegisterIdentify'

export default class RegisterIdentifyContainer extends Component{

  async componentDidMount(){
    data = this.props.navigation.state.params.email
    await this.setState({ email: data })
    await alert(this.state.email)
  }
  
  state={
    email: ''
  }

  render(){
    return(
      <RegisterIdentify />
    )
  }
}