import React, { Component } from 'react'
import Search from '../components/Search'

export default class SearchContainer extends Component {
  render() {
    return (
      <Search
        goback={() => this.props.navigation.goBack()} />
    )
  }
}