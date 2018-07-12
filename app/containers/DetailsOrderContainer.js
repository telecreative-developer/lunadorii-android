import React, { Component } from 'react'
import DetailsOrder from '../components/DetailsOrder'

export default class DetailsOrderContainer extends Component{
  render(){
    return(
      <DetailsOrder
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}