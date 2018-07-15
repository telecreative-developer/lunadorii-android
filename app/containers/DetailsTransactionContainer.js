import React, { Component } from 'react'
import DetailsTransaction from '../components/DetailsTransaction'
import OrderDetails from '../particles/OrderDetails'

export default class DetailsTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      list_produk:{},
    }
  }

  componentDidMount(){
    const data = this.props.navigation.state.params.data
    this.setState({list_produk: data.list})

  }
  render(){
    const data = this.props.navigation.state.params.data
    return(
      <DetailsTransaction
        goback={() => this.props.navigation.goBack()}
        totalPrice={ data.total }
        address={ data.address }
        status={ data.order_status }
        billing_code={ data.billing_code }
        dataOnCart={this.props.navigation.state.params.data.list}
        renderDataOnCart={({item}) => (
          <OrderDetails
            image={item.thumbnails[0].thumbnail_url}
            title={item.product}
            categories={item.subcategories[0].stat}
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