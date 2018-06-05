import React, { Component } from 'react'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'

const dataShippingAddress = [
  {
    name: 'Muhammad Isa Wijaya Kusuma',
    numberPhone: '+62 896 4395 1073',
    address: 'Tangerang Cipondoh Makmur Blok K 10 No.28',
  },
  {
    name: 'Alfan Hibban Intiyas',
    numberPhone: '+62 896 4395 1073',
    address: 'Tangerang Cipondoh Makmur Blok K 10 No.28',
  }
]

export default class YourShippingAddressContainer extends Component{

  state = {
    modalVisibleEditAddress: false
  }

  toggleModalEditAddress(){
    this.setState({modalVisibleEditAddress: !this.state.modalVisibleEditAddress})
  }

  render(){
    return(
      <YourShippingAddress
        goback={() => this.props.navigation.goBack()}
        modalVisibleEditAddress={this.state.modalVisibleEditAddress}
        toggleModalEditAddress={() => this.toggleModalEditAddress()}
        
        dataShippingAddress={dataShippingAddress}
        renderShippingAddress={({item}) => (
          <ShippingAddress
            name={item.name}
            numberPhone={item.numberPhone}
            address={item.address}
            action={() => this.toggleModalEditAddress()}/>
        )}
      />
    )
  }

}