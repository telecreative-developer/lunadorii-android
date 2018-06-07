import React, { Component } from 'react'
import Search from '../components/Search'

export default class SearchContainer extends Component {

  state = {
    modalVisibleFilters: false
  }

  toggleModalFilters() {
    this.setState({ modalVisibleFilters: !this.state.modalVisibleFilters })
  }

  render() {
    return (
      <Search
        goback={() => this.props.navigation.goBack()}
        modalVisibleFilters={this.state.modalVisibleFilters}
        toggleModalFilters={() => this.toggleModalFilters()} />
    )
  }
}