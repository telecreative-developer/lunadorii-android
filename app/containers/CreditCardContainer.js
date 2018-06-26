import React, { Component } from 'react'
import CreditCard from '../components/CreditCard'
import CreditCards from '../particles/CreditCards'

const dataCreditCards = [
  {
    cardNumber: '**** **** **** 0943',
    validationDate: '17/11',
    cvv: '123',
    cardHolderName: 'Muhammad Isa Wijaya Kusuma'
  },
  {
    cardNumber: '**** **** **** 8724',
    validationDate: '03/12',
    cvv: '123',
    cardHolderName: 'Alfan Hibban Intiyas'
  },
]

export default class CreditCardContainer extends Component {

  state = {
    modalVisibleEditCreditCard: false,
    modalVisibleAddCreditCard: false,
  }

  toggleModalEditCreditCard() {
    this.setState({ modalVisibleEditCreditCard: !this.state.modalVisibleEditCreditCard })
  }

  toggleModalAddCreditCard(){
    this.setState({ modalVisibleAddCreditCard: !this.state.modalVisibleAddCreditCard})
  }

  handleUpdateCreditCard(){
    alert("Handler for update credit card")
  }

  handleSaveCreditCard(){
    alert("Handler for save credit card")
  }

  render() {
    return (
      <CreditCard
        goback={() => this.props.navigation.goBack()}

        modalVisibleEditCreditCard={this.state.modalVisibleEditCreditCard}
        toggleModalEditCreditCard={() => this.toggleModalEditCreditCard()}
        handleUpdateCreditCard={() => this.handleUpdateCreditCard()}

        modalVisibleAddCreditCard={this.state.modalVisibleAddCreditCard}
        toggleModalAddCreditCard={() => this.toggleModalAddCreditCard()}
        handleSaveCreditCard={() => this.handleSaveCreditCard()}

        dataCreditCards={dataCreditCards}
        renderCreditCards={({ item }) => (
          <CreditCards
            cardNumber={item.cardNumber}
            validationDate={item.validationDate}
            action={() => this.toggleModalEditCreditCard()} />
        )}
      />
    )
  }

}