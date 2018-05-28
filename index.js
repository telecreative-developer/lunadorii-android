import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'

const App = StackNavigator(
  { 
    ProfileContainer: { screen: ProfileContainer },
    HomeContainer: { screen: HomeContainer },
    
  },{
    headerMode:'none'
  })

AppRegistry.registerComponent('lunadorii', () => App);
