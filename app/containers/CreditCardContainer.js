import React, { Component } from 'react'
import CreditCard from '../components/CreditCard'

export default class CreditCardContainer extends Component{

  render(){
    return(
      <CreditCard
        goback={() => this.props.navigation.goBack()}/>
    )
  }

}