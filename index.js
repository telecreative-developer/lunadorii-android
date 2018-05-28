import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'

const App = StackNavigator(
  { 
    HomeContainer: { screen: HomeContainer },
  },{
    headerMode:'none'
  })

AppRegistry.registerComponent('lunadorii', () => App);
