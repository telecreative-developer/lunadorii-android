import React, { Component } from 'react'
import Reports from '../components/Reports'

export default class ReportsContainer extends Component{
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible: true});
  }
  
  closeModal(){
    this.setState({modalVisible: false});
  }

  render(){
    return(
      <Reports
        modalVisible = {this.state.modalVisible}
        openModal = {() => this.openModal()}
        closeModal = {() => this.closeModal()}
        selectedKey = {this.state.selected1}
      />
    )
  }
}