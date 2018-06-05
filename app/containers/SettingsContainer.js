import React, { Component } from 'react'
import Settings from '../components/Settings'

export default class SettingsContainer extends Component{
  state = {
    modalVisibleChangePassword: false,
    modalVisibleNotifications: false,
  };
  
  toggleModalChangePassword(){
    this.setState({modalVisibleChangePassword: !this.state.modalVisibleChangePassword})
  }

  toggleModalNotifications(){
    this.setState({modalVisibleNotifications: !this.state.modalVisibleNotifications})
  }

  render(){
    return(
      <Settings
        modalVisibleChangePassword={this.state.modalVisibleChangePassword}
        toggleModalChangePassword={() => this.toggleModalChangePassword()}

        modalVisibleNotifications={this.state.modalVisibleNotifications}
        toggleModalNotifications={() => this.toggleModalNotifications()}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}