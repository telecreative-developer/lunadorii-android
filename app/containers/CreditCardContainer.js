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

export default class CreditCardContainer extends Component{

  state = {
    modalVisibleEditCreditCard: false
  }

  toggleModalEditCreditCard(){
    this.setState({modalVisibleEditCreditCard: !this.state.modalVisibleEditCreditCard})
  }

  render(){
    return(
      <CreditCard
        goback={() => this.props.navigation.goBack()}
        modalVisibleEditCreditCard={this.state.modalVisibleEditCreditCard}
        toggleModalEditCreditCard={() => this.toggleModalEditCreditCard()}
        
        dataCreditCards={dataCreditCards}
        renderCreditCards={({item}) => (
          <CreditCards
            cardNumber={item.cardNumber}
            validationDate={item.validationDate}
            action={() => this.toggleModalEditCreditCard()}/>
        )}
      />
    )
  }

}