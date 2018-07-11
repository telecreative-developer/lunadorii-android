import React, { Component } from 'react'
import DetailsOrder from '../components/DetailsOrder'
import OrderDetails from '../particles/OrderDetails'

export default class DetailsOrderContainer extends Component{
  render(){
    return(
      <DetailsOrder
        goback={() => this.props.navigation.goBack()}
        dataOnCart={[
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000, status: 'PACKING'},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000, status: 'DELIVERED'},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000, status: 'CHECKOUT'},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000, status: 'PACKING'}
        ]}
        renderDataOnCart={({item}) => (
          <OrderDetails
            image={item.image}
            title={item.title}
            categories={item.categories}
            quantity={item.quantity}
            price={item.price}
            status={item.status}
          />
        )}
      />
    )
  }
}