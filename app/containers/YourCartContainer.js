import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'


import { connect } from 'react-redux'
import { fetchCartUser } from '../actions/cart'
import { fetchUserShipping } from '../actions/usershipping'

class YourCartContainer extends Component {

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchCartUser(data.id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
  }

  render() {
    return (
      <YourCart 

        onCartProduct={this.props.cartuser}
        renderOnCartProduct={({item}) => (
          <OnCart title={item.product} categories={item.subcategories[0].subcategory} quantity={item.subtotal} price={item.price} image={item.thumbnails[0].thumbnail_url}/>
        )}

        onCartShippingAddress={this.props.usershipping}
        renderOnCartShippingAddress={({item}) => (
          <ShippingAddress 
          name={item.recepient}
          numberPhone={item.phone}
          detail_address={item.detail_address}/>
        )}

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