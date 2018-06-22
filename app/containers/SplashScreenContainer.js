import React, { Component } from 'react'
import SplashScreen from '../components/SplashScreen'

export default class SplashScreenContainer extends Component {

  navigateToHome(){
    setTimeout(() => {
      this.props.navigation.navigate("HomeContainer")
    }, 1000)
  }

  componentDidMount(){
    this.navigateToHome()
  }

  render() {
    return (
      <SplashScreen />
    )
  }
}