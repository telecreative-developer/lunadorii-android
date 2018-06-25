import React, { Component } from 'react'
import {connect} from 'react-redux'
import { editPassword, editEmail } from '../actions/editprofile'
import {AsyncStorage} from 'react-native'

import Settings from '../components/Settings'

class SettingsContainer extends Component {
  state = {
    modalVisibleChangePassword: false,
    modalVisibleChangeEmail: false,
    modalVisibleNotifications: false,

    userData: {},

    newEmail:"",
    confirmEmail:"",

    password: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log('Ini isi session di setting' , data)
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
    }if (this.state.newEmail !== this.state.confirmEmail) {
      alert("New Email wasn't comfirmed")
    } else {
      await this.props.editEmail(this.state.userData.id, this.state.newEmail, this.state.userData.accessToken)
      // await console.log("editemail", this.props.editemail)
      await alert(this.props.editemail.message)
      await this.setState({confirmEmail: "" })
    }
  }

  handleLogout() {
    AsyncStorage.removeItem('session')
    this.props.navigation.navigate('LoginContainer')
  }

  async handleChangePassword() {
    
      if (this.state.password == ""){
        alert("your old password is empty")
      }if (this.state.newPassword !== this.state.confirmPassword) {
        alert("New password wasn't comfirmed")
      } else {
        await this.props.editPassword(this.state.userData.id, this.state.currentPassword, this.state.newPassword, this.state.userData.accessToken)
        // await console.log("editpassword", this.props.editpassword)
        await alert(this.props.editpassword.message)
        await this.setState({ currentPassword: "", newPassword: "", confirmPassword: "" })
      }
    
  }

  render() {
    console.log(this.state.userData)
    return (
      <Settings
        userEmail={this.state.newEmail}

        modalVisibleChangePassword={this.state.modalVisibleChangePassword}
        toggleModalChangePassword={() => this.toggleModalChangePassword()}
        actionLogout={()=> this.handleLogout()}

        modalVisibleChangeEmail={this.state.modalVisibleChangeEmail}
        toggleModalChangeEmail={() => this.toggleModalChangeEmail()}

        modalVisibleNotifications={this.state.modalVisibleNotifications}
        toggleModalNotifications={() => this.toggleModalNotifications()}

        onChangeNewEmail={(newEmail) => this.setState({newEmail})}
        onChangeConfirmEmail={(confirmEmail) => this.setState({confirmEmail})}
        handleChangeEmail={() => this.handleChangeEmail()}

        onChangeCurrentPassword={(currentPassword) => this.setState({ currentPassword })}
        onChangeNewPassword={(newPassword) => this.setState({ newPassword })}
        onChangeConfirmPassword={(confirmPassword) => this.setState({ confirmPassword })}
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