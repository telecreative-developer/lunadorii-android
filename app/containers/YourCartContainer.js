import React, { Component } from 'react'
import {AsyncStorage, View, Alert} from 'react-native'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'
import { connect } from 'react-redux'
import { fetchCartUser, removeCart } from '../actions/cart'
import { fetchUserShipping, updateShipping } from '../actions/usershipping'
import { fetchCourier } from '../actions/shipping'

class YourCartContainer extends Component {

  constructor(){
    super()
    this.state = {
      paymentGuide1Visible: false,
      bcaGuide: false,
      paymentGuide2Visible: false,
      modalVisibleEditQuantity: false,
      modalVisibleCheckoutPayment: false,
      deliverySeriveVisible: false,
      modalVisibleEditAddress: false,
      deliverySerive: '',
      id: 0,
      product_id: 0,
      quantity: 0,
      price: 0,
      discount_percentage:0,
      totalPrice: 0
    }
  }

  togglePaymentGuide1Visible(){
    this.setState({paymentGuide1Visible: !this.state.paymentGuide1Visible})
  }

  togglePaymentGuide2Visible(){
    this.setState({paymentGuide2Visible: !this.state.paymentGuide2Visible})
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchCartUser(data.id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.getCourier()
  }

  async getCourier(){
    const data = await this.props.usershipping.filter(data => data.address_default === true)
    await this.props.fetchCourier(this.totalWeight(),data[0].province_id)
  }

  totalWeight(){
    let totalWeight = 0
    const data = this.props.cartuser.map(data=> totalWeight+=data.wight_gram)
    return totalWeight
  }

  toggleCheckoutPayment(){
    this.setState({modalVisibleCheckoutPayment: !this.state.modalVisibleCheckoutPayment})
  }

  closeModal(){
    this.setState({modalVisibleEditQuantity: !this.state.modalVisibleEditQuantity})
  }

  // GotoMyShipping(){
    
  // }

  async toggleModalEditQuantity(item){
    await this.closeModal()
    if(this.state.modalVisibleEditQuantity){
      const session = await AsyncStorage.getItem('session')
      const data = await JSON.parse(session)
      await this.setState({
        id: data.id,
        product_id: item.product_id,
        quantity: item.qty,
        price: item.price,
        discount_percentage: item.discount_percentage,
        totalPrice: item.totalPrice
      }) 
    }else{
      await this.setState({
        id: 0,
        product_id: 0,
        quantity: 0,
        price: 0,
        totalPrice: 0
      })
    }
  }

  async addQty(){
    await this.setState({
      quantity: this.state.quantity + 1
    })
    await this.setState({
      totalPrice: this.state.price * this.state.quantity
    })
  }

  async minQty(){
    if(this.state.quantity <= 1){

    }else {
      await this.setState({
        quantity: this.state.quantity - 1
      })
      await this.setState({
        totalPrice: this.state.price * this.state.quantity
      })
    }
  }

  async removeCart(item){
    this.setState({
      product_id: item.product_id,
    }) 
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await Alert.alert(
      'Delete',
      'Are you sure to Delete ?',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => this.fetchData()
          
        }
      ],
      { cancelable: false }
    )
    
  }

  async fetchData(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.removeCart(data.id, this.state.product_id, data.accessToken)
    await this.props.fetchCartUser(data.id, data.accessToken)
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  totalPrice(){
    let totalPrice = 0
    const price = this.props.cartuser.map(data => data.qty * (data.price - (data.price *(data.discount_percentage/100)))).map(data => totalPrice += data)
    return totalPrice
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    return DiscountPrice
  }

  closeModal(){
    this.setState({modalVisibleEditAddress: !this.state.modalVisibleEditAddress})
  }

  async btnUpdateShipping(){
    const { name, address, province_id, city_id, postalcode, numberPhone, label } = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateShipping(this.state.user_address_id, {name, address, province_id, city_id, postalcode, numberPhone, label}, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalEditAddress()
    await this.setState({
      name: '',
      address: '',
      province: '',
      province_id:'',
      city_id:'',
      city: '',
      postalcode: '',
      numberPhone: '',
      label:'',
    })
    Alert.alert('Success Add Address', 'Thanks..')
  }

  async toggleModalEditAddress(item){
    await this.closeModal()
    if(this.state.modalVisibleEditAddress){
      await this.setState({
        user_address_id:item.user_address_id,
        name: item.recepient,
        address: item.detail_address,
        province: item.province,
        province_id:item.province_id,
        city: item.city,
        city_id:item.city_id,
        postalcode: item.postal_code,
        numberPhone: item.phone,
        label:item.label,
      })
    }else{
      await this.setState({
        name: '',
        address: '',
        province: '',
        province_id:'',
        city: '',
        postalcode: '',
        numberPhone: '',
        label:'',
      })
    }
  }

  async deteleShipping(item){
    await this.setState({
      address_id: item.user_address_id,
      address_default: true
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
          onPress: () => this.fetchData(item)
          
        }
      ],
      { cancelable: false }
    )
  }

  render() {
    console.log('kurir :', this.props.receiveCourier)
    return (
      <YourCart 
        paymentGuide1Visible={this.state.paymentGuide1Visible}
        togglePaymentGuide1Visible={() => this.togglePaymentGuide1Visible()}

        bcaGuide={this.state.bcaGuide}
        toggleBcaGuide={() => this.setState({bcaGuide: !this.state.bcaGuide})}

        paymentGuide2Visible={this.state.paymentGuide2Visible}
        togglePaymentGuide2Visible={() => this.togglePaymentGuide2Visible()}

        quantity={this.state.quantity}
        price={this.discountPrice(this.state.price, this.state.discount_percentage)}
        totalPrice={this.formatPrice(this.totalPrice())}

        onChangeQuantity={(quantity) => this.setState({quantity})}
        addQty={() => this.addQty()}
        minQty={() => this.minQty()}

        onCartProduct={this.props.cartuser}
        renderOnCartProduct={({item}) => (
          <OnCart 
            title={item.product.length == 20 ? item.product : item.product.slice(0,18) + "..."}
            categories={item.brands[0].brand}
            quantity={item.qty} 
            price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
            image={item.thumbnails[0].thumbnail_url}
            actionEdit={() => this.toggleModalEditQuantity(item)}
            actionRemove={() => this.removeCart(item)}
          />
        )}
        goToShipping={() => this.props.navigation.navigate("YourShippingAddressContainer")}
        onCartShippingAddress={this.props.usershipping}
        renderOnCartShippingAddress={({item}) => 
        item.address_default ? (
          <ShippingAddress 
            name={item.recepient}
            numberPhone={item.phone}
            detail_address={item.detail_address}
            address_default={item.address_default}
            actionEdit={() => this.toggleModalEditAddress(item)}
            actionSetdefault={() => this.onChangeDefault(item)}
            actionDelete={() => this.deteleShipping(item)}
            goToShipping={() => this.props.navigation.navigate("YourShippingAddressContainer")}
          />
        ) : (
          <View/>
        )}

        modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}
        toggleModalEditQuantity={() => this.toggleModalEditQuantity(this.props.cartuser)}

        modalVisibleCheckoutPayment={this.state.modalVisibleCheckoutPayment}
        toggleCheckoutPayment={() => this.toggleCheckoutPayment()}

        deliverySeriveVisible={this.state.deliverySeriveVisible}
        toggleDeliverySerive={() => this.setState({deliverySeriveVisible: !this.state.deliverySeriveVisible})}

        navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
        goback={() => this.props.navigation.goBack()}/>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCartUser: (id, accessToken) => dispatch(fetchCartUser(id, accessToken)),
    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    removeCart: (id, product_id, accessToken) => dispatch(removeCart(id, product_id, accessToken)),
    fetchCourier: (weight_gram, province_id) => dispatch(fetchCourier(weight_gram, province_id))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    cartuser: state.cartuser,
    sessionPersistance: state.sessionPersistance,
    usershipping: state.usershipping,
    receiveCourier: state.receiveCourier
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCartContainer)