import React, { Component } from 'react'
import Register from '../components/Register'

export default class RegisterContainer extends Component{

  state={
    email: ''
  }

  render(){
    return(
      <Register 
        email={this.state.email}
        onChangeEmail={(email) => this.setState({email})}
        handleNext={() => this.props.navigation.navigate('RegisterIdentifyContainer', { email: this.state.email })}/>
    )
  }
}