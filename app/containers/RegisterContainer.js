import React, { Component } from 'react'
import Register from '../components/Register'

export default class RegisterContainer extends Component{

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
      <Register
      handleNext={() => this.props.navigation.navigate("RegisterIdentifyContainer", { email : this.state.email })}
      />
    )
  }
}