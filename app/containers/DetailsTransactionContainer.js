import React, { Component } from 'react'
import DetailsTransaction from '../components/DetailsTransaction'
import OrderDetails from '../particles/OrderDetails'

export default class DetailsTransactionContainer extends Component{
  render(){
    return(
      <DetailsTransaction
        goback={() => this.props.navigation.goBack()}
        dataOnCart={[
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000,},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000,},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000,},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "This is Dummy", categories: "Dummy", quantity: 2, price: 100000,}
        ]}
        renderDataOnCart={({item}) => (
          <OrderDetails
            image={item.image}
            title={item.title}
            categories={item.categories}
            quantity={item.quantity}
            price={item.price}
            status={item.status}
            action={() => this.props.navigation.navigate('DetailsOrderContainer')}
          />
        )}
      />
    )
  }
}