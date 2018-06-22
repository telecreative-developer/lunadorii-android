import React, { Component } from 'react'
import Settings from '../components/Settings'

export default class SettingsContainer extends Component {
  state = {
    modalVisibleChangePassword: false,
    modalVisibleChangeEmail: false,
    modalVisibleNotifications: false,

    newEmail:"",
    confirmEmail:"",

    password: "123",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  toggleModalChangePassword() {
    this.setState({ modalVisibleChangePassword: !this.state.modalVisibleChangePassword })
  }

  toggleModalNotifications() {
    this.setState({ modalVisibleNotifications: !this.state.modalVisibleNotifications })
  }

  toggleModalChangeEmail(){
    this.setState({ modalVisibleChangeEmail: !this.state.modalVisibleChangeEmail })
  }

  handleChangeEmail(){
    alert("Email changed")
  }

  handleChangePassword() {
    if (this.state.currentPassword !== this.state.password) {
      alert("Previous password doesn't same")
    } else {
      if (this.state.newPassword !== this.state.confirmPassword) {
        alert("New password wasn't comfirmed")
      } else {
        alert("Successfully change password")
        this.setState({ password: this.state.confirmPassword })
      }
    }
  }

  render() {
    return (
      <Settings
        modalVisibleChangePassword={this.state.modalVisibleChangePassword}
        toggleModalChangePassword={() => this.toggleModalChangePassword()}

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