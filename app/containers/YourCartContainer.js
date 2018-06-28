import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'


import { connect } from 'react-redux'
import { fetchCartUser } from '../actions/cart'

class YourCartContainer extends Component {

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchCartUser(data.id, data.accessToken)
  }

  render() {
    return (
      <YourCart 

        onCartProduct={this.props.cartuser}
        renderOnCartProduct={({item}) => (
          <OnCart title={item.product} categories={item.subcategories[0].subcategory} quantity={item.subtotal} price={item.price} image={item.thumbnails[0].thumbnail_url}/>
        )}

        onCartShippingAddress={[
          {name: 'Muhammad Isa Wijaya Kusuma',numberPhone: '+62 896 4395 1073',address: 'Tangerang Cipondoh Makmur Blok K 10 No.28'},          {name: 'Alfan Hibban Intiyas',numberPhone: '+62 896 4395 1073',address: 'Tangerang Cipondoh Makmur Blok K 10 No.28'}
        ]}
        renderOnCartShippingAddress={({item}) => (
          <ShippingAddress name={item.name} numberPhone={item.numberPhone} address={item.address}/>
        )}

        goback={() => this.props.navigation.goBack()}/>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCartUser: (id, accessToken) => dispatch(fetchCartUser(id, accessToken)),
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    cartuser: state.cartuser,
    sessionPersistance: state.sessionPersistance
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCartContainer)