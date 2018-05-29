import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import YourCartContainer from './app/containers/YourCartContainer'

const App = StackNavigator(
  { 
    YourCartContainer: { screen: YourCartContainer },
    ProfileContainer: { screen: ProfileContainer },
    HomeContainer: { screen: HomeContainer },
    
  },{
    headerMode:'none'
  })

AppRegistry.registerComponent('lunadorii', () => App);
