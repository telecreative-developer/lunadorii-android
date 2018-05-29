import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import PaymentsContainer from './app/containers/PaymentsContainer'
import ChangePasswordContainer from './app/containers/ChangePasswordContainer'
import EditAddressContainer from './app/containers/EditAddressContainer'
import NotificationsContainer from './app/containers/NotificationsContainer'

const App = StackNavigator(
  { 
    NotificationsContainer: { screen: NotificationsContainer },
    HomeContainer: { screen: HomeContainer },
    ProfileContainer: { screen: ProfileContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    ChangePasswordContainer: { screen: ChangePasswordContainer },
    EditAddressContainer: { screen: EditAddressContainer }
  },{
    headerMode:'none'
  }
)

AppRegistry.registerComponent('lunadorii', () => App);
