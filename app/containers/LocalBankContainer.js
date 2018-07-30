import React, { Component } from 'react'
import { AsyncStorage, Alert, ToastAndroid, Platform } from 'react-native'
import LocalBank from '../components/LocalBank'
import LocalBanks from '../particles/LocalBanks'
import Picker from '../particles/Picker'

import { connect } from 'react-redux'
import { fetchUserBank, fetchDataBank, addUserBank, editUserBank, deleteUserBank } from '../actions/bank'
import CreditCardIsEmpty from '../components/CreditCardIsEmpty'

class LocalBankContainer extends Component{

  state={
    isEmpty:false,
    stillLoading: true,
    visibleBankNamePicker:false,
    user_bank_id: 0,
    bank_id:0,
    bankName: '',
    name: '',
    bill: '',
    password: '',
    modalVisibleAddLocalBank: false,
    modalVisibleEditLocalBank: false,
    buttonSave: false
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)

    if(this.props.fetchUserBank(data.id, data.accessToken)){
      await this.setState({isEmpty: false})
    }else{
      await this.setState({isEmpty: true})
    }
    
    if(this.props.fetchDataBank()){
      await this.setState({stillLoading: false})
    }
  }

  async handleAddBank(){
    this.setState({buttonSave: true})
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.addUserBank(this.state.bill, this.state.name, this.state.bank_id, data.id, this.state.password, data.accessToken)
    await this.props.fetchUserBank(data.id, data.accessToken)
    // await alert(this.props.manipulatebank.message)
    if(Platform.OS === 'android'){
      ToastAndroid.showWithGravity("Added", ToastAndroid.SHORT, ToastAndroid.CENTER)
      await this.setState({
        buttonSave: false,
        modalVisibleAddLocalBank: !this.state.modalVisibleAddLocalBank
      })
    }else{
      await this.setState({
        buttonSave: false,
        modalVisibleAddLocalBank: !this.state.modalVisibleAddLocalBank
      })
    }
  }

  async handleEditBank(){
    this.setState({buttonSave: true})
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.editUserBank(this.state.user_bank_id, this.state.bill, this.state.name, this.state.bank_id, data.id, this.state.password, data.accessToken)
    await this.props.fetchUserBank(data.id, data.accessToken)
    // await alert(this.props.manipulatebank.message)
    if(Platform.OS === 'android'){
      ToastAndroid.showWithGravity("Edited", ToastAndroid.SHORT, ToastAndroid.CENTER)
      await this.setState({
        buttonSave: false,
        modalVisibleEditLocalBank: !this.state.modalVisibleEditLocalBank
      })
    }else{
      await this.setState({
        buttonSave: false,
        modalVisibleEditLocalBank: !this.state.modalVisibleEditLocalBank
      })
    }
  }

  async handleDeleteBank(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    Alert.alert(
      'Delete',
      'Are you sure to Delete ?',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => this.fetchData(item)
          
        }
      ],
      { cancelable: false }
    ) 
  }

  async fetchData(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteUserBank(item.user_bank_id, data.accessToken)
    await this.props.fetchUserBank(data.id, data.accessToken)
    // await alert(this.props.manipulatebank.message)
    // ToastAndroid.showWithGravity("Fetching", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  toggleModalAddLocalBank(){
    this.setState({ modalVisibleAddLocalBank: !this.state.modalVisibleAddLocalBank})
  }

  closeModal(){
    this.setState({ modalVisibleEditLocalBank: !this.state.modalVisibleEditLocalBank})
  }

  async toggleModalEditLocalBank(item){
    await this.closeModal()
    if(this.state.modalVisibleEditLocalBank){
      await this.setState({
        user_bank_id: item.user_bank_id,
        bankName: item.bank.name,
        bank_id: item.bank.bank_id,
        name: item.account_name,
        bill: item.account_number,
      }) 
    }else{
      await this.setState({
        userBankId: 0,
        bankName: '',
        name: '',
        bill: '',
      })
    }
  }

  render(){
    if(this.state.isEmpty){
      return(
        <CreditCardIsEmpty
          modalVisibleAddLocalBank={this.state.modalVisibleAddLocalBank}
          toggleModalAddLocalBank={() => this.toggleModalAddLocalBank()}
        />
      )
    }else{
      return(
        <LocalBank
          modalVisibleAddLocalBank={this.state.modalVisibleAddLocalBank}
          toggleModalAddLocalBank={() => this.toggleModalAddLocalBank()}
  
          modalVisibleEditLocalBank={this.state.modalVisibleEditLocalBank}
          toggleModalEditLocalBank={() => this.toggleModalEditLocalBank()}
  
          onChangeBankName={(bankName)=>this.setState({bankName, visibleBankNamePicker: true})}
          bankName={this.state.bankName}
          dataBankName={this.props.bank}
          renderDataBankName={({item}) => (
            <Picker data={item.bank} onSelect={() => this.setState({bankName: item.bank, bank_id: item.bank_id, visibleBankNamePicker: false})}/>
          )}
          visibleBankNamePicker={this.state.visibleBankNamePicker ? true : false}

          onChangeName={(name)=>this.setState({name})}
          onChangeBill={(bill)=>this.setState({bill})}
          onChangePassword={(password)=>this.setState({password})}

          user_bank_id={this.state.user_bank_id}
          bankName={this.state.bankName}
          name={this.state.name}
          bill={this.state.bill}
          password={this.state.password}
  
          dataLocalBank={this.props.userbank}
          renderLocalBanks={({ item }) => (
            <LocalBanks
              bankName={item.bank.name}
              name={item.account_name}
              bill={item.account_number}
              action={() => this.toggleModalEditLocalBank(item)}
              actionDelete={() => this.handleDeleteBank(item)} />
          )}

          buttonSave={this.state.buttonSave}
          handleAddBank={() => this.handleAddBank()}
          handleEditBank={() => this.handleEditBank()}
          handleDeleteBank={() => this.handleDeleteBank()}
          goback={() => this.props.navigation.goBack()}
        />
      )
    }
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchUserBank: (id, accessToken) => dispatch(fetchUserBank(id, accessToken)),
    fetchDataBank: () => dispatch(fetchDataBank()),
    addUserBank: (account_number, account_name, bank_id, id, password, accessToken) => dispatch(addUserBank(account_number, account_name, bank_id, id, password, accessToken)),
    editUserBank: (user_bank_id, account_number, account_name, bank_id, id, password, accessToken) => dispatch(editUserBank(user_bank_id, account_number, account_name, bank_id, id, password, accessToken)),
    deleteUserBank: (id, accessToken) => dispatch(deleteUserBank(id, accessToken))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    userbank: state.userbank,
    bank: state.bank,
    manipulatebank: state.manipulatebank
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalBankContainer)