import React, { Component } from 'react'
import SplashScreen from '../components/SplashScreen'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../actions/login'

class SplashScreenContainer extends Component {

  navigateToHome(){
    setTimeout(() => {
      this.props.navigation.navigate("HomeContainer");
    }, 1000)
  }

  navigateToLogin(){
    setTimeout(() => {
      this.props.navigation.navigate("RegisterContainer");
    }, 1000)
  }

  // navigateToUploadImage(data){
  //   setTimeout(() => {
  //     this.props.navigation.navigate("UploadImageContainer", {user: data});
  //   }, 1000)
  // }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log(data)
    if(data !== null){
      try{
        await this.props.login(data.email, data.password)
        // if(data.avatar_url == null || data.avatar_url == '' || data.avatar_url == 'undefined' ){
        //   this.navigateToUploadImage(data)
        // }else{
        //   this.navigateToHome()
        // }
        this.navigateToHome()
      }catch(e){
        alert(e)
      }
    }else{
      this.navigateToLogin()
    }
  }

  render() {
    return (
      <SplashScreen />
    )
  }

}
const mapDispatchToProps = (dispatch) => {
  return{
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(SplashScreenContainer)