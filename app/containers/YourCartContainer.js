import React, { Component } from 'react'
import {AsyncStorage, View} from 'react-native'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'
import { connect } from 'react-redux'
import { fetchCartUser } from '../actions/cart'
import { fetchUserShipping } from '../actions/usershipping'

class YourCartContainer extends Component {

  state={
    modalVisibleEditQuantity: false
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchCartUser(data.id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
  }

  toggleModalEditQuantity(){
    this.setState({modalVisibleEditQuantity: !this.state.modalVisibleEditQuantity})
  }

  render() {
    return (
      <YourCart 

        onCartProduct={this.props.cartuser}
        renderOnCartProduct={({item}) => (
          <OnCart 
            title={item.product.length == 20 ? item.product : item.product.slice(0,18) + "..."}
            categories={item.subcategories[0].subcategory}
            quantity={item.qty} 
            price={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
            image={item.thumbnails[0].thumbnail_url}
            actionEdit={() => this.toggleModalEditQuantity()}
            actionRemove={() => alert(item.product)}
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
        toggleModalEditQuantity={() => this.toggleModalEditQuantity()}

        navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
        goback={() => this.props.navigation.goBack()}/>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCartUser: (id, accessToken) => dispatch(fetchCartUser(id, accessToken)),
    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    
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