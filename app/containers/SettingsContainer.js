import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchSingleUser } from '../actions/getSingleUser'
import { editPassword, editEmail } from '../actions/editprofile'

import Settings from '../components/Settings'

class SettingsContainer extends Component {
  state = {
    modalVisibleChangePassword: false,
    modalVisibleChangeEmail: false,
    modalVisibleNotifications: false,

    newEmail:"",
    confirmEmail:"",

    password: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  componentDidMount(){
    this.props.fetchSingleUser(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InVzZXIiLCJpYXQiOjE1Mjk2NTUyODMsImV4cCI6MTUzMDI2MDA4MywiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL2tldmluaGVybWF3YW4iLCJzdWIiOiJsdW5hZG9yaWkifQ.DIQ6yH4qU_8oUAo7263CYkDklsCer2I2WLbaF_xHzAs')
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
      await this.props.editEmail(6, this.state.newEmail, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InVzZXIiLCJpYXQiOjE1Mjk2NTUyODMsImV4cCI6MTUzMDI2MDA4MywiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL2tldmluaGVybWF3YW4iLCJzdWIiOiJsdW5hZG9yaWkifQ.DIQ6yH4qU_8oUAo7263CYkDklsCer2I2WLbaF_xHzAs')
      // await console.log("editpassword", this.props.editpassword)
      await alert(this.props.editemail.message)
      await this.setState({ newEmail: "", confirmEmail: "" })
    }
  }

  async handleChangePassword() {
    
      if (this.state.password == ""){
        alert("your old password is empty")
      }if (this.state.newPassword !== this.state.confirmPassword) {
        alert("New password wasn't comfirmed")
      } else {
        await this.props.editPassword(6, this.state.currentPassword, this.state.newPassword, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InVzZXIiLCJpYXQiOjE1Mjk2NTUyODMsImV4cCI6MTUzMDI2MDA4MywiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL2tldmluaGVybWF3YW4iLCJzdWIiOiJsdW5hZG9yaWkifQ.DIQ6yH4qU_8oUAo7263CYkDklsCer2I2WLbaF_xHzAs')
        // await console.log("editpassword", this.props.editpassword)
        await alert(this.props.editpassword.message)
        await this.setState({ currentPassword: "", newPassword: "", confirmPassword: "" })
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

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleUser: (id, accessToken) => dispatch(fetchSingleUser(id, accessToken)),
    editPassword: (id, oldPass, newPass, accessToken) => dispatch(editPassword(id, oldPass, newPass, accessToken)),
    editEmail: (id, email, accessToken) => dispatch(editEmail(id, email, accessToken))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    getsingleuser: state.getsingleuser,
    editpassword: state.editpassword,
    editemail: state.editemail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)