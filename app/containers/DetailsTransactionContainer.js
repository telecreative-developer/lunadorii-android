import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchSingleProductRecent } from '../actions/product'

import DetailsTransaction from '../components/DetailsTransaction'
import OrderDetails from '../particles/OrderDetails'

class DetailsTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      list_produk:{},
      billing_code:'',
      stillLoading: true,
      visibleModalPayment:false
    }
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const dataUser = await JSON.parse(session)
    const data = await this.props.navigation.state.params.data
    await this.props.fetchSingleProductRecent( data.order_id, dataUser.accessToken )
    await this.responseBankPermata()
    await this.setState({stillLoading: false})
  }

  responseBankPermata(){
    const midtransResponse = this.props.receiveSingleProductRecent.midtrans_response
    const fraud_status = midtransResponse && midtransResponse.fraud_status
    const gross_amount = midtransResponse && midtransResponse.gross_amount
    const payment_type = midtransResponse && midtransResponse.payment_type
    const permata_va_number = midtransResponse && midtransResponse.permata_va_number
    const transaction_status = midtransResponse && midtransResponse.transaction_status
    const transaction_time = midtransResponse && midtransResponse.transaction_time
    const dataPermata = { fraud_status, gross_amount, payment_type, permata_va_number, transaction_status, transaction_time}
    return dataPermata
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    return DiscountPrice
  }

  render(){
    const BankPermata = this.responseBankPermata()
    console.log('asem',BankPermata)
    const data = this.props.receiveSingleProductRecent
    return(
      <DetailsTransaction
        goback={() => this.props.navigation.goBack()}
        stillLoading={this.state.stillLoading}
        totalPrice={ data.total == null || data.total === '' ? data.total : this.formatPrice(data.total) }
        address={ data.address }
        status={ data.order_status == null || data.order_status === '' ? data.order_status :this.capitalize(data.order_status) }
        billing_code={ data.billing_code }
        paid_method={ data.paid_method }

        // // <----- Modal Payment ----->
        // visibleModalPayment={this.state.visibleModalPayment}
        // modalPayment={() => this.setState({visibleModalPayment:true})}
        // backRecent={() => this.setState({visibleModalPayment:false})}
        transaction_time={ BankPermata.transaction_time }
        permata_va_number={ BankPermata.permata_va_number }
        delivery_service={ data.delivery_service }
        delivery_price={ data.delivery_price == null || data.delivery_price === '' ? data.delivery_price : this.formatPrice(data.delivery_price) }
        price={ data.total }
        dataOnCart={ data.list }
        renderDataOnCart={({item}) => (
          <OrderDetails
            image={item.thumbnails[0].thumbnail_url}
            title={item.product <= 17 ? this.capitalize(item.product) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.subcategories[0].stat}
            quantity={item.qty}
            price={ item.price == null || item.price === '' ? item.price : this.formatPrice(this.discountPrice(item.price, item.discount_percentage))}
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
    fetchSingleProductRecent: ( product_id, accessToken ) => dispatch(fetchSingleProductRecent( product_id, accessToken ))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    receiveSingleProductRecent: state.receiveSingleProductRecent
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsTransactionContainer)