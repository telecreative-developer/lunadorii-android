import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import PaymentsContainer from './app/containers/PaymentsContainer'
import YourCartContainer from './app/containers/YourCartContainer';

const App = StackNavigator(
  { 
    YourCartContainer: { screen: YourCartContainer },
    HomeContainer: { screen: HomeContainer },
    ProfileContainer: { screen: ProfileContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    
  },{
    headerMode:'none'
  }
)

console.disableYellowBox = true
AppRegistry.registerComponent("lunadorii", () => App);

