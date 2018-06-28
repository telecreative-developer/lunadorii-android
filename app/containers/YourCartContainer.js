import React, { Component } from 'react'
import YourCart from '../components/YourCart'
import OnCart from '../particles/OnCart'
import ShippingAddress from '../particles/ShippingAddress'

export default class YourCartContainer extends Component {

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

        goback={() => this.props.navigation.goBack()}/>
    );
  }
}