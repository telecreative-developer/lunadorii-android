import React, { Component } from 'react'
import Reports from '../components/Reports'

export default class ReportsContainer extends Component {

  state = {
    modalVisibleCategory: false
  }

  toggleModalCategory() {
    this.setState({ modalVisibleCategory: !this.state.modalVisibleCategory })
  }

  render() {
    return (
      <Reports
        modalVisibleCategory={this.state.modalVisibleCategory}
        toggleModalCategory={() => this.toggleModalCategory()}
        selectedKey={this.state.selected1}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}