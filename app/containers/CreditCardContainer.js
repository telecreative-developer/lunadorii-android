import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid, Alert, BackHandler, Platform, NetInfo } from 'react-native'
import { connect } from 'react-redux'
import { Toast } from 'native-base'
import CreditCard from '../components/CreditCard'
import CreditCards from '../particles/CreditCards'
import { fetchUserCredit, addUserCredit, editUserCredit, defaultUserCredit, deleteUserCredit} from '../actions/creditCard'


class CreditCardContainer extends Component {

  state = {
    isEmpty:false,
    stillLoading: true,
    setDefaultLoading: false,
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
    password:'',
    CVV:''
  }

  async componentDidMount(){
    await NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    await BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    await this.setState({stillLoading: false})
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      this.props.navigation.navigate("HomeContainer")
    }
  };

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
    // await alert(this.props.manipulatecredit.message)
    if(this.props.manipulatecredit.status === 201){
      if(Platform.OS === 'android'){
        await ToastAndroid.showWithGravity("Edited", ToastAndroid.SHORT, ToastAndroid.CENTER) 
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
      }else{
        Toast.show({
          text: "Edited"
        })
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
    }else{
      if(Platform.OS==="android"){
        await ToastAndroid.showWithGravity("Failed, Check Your Data", ToastAndroid.SHORT, ToastAndroid.CENTER)
        await this.setState({buttonSave: false})  
      }else{
        await this.setState({buttonSave: false})  
      }
    }
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
    if(this.props.usercredit.length === 0){
      await this.setState({isEmpty: true})
    }else{
      await this.setState({isEmpty: false})
    }
    if(this.props.manipulatecredit.status === 201){
      if(Platform.OS==='android'){
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
      }else{
        Toast.show({
          text: "Added"
        })
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
    }else{
      if(Platform.OS==='android'){
        ToastAndroid.showWithGravity("Failed, Check Your Data", ToastAndroid.SHORT, ToastAndroid.CENTER)
        await this.setState({buttonSave: false})
      }else{
        await this.setState({buttonSave: false})
      }
    }
  }

  async onChangeDefault(item){
    await this.setState({
      userCCId: item.user_creditcard_id,
      card_default: true
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({setDefaultLoading: true})
    await this.props.defaultUserCredit(data.id, this.state.userCCId, data.accessToken)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    await this.setState({setDefaultLoading: false})
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
        { text: 'Cancel', onPress: () => {
          Platform.OS === 'ios'
          ?
          Toast.show({
            text: "Canceled"
          })
          :
          ToastAndroid.showWithGravity("Canceled", ToastAndroid.SHORT, ToastAndroid.CENTER)
        }, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {this.deleteItem(item)}
        }
      ],
      { cancelable: false }
    )
  }

  async deleteItem(item){
    await this.setState({stillLoading: true})
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteUserCredit(this.state.userCCId, data.accessToken)
    await this.props.fetchUserCredit(data.id, data.accessToken)
    if(Platform.OS==='android'){
      ToastAndroid.showWithGravity("Removed", ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      Toast.show({
        text: 'Removed'
      })
    }
    await this.setState({stillLoading: false})
  }

  handleBackPress = () => {
    this.handleGoBack(); // works best when the goBack is async
    return true;
  }

  handleGoBack(){
    const {navigation} = this.props
    navigation.state.params.func()
    navigation.goBack()
  }

  render() {
    console.log(this.props.usercredit)
    return (
      <CreditCard
        stillLoading={this.state.stillLoading}
        setDefaultLoading={this.state.setDefaultLoading}
        goback={() => this.handleBackPress()}
        buttonSave={this.state.buttonSave}
        isEmpty={this.state.isEmpty}
        
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

        dataCreditCardsDefault={this.props.usercredit.filter(item => item.card_default === true)}
        dataCreditCards={this.props.usercredit.filter(item => item.card_default === false)}
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