import React, { Component } from 'react'
import Payment from '../components/Payment'

export default class PaymentContainer extends Component{
  render(){
    return(
      <Payment
        goback={() => this.props.navigation.goBack()}
        navigateToDebitPayment={() => this.props.navigation.navigate("LocalBankContainer")}
        navigateToCreditCard={() => this.props.navigation.navigate("CreditCardContainer")}
      />
    )
  }
}