import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import LocalBank from '../components/LocalBank'
import LocalBanks from '../particles/LocalBanks'

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
    bankName: 'BCA',
    banks: [
      'BCA',
      'BRI',
      'Mayapada',
      'Mandiri'
    ],

    userBankId: 0,
    bankName: '',
    name: '',
    bill: '',
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
  
          onChangeBankName={(userBankId)=>this.setState({userBankId})}
          onChangeName={(name)=>this.setState({name})}
          onChangeBill={(bill)=>this.setState({bill})}
  
          bankNames={this.state.banks}
          selectedBank={this.state.bankName}
  
          userBankId={this.state.userBankId}
          bankName={this.state.bankName}
          name={this.state.name}
          bill={this.state.bill}
  
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