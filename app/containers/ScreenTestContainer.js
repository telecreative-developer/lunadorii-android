import React, { Component } from 'react'
import ScreenTest from '../components/ScreenTest'

export default class ScreenTestContainer extends Component{

  state={
    loginRequiredModalVisible: false
  }

  toggleVisbleLoginRequiredModal(){
    this.setState({loginRequiredModalVisible: !this.state.loginRequiredModalVisible})
  }

  render(){
    return(
      <ScreenTest
        goback={() => alert("Hello World")}
        buttonAction={() => alert("Connection reloaded")}
        loginRequiredModalVisible={this.state.loginRequiredModalVisible}
        toggleVisbleLoginRequiredModal={() => this.toggleVisbleLoginRequiredModal()}
      />
    )
  }
}