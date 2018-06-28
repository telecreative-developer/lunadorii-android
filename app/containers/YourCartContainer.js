import React, { Component } from 'react'
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

        onCartProduct={[
          {title:"Hello World", categories: "Dummy", quantity: 5, price:'10.000'},
          {title:"Hello World", categories: "Dummy", quantity: 5, price:'10.000'},
          {title:"Hello World", categories: "Dummy", quantity: 5, price:'10.000'},
          {title:"Hello World", categories: "Dummy", quantity: 5, price:'10.000'},
        ]}
        renderOnCartProduct={({item}) => (
          <OnCart title={item.title} categories={item.categories} quantity={item.quantity} price={item.price}/>
        )}

        onCartShippingAddress={[
          {name: 'Muhammad Isa Wijaya Kusuma',numberPhone: '+62 896 4395 1073',address: 'Tangerang Cipondoh Makmur Blok K 10 No.28'},          {name: 'Alfan Hibban Intiyas',numberPhone: '+62 896 4395 1073',address: 'Tangerang Cipondoh Makmur Blok K 10 No.28'}
        ]}
        renderOnCartShippingAddress={({item}) => (
          <ShippingAddress name={item.name} numberPhone={item.numberPhone} address={item.address}/>
        )}

        navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
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