import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import PrivacyPolicy from '../components/PrivacyPolicy'

export default class PrivacyPolicyContainer extends Component{
  
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack() // works best when the goBack is async
    return true;
  }

  render(){
    return(
      <PrivacyPolicy
        goback={() => this.props.navigation.goBack()}/>
    )
  }
}