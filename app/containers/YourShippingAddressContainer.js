import React, { Component } from 'react'
import YourShippingAddress from '../components/YourShippingAddress'

export default class YourShippingAddressContainer extends Component{

  render(){
    return(
      <YourShippingAddress
        goback={() => this.props.navigation.goBack()}/>
    )
  }

}