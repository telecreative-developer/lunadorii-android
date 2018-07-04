import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
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
import PrivacyPolicyContainer from './app/containers/PrivacyPolicyContainer'
import SearchContainer from './app/containers/SearchContainer'
import SplashScreenContainer from './app/containers/SplashScreenContainer'
import RegisterContainer from './app/containers/RegisterContainer'
import LoginContainer from './app/containers/LoginContainer'
import ProductShowContainer from './app/containers/ProductShowContainer'
import AddPhotoProfileContainer from './app/containers/AddPhotoProfileContainer'
import LoginTroubleshootingContainer from './app/containers/LoginTroubleshootingContainer'
import RegisterIdentifyContainer from './app/containers/RegisterIdentifyContainer'
import LocalBankContainer from './app/containers/LocalBankContainer'
import UnknownScreenContainer from './app/containers/UnknownScreenContainer'

const AppNavigator = StackNavigator(
  {    
    UnknownScreenContainer: { screen: UnknownScreenContainer },
    LocalBankContainer: { screen: LocalBankContainer },
    RegisterIdentifyContainer: { screen: RegisterIdentifyContainer },
    LoginTroubleshootingContainer: { screen: LoginTroubleshootingContainer },
    AddPhotoProfileContainer: { screen: AddPhotoProfileContainer },
    HomeContainer: { screen: HomeContainer },
    LoginContainer: { screen: LoginContainer },
    RegisterContainer: { screen: RegisterContainer },
    SplashScreenContainer: { screen: SplashScreenContainer },
    SettingsContainer: { screen: SettingsContainer },
    ProfileContainer: { screen: ProfileContainer },
    YourShippingAddressContainer: { screen: YourShippingAddressContainer },
    YourCartContainer: { screen: YourCartContainer },
    PurchaseHistoryContainer: { screen: PurchaseHistoryContainer },
    ProductShowContainer: { screen: ProductShowContainer},
    SearchContainer: { screen: SearchContainer },
    PrivacyPolicyContainer: { screen: PrivacyPolicyContainer },
    WishlistContainer: { screen: WishlistContainer },
    ReportsContainer: { screen: ReportsContainer },
    ReviewsContainer: { screen: ReviewsContainer },
    PaymentsContainer: { screen: PaymentsContainer },
    CreditCardContainer: { screen: CreditCardContainer }
  }, {
    initialRouteName: 'SplashScreenContainer',
    headerMode: 'none'
  }
)

export default AppNavigator