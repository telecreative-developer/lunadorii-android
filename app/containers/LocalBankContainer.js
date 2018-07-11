import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import LocalBank from '../components/LocalBank'
import LocalBanks from '../particles/LocalBanks'
import Picker from '../particles/Picker'

import { connect } from 'react-redux'
import { fetchUserBank, fetchDataBank } from '../actions/bank'
import CreditCardIsEmpty from '../components/CreditCardIsEmpty'

dataLocalBank=[
  {bankName: "BCA", name: 'Nurdineeee', bill: '69696969696'},
  {bankName: "BRI", name: 'Nurdineeee', bill: '69696969696'},
  {bankName: "Mayapada", name: 'Nurdineeee', bill: '69696969696'}
]

class LocalBankContainer extends Component{

  state={
    isEmpty:false,
    visibleBankNamePicker:false,
    user_bank_id: 0,
    bankName: '',
    name: '',
    bill: '',
    password: '',
    modalVisibleAddLocalBank: false,
    modalVisibleEditLocalBank: false,
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)

    if(this.props.fetchUserBank(data.id, data.accessToken)){
      await this.setState({isEmpty: false})
    }else{
      await this.setState({isEmpty: true})
    }
    
    this.props.fetchDataBank()
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
        userBankId: item.userBankId,
        bankName: item.bank.name,
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
          dataBankName={['BCA','Mandiri','BRI']}
          renderDataBankName={({item}) => (
            <Picker data={item} onSelect={() => this.setState({bankName: item, visibleBankNamePicker: false})}/>
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
              action={() => this.toggleModalEditLocalBank(item)} />
          )}
  
          handleSave={() => alert(JSON.stringify(this.state))}
          handleEdit={() => alert(JSON.stringify(this.state))}
          goback={() => this.props.navigation.goBack()}
        />
      )
    }
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchUserBank: (id, accessToken) => dispatch(fetchUserBank(id, accessToken)),
    fetchDataBank: () => dispatch(fetchDataBank())
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    userbank: state.userbank,
    bank: state.bank
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalBankContainer)