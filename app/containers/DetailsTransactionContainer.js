import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchSingleProductHistory } from '../actions/product'

import DetailsTransaction from '../components/DetailsTransaction'
import OrderDetails from '../particles/OrderDetails'

class DetailsTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      list_produk:{},
      billing_code:'',
      stillLoading: true
    }
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const dataUser = await JSON.parse(session)
    const data = await this.props.navigation.state.params.data
    await this.props.fetchSingleProductHistory( data.order_id, dataUser.accessToken )
    await this.setState({stillLoading: false})
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  render(){
    console.log(this.props.receiveSingleProductHistory)
    const data = this.props.receiveSingleProductHistory
    return(
      <DetailsTransaction
        goback={() => this.props.navigation.goBack()}
        stillLoading={this.state.stillLoading}
        totalPrice={ data.total == null || data.total === '' ? data.total : this.formatPrice(data.total) }
        address={ data.address }
        status={ data.order_status == null || data.order_status === '' ? data.order_status :this.capitalize(data.order_status) }
        billing_code={ data.billing_code }
        paid_method={ data.paid_method }
        delivery_service={ data.delivery_service }
        delivery_price={ data.delivery_price }
        price={ data.total }
        dataOnCart={ data.list }
        renderDataOnCart={({item}) => (
          <OrderDetails
            image={item.thumbnails[0].thumbnail_url}
            title={item.product <= 17 ? this.capitalize(item.product) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.subcategories[0].stat}
            quantity={item.qty}
            price={ item.price == null || item.price === '' ? item.price : this.formatPrice(item.price)}
            status={item.status}
            action={() => this.props.navigation.navigate('DetailsOrderContainer' , {item, billing_code: this.state.billing_code, status:this.state.status})}
          />
        )}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleProductHistory: ( product_id, accessToken ) => dispatch(fetchSingleProductHistory( product_id, accessToken ))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    receiveSingleProductHistory: state.receiveSingleProductHistory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsTransactionContainer)