import React, { Component } from 'react'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'

const dataOnCart = [
  {
    index: 0,
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Paket tools',
    categories: 'Tools & Brushes',
    price: 150000,
    quantity: 2
  },
  {
    index: 1,
    image: 'https://www.wanista.com/wp-content/uploads/2013/10/Modbox-Product-Line-Up2.png',
    title: 'Paket Modbox',
    categories: 'Skincare',
    price: 1200000,
    quantity: 2
  },
  {
    index: 2,
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Paket Makeup',
    categories: 'Makeup',
    price: 250000,
    quantity: 7
  },
]

const dataShippingAddress = [
  {
    index: 0,
    name: 'Muhammad Isa Wijaya Kusuma',
    address: 'Cipondoh Makmur Blok K 10 No 28',
    province: 'Banten',
    city: 'Tangerang',
    regency: 'Tangerang',
    district: 'Cipondoh Makmur',
    numberPhone: '+62 89643951073'
  },
  {
    index: 1,
    name: 'Alfan Hiban Intiyas',
    address: 'Apartermen Gading Nias Tower Dahlia Lt.22 NU',
    province: 'Banten',
    city: 'Jakarta',
    regency: 'Jakarta',
    district: 'Kelapa Gading',
    numberPhone: '+62 99802374482'
  }
]

export default class YourCartContainer extends Component {

  state = {
    index: 0,
    singleDataShippingAddress: {},

    name: "",
    address: "",
    province: "",
    city: "",
    regency: "",
    district: "",
    numberPhone: "",

    singleDataQuantity: {},
    modalVisibleEditQuantity: false,
    modalVisibleEditAddress: false
  }

  toggleModalEditQuantity(index) {
    this.setState({ modalVisibleEditQuantity: !this.state.modalVisibleEditQuantity })
    this.setState({ singleDataQuantity: dataOnCart[index] })
  }

  onUpdateDataQuantity() {
    alert('Create some update action')
  }

  toggleModalEditAddress(index) {
    this.setState({ modalVisibleEditAddress: !this.state.modalVisibleEditAddress })
    this.setState({ singleDataShippingAddress: dataShippingAddress[index] })
  }

  handleSaveDataShippingAddress(index) {
    dataShippingAddress[index] = {
      index: index,
      name: this.state.name,
      address: this.state.address,
      province: this.state.province,
      city: this.state.city,
      regency: this.state.regency,
      district: this.state.district,
      numberPhone: this.state.numberPhone,
    }
    alert(JSON.stringify(dataShippingAddress[index]))
  }

  render() {
    return (
      <YourCart
        dataOnCart={dataOnCart}
        renderProducts={({ item }) => (
          <OnCart
            title={item.title}
            categories={item.categories}
            image={item.image}
            price={item.price * item.quantity}
            quantity={item.quantity}
            action={() => this.toggleModalEditQuantity(item.index)} />
        )}
        dataShippingAddress={dataShippingAddress}
        renderShippingAddress={({ item }) => (
          <ShippingAddress
            name={item.name}
            address={item.address}
            province={item.privince}
            city={item.city}
            regency={item.regency}
            district={item.district}
            numberPhone={item.numberPhone}
            action={() => this.toggleModalEditAddress(item.index)} />
        )}

        singleDataShippingAddress={this.state.singleDataShippingAddress}
        onChangeName={(name) => this.setState({ name })}
        onChangeAddress={(address) => this.setState({ address })}
        onChangeProvince={(province) => this.setState({ province })}
        onChangeCity={(city) => this.setState({ city })}
        onChangeRegency={(regency) => this.setState({ regency })}
        onChangeDistrict={(district) => this.setState({ district })}
        onChangeNumberPhone={(numberPhone) => this.setState({ numberPhone })}
        handleSaveDataShippingAddress={() => this.handleSaveDataShippingAddress(this.state.singleDataShippingAddress.index)}

        singleDataQuantity={this.state.singleDataQuantity}
        onUpdateDataQuantity={() => this.onUpdateDataQuantity()}

        navigateToPayments={() => this.props.navigation.navigate("PaymentsContainer")}
        navigateToSearch={() => this.props.navigation.navigate("SearchContainer")}
        goback={() => this.props.navigation.goBack()}

        toggleModalEditQuantity={() => this.toggleModalEditQuantity(this.state.index)}
        modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}
        toggleModalEditAddress={() => this.toggleModalEditAddress(this.state.index)}
        modalVisibleEditAddress={this.state.modalVisibleEditAddress}
      />
    );
  }
}