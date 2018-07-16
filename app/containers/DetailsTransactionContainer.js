import React, { Component } from 'react'
import DetailsTransaction from '../components/DetailsTransaction'
import OrderDetails from '../particles/OrderDetails'

export default class DetailsTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      list_produk:{},
      billing_code:''
    }
  }

  componentDidMount(){
    const data = this.props.navigation.state.params.data
    this.setState({
      list_produk: data.list,
      billing_code: data.billing_code
    })

  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  render(){
    console.log(this.props.navigation.state.params.data)
    const data = this.props.navigation.state.params.data
    return(
      <DetailsTransaction
        goback={() => this.props.navigation.goBack()}
        totalPrice={ this.formatPrice(data.total) }
        address={ data.address }
        status={ this.capitalize(data.order_status) }
        billing_code={ data.billing_code }
        dataOnCart={this.props.navigation.state.params.data.list}
        renderDataOnCart={({item}) => (
          <OrderDetails
            image={item.thumbnails[0].thumbnail_url}
            title={item.product}
            categories={item.subcategories[0].stat}
            quantity={item.qty}
            price={this.formatPrice(item.subtotal)}
            status={item.status}
            action={() => this.props.navigation.navigate('DetailsOrderContainer' , {item, billing_code: this.state.billing_code})}
          />
        )}
      />
    )
  }
}