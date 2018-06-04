import React, { Component } from 'react'
import YourCart from '../components/YourCart'

export default class YourCartContainer extends Component {

  state = {
    modalVisibleEditQuantity: false
  }

  openModalEditQuantity(){
    this.setState({modalVisibleEditQuantity: true})
  }

  closeModalEditQuantity(){
    this.setState({modalVisibleEditQuantity: false})
  }

  render() {
    return (
      <YourCart 
        openModalEditQuantity={() => this.openModalEditQuantity()}
        closeModalEditQuantity={() => this.closeModalEditQuantity()}
        modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}
      />
    );
  }
}