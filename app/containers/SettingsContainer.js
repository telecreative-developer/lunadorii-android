import React, { Component } from 'react'
import Settings from '../components/Settings'

export default class SettingsContainer extends Component {
  state = {
    modalVisibleChangePassword: false,
    modalVisibleNotifications: false,

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

        modalVisibleNotifications={this.state.modalVisibleNotifications}
        toggleModalNotifications={() => this.toggleModalNotifications()}

        onChangeCurrentPassword={(currentPassword) => this.setState({ currentPassword })}
        onChangeNewPassword={(newPassword) => this.setState({ newPassword })}
        onChangeConfirmPassword={(confirmPassword) => this.setState({ confirmPassword })}
        handleChangePassword={() => this.handleChangePassword()}

        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}