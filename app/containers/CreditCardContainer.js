import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid, Alert } from 'react-native'
import { connect } from 'react-redux'

import CreditCard from '../components/CreditCard'
import CreditCards from '../particles/CreditCards'
import { fetchUserCredit, addUserCredit, editUserCredit, defaultUserCredit, deleteUserCredit} from '../actions/creditCard'


class CreditCardContainer extends Component {

  state = {
    isEmpty:false,
    stillLoading: true,
    buttonSave: false,
    modalVisibleEditCreditCard: false,
    modalVisibleAddCreditCard: false,
    userCCId: '',
    card_default: false,
    cardNumber:'',
    mm: '',
    yyyy: '',
    validationDate: '',
    cvv: '',
    cardHolderName:'',
    country:'',
    postalCode:'',
    password:''
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    await this.setState({stillLoading: false})
  }

  cardNumberFormatter(value){
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  // validationDateFormatter(validationDate){
  //   let formattedValidationDate = validationDate.split('/').join('/')
  //   if(formattedValidationDate.length > 0 && formattedValidationDate.length == 4){
  //     formattedValidationDate = formattedValidationDate.match(new RegExp('.{1,2}', 'g')).join('/')
  //     return formattedValidationDate
  //   }
  // }

  async toggleModalEditCreditCard(item) {
    await this.setState({ modalVisibleEditCreditCard: !this.state.modalVisibleEditCreditCard })
    if(this.state.modalVisibleEditCreditCard){
      await this.setState({
        userCCId: item.user_creditcard_id,
        cardNumber: item.card_number,
        mm: item.mm,
        yyyy: item.yyyy,
        cardHolderName: item.card_name,
        country: item.country,
        postalCode: item.postal_code
      }) 
    }else{
      await this.setState({
        cardNumber: '',
        mm: '',
        yyyy: '',
        cardHolderName: '',
        country: '',
        postalCode: '',
        cvv: '',
        password: ''
      })
    }
  }

  toggleModalAddCreditCard(){
    this.setState({ modalVisibleAddCreditCard: !this.state.modalVisibleAddCreditCard})
  }

  async handleUpdateCreditCard(){
    this.setState({buttonSave: true})
    const {userCCId,cardNumber,mm,yyyy,cardHolderName,
    country,postalCode,password} = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.editUserCredit({card_number: cardNumber, mm, yyyy, country,card_name: cardHolderName, postal_code: postalCode, id: data.id, password}, userCCId, data.accessToken)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    ToastAndroid.showWithGravity("Edited", ToastAndroid.SHORT, ToastAndroid.CENTER)
    await this.setState({
      buttonSave: false,
      modalVisibleEditCreditCard: !this.state.modalVisibleEditCreditCard,
      cardNumber: '',
      mm: '',
      yyyy: '',
      cardHolderName: '',
      country: '',
      postalCode: '',
      cvv: '',
      password: ''
    })
  }

  async handleSaveCreditCard(){
    this.setState({buttonSave: true})
    const {cardNumber,mm,yyyy,cardHolderName,
    country,postalCode,password} = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.addUserCredit({card_number: cardNumber, mm, yyyy, country,card_name: cardHolderName, postal_code: postalCode, id: data.id, password}, data.accessToken)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    // await alert(this.props.manipulatecredit.message)
    ToastAndroid.showWithGravity("Added", ToastAndroid.SHORT, ToastAndroid.CENTER)
    await this.setState({
      buttonSave: false,
      modalVisibleAddCreditCard: !this.state.modalVisibleAddCreditCard,
      cardNumber: '',
      mm: '',
      yyyy: '',
      cardHolderName: '',
      country: '',
      postalCode: '',
      cvv: '',
      password: ''
    })
  }

  async onChangeDefault(item){
    await this.setState({
      userCCId: item.user_creditcard_id,
      card_default: true
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.defaultUserCredit(data.id, this.state.userCCId, data.accessToken)
    await this.props.fetchUserCredit(data.id, data.accessToken)
  }

  async handleDeleteCreditCard(item){
    await this.setState({
      userCCId: item.user_creditcard_id
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    Alert.alert(
      'Delete',
      'Are you sure to Delete ?',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => this.deleteItem(item),
        }
      ],
      { cancelable: false }
    )
  }

  async deleteItem(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteUserCredit(this.state.userCCId, data.accessToken)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    ToastAndroid.showWithGravity("Removed", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  render() {
    console.log(this.props.usercredit)
    return (
      <CreditCard
        stillLoading={this.state.stillLoading}
        goback={() => this.props.navigation.goBack()}
        buttonSave={this.state.buttonSave}
        
        cardNumberFormat={this.cardNumberFormatter(this.state.cardNumber)}
        cardNumber={this.state.cardNumber}
        mm={this.state.mm}
        yyyy={this.state.yyyy}
        cvv={this.state.cvv}
        cardHolderName={this.state.cardHolderName}
        country={this.state.country}
        postalCode={this.state.postalCode}
        password={this.state.password}

        onChangeCardNumber={(cardNumber) => this.setState({cardNumber})}
        onChangemm={(mm) => this.setState({mm})}
        onChangeyyyy={(yyyy) => this.setState({yyyy})}
        onChangeCVV={(cvv) => this.setState({cvv})}
        onChangeCardHolder={(cardHolderName) => this.setState({cardHolderName})}
        onChangeCountry={(country) => this.setState({country})}
        onChangePostalCode={(postalCode) => this.setState({postalCode})}
        onChangePassword={(password) => this.setState({password})}

        // ---- //

        modalVisibleAddCreditCard={this.state.modalVisibleAddCreditCard}
        toggleModalAddCreditCard={() => this.toggleModalAddCreditCard()}
        handleSaveCreditCard={() => this.handleSaveCreditCard()}

        modalVisibleEditCreditCard={this.state.modalVisibleEditCreditCard}
        toggleModalEditCreditCard={() => this.toggleModalEditCreditCard()}
        handleUpdateCreditCard={() => this.handleUpdateCreditCard()}

        dataCreditCards={this.props.usercredit}
        renderCreditCards={({ item }) => (
          <CreditCards
            cardNumberFormated={this.cardNumberFormatter(item.card_number)}
            cardNumber={item.card_number}
            mm={item.mm}
            yyyy={item.yyyy}
            card_name={item.card_name}
            card_default={item.card_default}
            actionSetDefault={() => this.onChangeDefault(item)}
            actionRemove={() => this.handleDeleteCreditCard(item)}
            actionEdit={() => this.toggleModalEditCreditCard(item)} />
        )}
      />
    )
  }

}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchUserCredit: (id, accessToken) => dispatch(fetchUserCredit(id,accessToken)),
    addUserCredit: (data, accessToken) => dispatch(addUserCredit(data,accessToken)),
    editUserCredit: (data, user_creditcard_id, accessToken) => dispatch(editUserCredit(data, user_creditcard_id, accessToken)),
    defaultUserCredit: (id, user_creditcard_id, accessToken) => dispatch(defaultUserCredit(id, user_creditcard_id, accessToken)),
    deleteUserCredit: (id, accessToken) => dispatch(deleteUserCredit(id,accessToken)),
  }
}

const mapStateToProps = (state) => {
  return{
    logged: state.logged,
    loading: state.loading,
    success: state.success,
    sessionPersistance: state.sessionPersistance,
    failed: state.failed,
    usercredit: state.usercredit,
    manipulatecredit: state.manipulatecredit
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardContainer)