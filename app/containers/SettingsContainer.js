import React, { Component } from 'react'
import Settings from '../components/Settings'

export default class SettingsContainer extends Component{
  state = {
    modalVisiblePassword: false,
    modalVisibleNotif: false,
  };

  openModalPassword() {
    this.setState({modalVisiblePassword: true});
  }
  
  closeModalPassword(){
    this.setState({modalVisiblePassword: false});
  }

  openModalNotif() {
    this.setState({modalVisibleNotif: true});
  }
  
  closeModalNotif(){
    this.setState({modalVisibleNotif: false});
  }

  render(){
    return(
      <Settings
        modalVisiblePassword = {this.state.modalVisiblePassword}
        openModalPassword = {() => this.openModalPassword()}
        closeModalPassword = {() => this.closeModalPassword()}
        modalVisibleNotif = {this.state.modalVisibleNotif}
        openModalNotif = {() => this.openModalNotif()}
        closeModalNotif = {() => this.closeModalNotif()}
        
        
      />
    )
  }
}