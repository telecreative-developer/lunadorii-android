import React, { Component } from 'react'
import {connect} from 'react-redux'
import { editPassword, editEmail } from '../actions/editprofile'
import { StackActions, NavigationActions} from 'react-navigation'
import {AsyncStorage, ToastAndroid} from 'react-native'

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

    password: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    buttonPassword: false
  };

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      userData: data,
      newEmail: data.email
    })
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
    if (this.state.newEmail == ""){
      alert("email cannot empty")
    }else if (this.state.newEmail !== this.state.confirmEmail) {
      alert("New Email wasn't comfirmed")
    } else {
      this.setState({ buttonEmail: true })
      await this.props.editEmail(this.state.userData.id, this.state.newEmail, this.state.userData.accessToken)
      if (this.props.editemail.status === 201){
        this.setState({ modalVisibleChangeEmail: false })
      }
      this.setState({ buttonEmail: false })
      // await alert(this.props.editemail.message)
      ToastAndroid.showWithGravity("Change saved", ToastAndroid.SHORT, ToastAndroid.CENTER)
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
        ToastAndroid.showWithGravity("Password changed", ToastAndroid.SHORT, ToastAndroid.CENTER)
      }
    
  }

  render() {
    return (
      <Settings
        userEmail={this.state.newEmail}

        modalVisibleChangePassword={this.state.modalVisibleChangePassword}
        toggleModalChangePassword={() => this.toggleModalChangePassword()}
        buttonPassword={this.state.buttonPassword}
        actionLogout={()=> this.handleLogout()}

        modalVisibleChangeEmail={this.state.modalVisibleChangeEmail}
        toggleModalChangeEmail={() => this.toggleModalChangeEmail()}
        buttonEmail={this.state.buttonEmail}

        modalVisibleNotifications={this.state.modalVisibleNotifications}
        toggleModalNotifications={() => this.toggleModalNotifications()}

        onChangeNewEmail={(newEmail) => this.setState({newEmail})}
        onChangeConfirmEmail={(confirmEmail) => this.setState({confirmEmail})}
        newEmail={this.state.newEmail}
        confirmEmail={this.state.confirmEmail}
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