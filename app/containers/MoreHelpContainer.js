import React, { Component } from 'react'
import MoreHelp from '../components/MoreHelp'

export default class MoreHelpContainer extends Component{
  render(){
    return(
      <MoreHelp
        goback={() => this.props.navigation.goBack()}/>
    )
  }
}