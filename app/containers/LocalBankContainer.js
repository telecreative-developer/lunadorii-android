import React, { Component } from 'react'
import LocalBank from '../components/LocalBank'
import LocalBanks from '../particles/LocalBanks'


dataLocalBank=[
  {bankName: "BCA", name: 'Nurdineeee', bill: '69696969696'},
  {bankName: "BRI", name: 'Nurdineeee', bill: '69696969696'},
  {bankName: "Mayapada", name: 'Nurdineeee', bill: '69696969696'}
]

export default class LocalBankContainer extends Component{

  state={
    bankName: '',
    name: '',
    bill: '',
    modalVisibleAddLocalBank: false,
    modalVisibleEditLocalBank: false,
  }

  toggleModalAddLocalBank(){
    this.setState({ modalVisibleAddLocalBank: !this.state.modalVisibleAddLocalBank})
  }

  toggleModalEditLocalBank(){
    this.setState({ modalVisibleEditLocalBank: !this.state.modalVisibleEditLocalBank})
  }

  render(){
    return(
      <LocalBank
        modalVisibleAddLocalBank={this.state.modalVisibleAddLocalBank}
        toggleModalAddLocalBank={() => this.toggleModalAddLocalBank()}

        modalVisibleEditLocalBank={this.state.modalVisibleEditLocalBank}
        toggleModalEditLocalBank={() => this.toggleModalEditLocalBank()}

        onChangeBankName={(bankName)=>this.setState({bankName})}
        onChangeName={(name)=>this.setState({name})}
        onChangeBill={(bill)=>this.setState({bill})}

        bankName={this.state.bankName}
        name={this.state.name}
        bill={this.state.bill}

        dataLocalBank={dataLocalBank}
        renderLocalBanks={({ item }) => (
          <LocalBanks
            bankName={item.bankName}
            name={item.name}
            bill={item.bill}
            action={() => this.toggleModalEditLocalBank()} />
        )}

        handleSave={() => alert(JSON.stringify(this.state))}
        handleEdit={() => alert(JSON.stringify(this.state))}
      />
    )
  }
}