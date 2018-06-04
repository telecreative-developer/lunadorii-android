import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import PaymentsContainer from './app/containers/PaymentsContainer'
import EditAddressContainer from './app/containers/EditAddressContainer'
import NotificationsContainer from './app/containers/NotificationsContainer'
import PurchaseHistoryContainer from './app/containers/PurchaseHistoryContainer'
import WishlistContainer from './app/containers/WishlistContainer'
import ReviewsContainer from './app/containers/ReviewsContainer'
import ReportsContainer from './app/containers/ReportsContainer'
import SettingsContainer from './app/containers/SettingsContainer'
import YourCartContainer from './app/containers/YourCartContainer'

const App = StackNavigator(
  { 
    ProfileContainer: { screen: ProfileContainer },
    YourCartContainer: { screen: YourCartContainer },
    PurchaseHistoryContainer: { screen: PurchaseHistoryContainer },
    SettingsContainer: { screen: SettingsContainer },
    NotificationsContainer: { screen: NotificationsContainer },

    HomeContainer: { screen: HomeContainer },
    WishlistContainer: { screen: WishlistContainer },
    ReportsContainer: { screen: ReportsContainer },
    ReviewsContainer: { screen: ReviewsContainer },
    EditAddressContainer: { screen: EditAddressContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    
  },{
    headerMode:'none'
  }
)

AppRegistry.registerComponent('lunadorii', () => App);
