import React, { Component } from 'react'
import YourCart from '../components/YourCart'
import BenefitCosmetics from '../particles/BenefitCosmetics'
import ShippingAddress from '../particles/ShippingAddress'

const dataProducts = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Face Primere Mini',
    price: '20,000',
    quantity: '1'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Face Primere Mini',
    price: '40,000',
    quantity: '2'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Face Primere Mini',
    price: '60,000',
    quantity: '3'
  },
]

const dataShippingAddress = [
  {
    name: 'Muhammad Isa Wijaya Kusuma',
    numberPhone: '+62 89643951073',
    address: 'Cipondoh Makmur Tangerang blok K 10 No.28'
  },
  {
    name: 'Alfan Hibban Intiyas',
    numberPhone: '+62 6969696969',
    address: 'Malang Malang blok N 2 No.100'
  }
]

export default class YourCartContainer extends Component {

  state = {
    modalVisibleEditQuantity: false,
    modalVisibleEditAddress: false
  }

  toggleModalEditQuantity() {
    this.setState({ modalVisibleEditQuantity: !this.state.modalVisibleEditQuantity })
  }

  toggleModalEditAddress() {
    this.setState({ modalVisibleEditAddress: !this.state.modalVisibleEditAddress })
  }

  render() {
    return (
      <YourCart
        dataProducts={dataProducts}
        renderProducts={({ item }) => (
          <BenefitCosmetics
            title={item.item}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            action={() => this.toggleModalEditQuantity()} />
        )}

        dataShippingAddress={dataShippingAddress}
        renderShippingAddress={({ item }) => (
          <ShippingAddress
            name={item.name}
            numberPhone={item.numberPhone}
            address={item.address}
            action={() => this.toggleModalEditAddress()} />
        )}

        toggleModalEditQuantity={() => this.toggleModalEditQuantity()}
        modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}

        toggleModalEditAddress={() => this.toggleModalEditAddress()}
        modalVisibleEditAddress={this.state.modalVisibleEditAddress}

        goback={() => this.props.navigation.goBack()}
      />
    );
  }
}