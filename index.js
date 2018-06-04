import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import PaymentsContainer from './app/containers/PaymentsContainer'
import ChangePasswordContainer from './app/containers/ChangePasswordContainer'
import EditAddressContainer from './app/containers/EditAddressContainer'
import NotificationsContainer from './app/containers/NotificationsContainer'
import PurchaseHistoryContainer from './app/containers/PurchaseHistoryContainer'
import WishlistContainer from './app/containers/WishlistContainer'
import ReviewsContainer from './app/containers/ReviewsContainer'

const App = StackNavigator(
  { 
    ReviewsContainer: { screen: ReviewsContainer },
    WishlistContainer: { screen: WishlistContainer },
    HomeContainer: { screen: HomeContainer },
    ProfileContainer: { screen: ProfileContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    EditAddressContainer: { screen: EditAddressContainer },
    NotificationsContainer: { screen: NotificationsContainer },
    ChangePasswordContainer: { screen: ChangePasswordContainer },
    PurchaseHistoryContainer: { screen: PurchaseHistoryContainer },
  },{
    headerMode:'none'
  }
)

AppRegistry.registerComponent('lunadorii', () => App);
