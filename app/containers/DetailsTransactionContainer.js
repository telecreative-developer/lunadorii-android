import React, { Component } from 'react'
import { AsyncStorage, NetInfo, BackHandler, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchSingleProductRecent, acceptOrder } from '../actions/product'

import DetailsTransaction from '../components/DetailsTransaction'
import OrderDetails from '../particles/OrderDetails'
import I18n from '../i18n'
import { View } from 'native-base';

class DetailsTransactionContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      list_produk:{},
      billing_code:'',
      stillLoading: true,
      visibleModalPayment:false,
      isSure: false,
      orderStatus: ""
    }
  }

  async componentDidMount(){
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const session = await AsyncStorage.getItem('session')
    const dataUser = await JSON.parse(session)
    const data = await this.props.navigation.state.params.data
    await this.props.fetchSingleProductRecent( data.order_id, dataUser.accessToken )
    await this.setState({stillLoading: false})
    let { order_status } = this.props.receiveSingleProductRecent
    await this.setState({orderStatus: order_status})
  }

  componentWillUnmount(){
    this.setState({orderStatus: ""})
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      this.props.navigation.navigate("HomeContainer")
    }
  };

  handleBackPress = () => {
    this.props.navigation.goBack() // works best when the goBack is async
    return true;
  }

  responeMidtrans(){
    const midtransResponse = this.props.receiveSingleProductRecent.midtrans_response
    const fraud_status = midtransResponse && midtransResponse.fraud_status
    const gross_amount = midtransResponse && midtransResponse.gross_amount
    const payment_type = midtransResponse && midtransResponse.payment_type
    const transaction_status = midtransResponse && midtransResponse.transaction_status
    const transaction_time = midtransResponse && midtransResponse.transaction_time
    const dataPermata = { fraud_status, gross_amount, payment_type, permata_va_number, transaction_status, transaction_time}
    return dataPermata
  }

  permata_va_number(){
    const midtransResponse = this.props.receiveSingleProductRecent.midtrans_response
    const va_permata = midtransResponse && midtransResponse.permata_va_number
    return va_permata    
  }

  bca_va_number(){
    const va_numbers = dataCheckout.midtrans_response && dataCheckout.midtrans_response.va_numbers
    const va_bca = va_numbers && va_numbers[0].va_number
    return va_bca   
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

  async handleAcceptOrder(){
    this.setState({stillLoading: true})
    const session = await AsyncStorage.getItem('session')
    const dataUser = await JSON.parse(session)
    const dataTransaction = this.props.receiveSingleProductRecent
    const data = await this.props.navigation.state.params.data
    await this.props.acceptOrder( dataTransaction.billing_code, dataUser.accessToken )
    await this.props.fetchSingleProductRecent( data.order_id, dataUser.accessToken )
    await this.setState({stillLoading: false})
  }

  renderStatusMessage(status) {
    switch(status){
      case "checkout":
        return (
          <Text style={{color: "#ccc"}}>{I18n.t('detail_transaction_waiting_for_payment')}</Text>
        )
        break
      case "accepted_payment":
        return (
          <Text style={{color: "#ccc"}}>{I18n.t('detail_transaction_deal')}</Text>
        )
        break
      case "Packing":
        return (
          <Text style={{color: "#ccc"}}>{I18n.t('detail_transaction_packing_your_product')}</Text>
        )
        break
      case "Shipping":
        return (
          <Text style={{color: "#ccc"}}>{I18n.t('detail_transaction_products_in_shipping')}</Text>
        )
        break
      case "Delivered":
        return (
          <Text style={{color: "#ccc"}}>{I18n.t('detail_transaction_your_product_is_delivered')}</Text>
        )
        break
      default:
        return (
          <Text style={{color: "#ccc"}}>Untracked / Tidak Terlacak</Text>
        )
        break
    }
  }

  render(){
    const data = this.props.receiveSingleProductRecent

      //  <----- FETCH RESPONE MIDTRANS ----->
    const dataCheckout = this.props.receiveSingleProductRecent
    const gross_amount = dataCheckout.midtrans_response && dataCheckout.midtrans_response.gross_amount
    const payment_type = dataCheckout.midtrans_response && dataCheckout.midtrans_response.payment_type
    const transaction_status = dataCheckout.midtrans_response && dataCheckout.midtrans_response.transaction_status
    const status_message = dataCheckout.midtrans_response && dataCheckout.midtrans_response.status_message
    const transaction_id = dataCheckout.midtrans_response && dataCheckout.midtrans_response.transaction_id
    const transaction_time = dataCheckout.midtrans_response && dataCheckout.midtrans_response.transaction_time
    const order_id = dataCheckout.midtrans_response && dataCheckout.midtrans_response.order_id
    const checkout = { gross_amount, payment_type, transaction_status, status_message, transaction_id, order_id, transaction_time}
    
    
    // <----- FETCH BANK PERMATA RESPONSE ----->
    const permata_va_number = dataCheckout.midtrans_response && dataCheckout.midtrans_response.permata_va_number
    
    //  <---- FETCH BANK BCA RESPONSE ----->
    const va_numbers = dataCheckout.midtrans_response && dataCheckout.midtrans_response.va_numbers
    const va_bca = va_numbers && va_numbers[0].va_number

    console.log("THIS IS AMERICA : " ,data)

    return(
      <DetailsTransaction
        isSure={this.state.isSure}
        acceptOrder={() => this.handleAcceptOrder()}
        renderStatusMessage={this.renderStatusMessage(this.state.orderStatus)}
        tracking_code={ data.receipt_number ? data.receipt_number : "Not Yet" }
        onChangeSure={() => this.setState({isSure: !this.state.isSure})}
        goback={() => this.props.navigation.goBack()}
        stillLoading={this.state.stillLoading}
        totalPrice={ data.total == null || data.total === '' ? data.total : this.formatPrice(data.total) }
        address={ data.address }
        status={ this.state.orderStatus == null || this.state.orderStatus === '' ? this.state.orderStatus :this.capitalize(this.state.orderStatus) }
        billing_code={ data.billing_code }
        paid_method={ data.paid_method }

        // // <----- Modal Payment ----->
        // visibleModalPayment={this.state.visibleModalPayment}
        // modalPayment={() => this.setState({visibleModalPayment:true})}
        // backRecent={() => this.setState({visibleModalPayment:false})}

        // <----- Midtrans Response ----->
        va_number={ dataCheckout.bank === 'bca' ? va_bca : permata_va_number }
        midtransResponse={ checkout }

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
            priceDisc={ item.price == null || item.price === '' ? item.price : this.formatPrice(this.discountPrice(item.price, item.discount_percentage))}
            price={ item.price == null || item.price === '' ? item.price : this.formatPrice(item.price)}
            status={item.status}
            action={() => this.props.navigation.navigate('DetailsOrderContainer' , {item, billing_code: this.state.billing_code, status:data.order_status})}
          />
        )}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleProductRecent: ( product_id, accessToken ) => dispatch(fetchSingleProductRecent( product_id, accessToken )),
    acceptOrder: (billing_code, accessToken) => dispatch(acceptOrder(billing_code, accessToken))
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