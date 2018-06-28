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
    cardNumber:'',
    validationDate: '',
    cvv: '',
    cardHolderName:''
  }

  cardNumberFormatter(cardNumber){
    let formattedCardNumber = cardNumber.split(' ').join(' ')
    if(formattedCardNumber.length > 0 && formattedCardNumber.length == 12){
      formattedCardNumber = formattedCardNumber.match(new RegExp('.{1,4}', 'g')).join(' ')
      return formattedCardNumber
    }
  }

  validationDateFormatter(validationDate){
    let formattedValidationDate = validationDate.split('/').join('/')
    if(formattedValidationDate.length > 0 && formattedValidationDate.length == 4){
      formattedValidationDate = formattedValidationDate.match(new RegExp('.{1,2}', 'g')).join('/')
      return formattedValidationDate
    }
  }

  toggleModalEditCreditCard() {
    this.setState({ modalVisibleEditCreditCard: !this.state.modalVisibleEditCreditCard })
  }

  toggleModalAddCreditCard(){
    this.setState({ modalVisibleAddCreditCard: !this.state.modalVisibleAddCreditCard})
  }

  handleUpdateCreditCard(){
    alert(
      "Card Number " + this.state.cardNumber + "\n" +
      "Validation Date " + this.state.validationDate + "\n" +
      "CVV " + this.state.cvv + "\n" + 
      "Card Holder Name " + this.state.cardHolderName
    )
  }

  handleSaveCreditCard(){
    alert(
      "Card Number " + this.state.cardNumber + "\n" +
      "Validation Date " + this.state.validationDate + "\n" +
      "CVV " + this.state.cvv + "\n" + 
      "Card Holder Name " + this.state.cardHolderName
    )
  }

  render() {
    return (
      <CreditCard
        goback={() => this.props.navigation.goBack()}

        modalVisibleEditCreditCard={this.state.modalVisibleEditCreditCard}
        toggleModalEditCreditCard={() => this.toggleModalEditCreditCard()}
        handleUpdateCreditCard={() => this.handleUpdateCreditCard()}
        
        cardNumber={this.cardNumberFormatter(this.state.cardNumber)}
        validationDate={this.validationDateFormatter(this.state.validationDate)}
        cvv={this.state.cvv}
        cardHolderName={this.state.cardHolderName}

        onChangeCardNumber={(cardNumber) => this.setState({cardNumber})}
        onChangeValidationDate={(validationDate) => this.setState({validationDate})}
        onChangeCVV={(cvv) => this.setState({cvv})}
        onChangeCardHolder={(cardHolderName) => this.setState({cardHolderName})}

        // ---- //

        modalVisibleAddCreditCard={this.state.modalVisibleAddCreditCard}
        toggleModalAddCreditCard={() => this.toggleModalAddCreditCard()}
        handleSaveCreditCard={() => this.handleSaveCreditCard()}

        cardNumber={this.cardNumberFormatter(this.state.cardNumber)}
        validationDate={this.validationDateFormatter(this.state.validationDate)}
        cvv={this.state.cvv}
        cardHolderName={this.state.cardHolderName}

        onChangeCardNumber={(cardNumber) => this.setState({cardNumber})}
        onChangeValidationDate={(validationDate) => this.setState({validationDate})}
        onChangeCVV={(cvv) => this.setState({cvv})}
        onChangeCardHolder={(cardHolderName) => this.setState({cardHolderName})}

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