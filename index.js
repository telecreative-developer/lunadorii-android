import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import PaymentsContainer from './app/containers/PaymentsContainer'

const App = StackNavigator(
  { 
    HomeContainer: { screen: HomeContainer },
    ProfileContainer: { screen: ProfileContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    
    
  },{
    headerMode:'none'
  }
)

AppRegistry.registerComponent('lunadorii', () => App);
