import React, { Component } from 'react'
import ScreenTest from '../components/ScreenTest'

export default class ScreenTestContainer extends Component{

  state={
    paymentCCModalVisible: false
  }

  toggleVisiblePaymentCCModal(){
    this.setState({paymentCCModalVisible: !this.state.paymentCCModalVisible})
  }

  render(){
    return(
      <ScreenTest
        goback={() => alert("Hello World")}
        paymentCCModalVisible={this.state.paymentCCModalVisible}
        toggleVisiblePaymentCCModal={() => this.toggleVisiblePaymentCCModal()}
      />
    )
  }
}