import React, { Component } from 'react'
import {AsyncStorage, View} from 'react-native'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'
import { connect } from 'react-redux'
import { fetchCartUser, removeCart } from '../actions/cart'
import { fetchUserShipping } from '../actions/usershipping'

class YourCartContainer extends Component {

  constructor(){
    super()
    this.state = {
      modalVisibleEditQuantity: false,
      modalVisibleCheckoutPayment: false,
      id: 0,
      product_id: 0,
      quantity: 0,
      price: 0,
      totalPrice: 0
    }
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchCartUser(data.id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
  }

  toggleCheckoutPayment(){
    this.setState({modalVisibleCheckoutPayment: !this.state.modalVisibleCheckoutPayment})
  }

  closeModal(){
    this.setState({modalVisibleEditQuantity: !this.state.modalVisibleEditQuantity})
  }

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
      qty: this.state.quantity + 1
    })
    await this.setState({
      totalPrice: this.state.price * this.state.quantity
    })
  }

  async minQty(){
    if(this.state.quantity <= 1){

    }else {
      await this.setState({
        qty: this.state.quantity - 1
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
    await this.props.removeCart(data.id, this.state.product_id, data.accessToken)
    await this.props.fetchCartUser(data.id, data.accessToken)
    console.log('deleted product id: ', this.state.product_id)

  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  totalPrice(){
    let totalPrice = 0
    const price = this.props.cartuser.map(data => data.qty * (data.price - (data.price *(data.discount_percentage/100)))).map(data => totalPrice += data)
    // const reducer = (accumulator, currentValue) => accumulator + currentValue
    return totalPrice
  }

  render() {
    {console.log(this.totalPrice())}
    return (
      <YourCart 
        quantity={this.state.quantity}
        price={this.state.price}
        totalPrice={this.totalPrice()}

        onChangeQuantity={(quantity) => this.setState({quantity})}
        addQty={() => this.addQty()}
        minQty={() => this.minQty()}

        onCartProduct={this.props.cartuser}
        renderOnCartProduct={({item}) => (
          <OnCart 
            title={item.product.length == 20 ? item.product : item.product.slice(0,18) + "..."}
            categories={item.subcategories[0].subcategory}
            quantity={item.qty} 
            price={this.formatPrice(item.price)} 
            image={item.thumbnails[0].thumbnail_url}
            actionEdit={() => this.toggleModalEditQuantity(item)}
            actionRemove={() => this.removeCart(item)}
          />
        )}

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
          />
        ) : (
          <View/>
        )}

        modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}
        toggleModalEditQuantity={() => this.toggleModalEditQuantity(this.props.cartuser)}

        modalVisibleCheckoutPayment={this.state.modalVisibleCheckoutPayment}
        toggleCheckoutPayment={() => this.toggleCheckoutPayment()}

        navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
        goback={() => this.props.navigation.goBack()}/>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCartUser: (id, accessToken) => dispatch(fetchCartUser(id, accessToken)),
    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    removeCart: (id, product_id, accessToken) => dispatch(removeCart(id, product_id, accessToken))
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    cartuser: state.cartuser,
    sessionPersistance: state.sessionPersistance,
    usershipping: state.usershipping
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCartContainer)