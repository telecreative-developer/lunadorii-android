import React, { Component } from 'react'
import Payments from '../components/Payments'
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

export default class PaymentsContainer extends Component {

  state = {
    modalVisibleEditCreditCard: false,
    modalVisibleWaitingForPayment: false
  }

  toggleModalEditCreditCard() {
    this.setState({ modalVisibleEditCreditCard: !this.state.modalVisibleEditCreditCard })
  }

  toggleModalWaitingForPayment() {
    this.setState({ modalVisibleWaitingForPayment: !this.state.modalVisibleWaitingForPayment })
  }

  render() {
    return (
      <Payments
        dataCreditCards={dataCreditCards}
        renderCreditCards={({ item }) => (
          <CreditCards
            cardNumber={item.cardNumber}
            validationDate={item.validationDate}
            action={() => this.toggleModalEditCreditCard()} />
        )}
        modalVisibleEditCreditCard={this.state.modalVisibleEditCreditCard}
        toggleModalEditCreditCard={() => this.toggleModalEditCreditCard()}

        modalVisibleWaitingForPayment={this.state.modalVisibleWaitingForPayment}
        toggleModalWaitingForPayment={() => this.toggleModalWaitingForPayment()}

        backToHome={() => this.props.navigation.navigate('HomeContainer')}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}
