import React, { Component } from 'react'
import ScreenTest from '../components/ScreenTest'

export default class ScreenTestContainer extends Component{
  render(){
    return(
      <ScreenTest
        goback={() => alert("Hello World")}
        buttonAction={() => alert("Connection reloaded")}
      />
    )
  }
}