import React, { Component } from 'react'
import RelatedToCategoryProducts from '../components/RelatedToCategoryProducts'
import Product from '../particles/Product'

export default class RelatedToCategoryProductsContainer extends Component{
  render(){
    return(
      <RelatedToCategoryProducts
        dataProduct={[
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "Hello World", price: 20900, categories: "Komok", star: 4},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "Hello World", price: 20900, categories: "Komok", star: 4},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "Hello World", price: 20900, categories: "Komok", star: 4},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "Hello World", price: 20900, categories: "Komok", star: 4},
          {image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "Hello World", price: 20900, categories: "Komok", star: 4}
        ]}
        renderProduct={({item}) => (
          <Product
            image={item.image}
            title={item.title}
            categories={item.categories}
            price={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            ratings={item.ratings}
          />
        )}
        image={this.props.navigation.state.params.image}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}