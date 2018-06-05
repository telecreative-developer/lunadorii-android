import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator }  from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import ProfileContainer from './app/containers/ProfileContainer'
import PaymentsContainer from './app/containers/PaymentsContainer'
import PurchaseHistoryContainer from './app/containers/PurchaseHistoryContainer'
import WishlistContainer from './app/containers/WishlistContainer'
import ReviewsContainer from './app/containers/ReviewsContainer'
import ReportsContainer from './app/containers/ReportsContainer'
import SettingsContainer from './app/containers/SettingsContainer'
import YourCartContainer from './app/containers/YourCartContainer'
import YourShippingAddressContainer from './app/containers/YourShippingAddressContainer'
import CreditCardContainer from './app/containers/CreditCardContainer'

const App = StackNavigator(
  { 
    ProfileContainer: { screen: ProfileContainer },
    SettingsContainer: { screen: SettingsContainer },
    YourShippingAddressContainer: { screen: YourShippingAddressContainer },
    YourCartContainer: { screen: YourCartContainer },
    PurchaseHistoryContainer: { screen: PurchaseHistoryContainer },

    HomeContainer: { screen: HomeContainer },
    WishlistContainer: { screen: WishlistContainer },
    ReportsContainer: { screen: ReportsContainer },
    ReviewsContainer: { screen: ReviewsContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    CreditCardContainer: { screen: CreditCardContainer }
  },{
    headerMode:'none'
  }
)

console.disableYellowBox = true
AppRegistry.registerComponent('lunadorii', () => App);
