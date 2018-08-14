import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Toast } from 'native-base'
import { editPassword, editEmail } from '../actions/editprofile'
import { StackActions, NavigationActions} from 'react-navigation'
import {AsyncStorage, ToastAndroid, Platform, NetInfo, BackHandler} from 'react-native'

import Settings from '../components/Settings'

class SettingsContainer extends Component {
  state = {
    modalVisibleChangePassword: false,
    modalVisibleChangeEmail: false,
    modalVisibleNotifications: false,

    userData: {},

    newEmail:"",
    confirmEmail:"",
    buttonEmail: false,
    changedEmail: '',

    password: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    buttonPassword: false
  };

  async componentDidMount(){
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log(data)
    await this.setState({
      userData: data,
      newEmail: ''
    })
  }

  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      this.props.navigation.navigate("HomeContainer")
    }
  };

  handleBackPress = () => {
    this.props.navigation.goBack() // works best when the goBack is async
    return true;
  }

  toggleModalChangePassword() {
    this.setState({ modalVisibleChangePassword: !this.state.modalVisibleChangePassword })
  }

  toggleModalNotifications() {
    this.setState({ modalVisibleNotifications: !this.state.modalVisibleNotifications })
  }

  toggleModalChangeEmail(){
    this.setState({ modalVisibleChangeEmail: !this.state.modalVisibleChangeEmail })
  }

  async handleChangeEmail(){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.newEmail == ""){
      alert("email cannot empty")
    }else if (regexEmail.test(this.state.newEmail) !== true) {
      alert("Email Invalid")
    }else if (this.state.newEmail !== this.state.confirmEmail) {
      alert("New Email wasn't comfirmed")
    } else {
      this.setState({ buttonEmail: true })
      await this.props.editEmail(this.state.userData.id, this.state.newEmail, this.state.userData.accessToken)
      if (this.props.editemail.status === 201){
        this.setState({ modalVisibleChangeEmail: false })
      }
      this.setState({ buttonEmail: false, changedEmail: this.state.newEmail })
      // await alert(this.props.editemail.message)
      if(Platform.OS === 'android'){
        ToastAndroid.showWithGravity(this.props.editemail.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
      }else{
        Toast.show({
          text: this.props.editemail.message
        })
      }
    }
  }

  handleLogout() {
    AsyncStorage.removeItem('session')
    this.props.navigation.dispatch(
      StackActions.reset({
        index:0,
        actions:[NavigationActions.navigate({routeName:'RegisterContainer'})]
      })
    )
  }

  async handleChangePassword() {
    
      if (this.state.currentPassword == ""){
        alert("your old password is empty")
      }else if (this.state.newPassword == "" && this.state.confirmPassword == "") {
        alert("Please Insert Your New Password")
      }else if (this.state.newPassword !== this.state.confirmPassword) {
        alert("New password wasn't comfirmed")
      } else {
        this.setState({ buttonPassword: true })
        await this.props.editPassword(this.state.userData.id, this.state.currentPassword, this.state.newPassword, this.state.userData.accessToken)
        if (this.props.editpassword.status === 201){
          this.setState({ modalVisibleChangePassword: false })
        }
        this.setState({ buttonPassword: false })
        // await alert(this.props.editpassword.message)
        if(Platform.OS === 'android'){
          ToastAndroid.showWithGravity(this.props.editpassword.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
        }else{
          Toast.show({
            text: this.props.editpassword.message
          })
        }
      }
    
  }

  render() {
    console.log(this.state.userData)
    return (
      <Settings
        email={this.state.changedEmail !== '' ? this.state.changedEmail : this.state.userData.email}
        modalVisibleChangePassword={this.state.modalVisibleChangePassword}
        toggleModalChangePassword={() => this.toggleModalChangePassword()}
        buttonPassword={this.state.buttonPassword}
        actionLogout={()=> this.handleLogout()}

        modalVisibleChangeEmail={this.state.modalVisibleChangeEmail}
        toggleModalChangeEmail={() => this.toggleModalChangeEmail()}
        buttonEmail={this.state.buttonEmail}

        modalVisibleNotifications={this.state.modalVisibleNotifications}
        toggleModalNotifications={() => this.toggleModalNotifications()}

        onChangeConfirmEmail={(confirmEmail) => this.setState({confirmEmail})}
        onChangeNewEmail={(newEmail) => this.setState({newEmail})}
        confirmEmail={this.state.confirmEmail}
        newEmail={this.state.newEmail}
        handleChangeEmail={() => this.handleChangeEmail()}

        onChangeCurrentPassword={(currentPassword) => this.setState({ currentPassword })}
        onChangeNewPassword={(newPassword) => this.setState({ newPassword })}
        onChangeConfirmPassword={(confirmPassword) => this.setState({ confirmPassword })}
        currentPassword={this.state.currentPassword}
        newPassword={this.state.newPassword}
        newConfirmPassword={this.state.confirmPassword}
        handleChangePassword={() => this.handleChangePassword()}

        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    editPassword: (id, oldPass, newPass, accessToken) => dispatch(editPassword(id, oldPass, newPass, accessToken)),
    editEmail: (id, email, accessToken) => dispatch(editEmail(id, email, accessToken))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    editpassword: state.editpassword,
    editemail: state.editemail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)