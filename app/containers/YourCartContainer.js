import React, { Component } from 'react'
import {AsyncStorage, View, Alert, Text, StyleSheet, TouchableOpacity, Image, NetInfo, ToastAndroid, Platform} from 'react-native'
import YourCart from '../components/YourCart'
import { Toast } from 'native-base'
import OnCart from '../particles/OnCart'
import moment from 'moment'
import ShippingAddress from '../particles/ShippingAddress'
import CreditCardsInCart from '../particles/CreditCardsInCart'
import ImageCreditCard from '../assets/images/icon/credit-card.png'
import ImageBank from '../assets/images/icon/bank.png'
import { connect } from 'react-redux'
import { fetchCartUser, removeCart, editQty } from '../actions/cart'
import { fetchUserCredit } from '../actions/creditCard';
import { fetchUserShipping, updateShipping } from '../actions/usershipping'
import { postCheckout } from '../actions/checkout'
import { fetchCourier } from '../actions/shipping'
import { Radio } from 'native-base';
import I18n from '../i18n'

class YourCartContainer extends Component {

  constructor(){
    super()
    this.state = {
      stillLoading: true,
      modalVisiblePickDeliveryService: false,
      paymentGuide1Visible: false,
      guide: false,
      paymentGuide2Visible: false,
      modalVisibleEditQuantity: false,
      modalVisibleCheckoutPayment: false,
      deliverySeriveVisible: false,
      modalVisibleEditAddress: false,
      modalVisiblePickBank: false,
      deliverySerive: '',
      id: 0,
      product_id: 0,
      quantity: 0,
      price: 0,
      discount_percentage:0,
      cart_id: 0,
      totalPrice: 0,
      code:'',
      loadingBtn: false,
      selectedCourier:null,
      costCourier:0,
      cost:[],
      estDays: "",
      product: "",
      brand: "",
      image: "",
      selectedMethod: "credit_card",
      province_id:0,
      city_id:0,
      detail_address:'',
      selectedBank: '',
      checkout:[],
      countDown: '',
      email:'',
      modalPayCC:false,
      isCCAvailable: false
    }
  }

  async setAddress(){
    const dataUser = this.props.usershipping.filter(shp => shp.address_default)
    const data = dataUser.length && dataUser[0]
    await this.setState({
      province_id:data.province_id,
      city_id:data.city_id,
      detail_address:data.detail_address
    })
  }

  togglePaymentGuide1Visible(){
    this.setState({paymentGuide1Visible: !this.state.paymentGuide1Visible})
  }

  togglePaymentGuide2Visible(){
    this.setState({paymentGuide2Visible: !this.state.paymentGuide2Visible})
  }

  async componentDidMount(){
    await NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({email:data.email})
    await this.props.fetchCartUser(data.id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    const dataUser = await this.props.usershipping.filter(shp => shp.address_default === true)
    const dataShipping = await dataUser.length && dataUser[0]
    const dataCC = await this.props.usercredit.filter(d => d.card_default)
    const CC = await dataCC.length && dataCC[0]
    if(this.props.cartuser.length && dataShipping ){
      await this.getCourier()
      await this.getCreditCard()
    }
    await this.setState({stillLoading: false})
    await this.setAddress()
  }

  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      this.props.navigation.navigate("HomeContainer")
    }
  };

  async getCourier(){
    const dataUser = await this.props.usershipping.filter(shp => shp.address_default === true)
    const data = await dataUser.length && dataUser[0]
    if(this.props.cartuser.length && data ){
      await this.props.fetchCourier(this.totalWeight(),data.province_id)
    }
  }

  async getCreditCard(){
    const session = await AsyncStorage.getItem('session')
    const dataUser = await JSON.parse(session)
    await this.props.fetchUserCredit(dataUser.id, dataUser.accessToken)
    const dataCC = await this.props.usercredit.filter(d => d.card_default)
    const CC = await dataCC.length && dataCC.map( d => ({card_number: d.card_number, mm: d.mm, yyyy:d.yyyy, card_name: d.card_name}))
    if(CC){
      this.setState({isCCAvailable:true})
    }else{
      this.setState({isCCAvailable:false})
    }
  }

  totalWeight(){
    let totalWeight = 0
    const data = this.props.cartuser.map(data=> totalWeight+=data.weight_gram)
    return totalWeight
  }

  toggleCheckoutPayment(){
    this.setState({modalVisibleCheckoutPayment: !this.state.modalVisibleCheckoutPayment})
  }

  closeModalEdit(){
    this.setState({modalVisibleEditQuantity: !this.state.modalVisibleEditQuantity})
  }

  async toggleModalEditQuantity(item){
    await this.closeModalEdit()
    if(this.state.modalVisibleEditQuantity){
      const session = await AsyncStorage.getItem('session')
      const data = await JSON.parse(session)
      await this.setState({
        id: data.id,
        product_id: item.product_id,
        quantity: item.qty,
        price: item.price,
        discount_percentage: item.discount_percentage,
        totalPrice: item.totalPrice,
        cart_id: item.cart_id,
        product: item.product,
        brand: item.brands[0].brand,
        image: item.thumbnails[0].thumbnail_url
      }) 
    }else{
      await this.setState({
        id: 0,
        product_id: 0,
        quantity: 0,
        price: 0,
        totalPrice: 0,
        cart_id: 0,
        product: "",
        brand: "",
        image: ""
      })
    }
  }

  async handleEditQtyModal(){
    this.setState({loadingBtn: true})
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.editQty(data.id, this.state.product_id, this.state.quantity, this.state.cart_id, data.accessToken)
    await this.props.fetchCartUser(data.id, data.accessToken)
    await this.closeModalEdit()
    this.setState({loadingBtn: false})
  }

  async addQty(){
    if(this.state.quantity >= 100){

    }else {
      await this.setState({
        quantity: this.state.quantity + 1
      })
      await this.setState({
        totalPrice: this.state.price * this.state.quantity
      })
    }
  }

  async minQty(){
    if(this.state.quantity <= 1){

    }else {
      await this.setState({
        quantity: this.state.quantity - 1
      })
      await this.setState({
        totalPrice: this.state.price * this.state.quantity
      })
    }
  }

  async removeCart(item){
    this.setState({
      product_id: item.product_id,
    }) 
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await Alert.alert(
      'Delete',
      'Are you sure to Delete ?',
      [
        { text: 'Cancel', onPress: () => {
          Platform.OS === 'ios'
          ?
          Toast.show({
            text: 'Canceled'
          })
          :
          ToastAndroid.showWithGravity("Canceled", ToastAndroid.SHORT, ToastAndroid.CENTER)
        }, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            Platform.OS === 'ios'
            ?
            Toast.show({
              text: 'Removed from cart'
            })
            :
            ToastAndroid.showWithGravity("Removed from cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
            this.fetchData()
          }
        }
      ],
      { cancelable: false }
    )
    await this.validasiCart()
  }

  async fetchData(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.removeCart(data.id, this.state.product_id, data.accessToken)
    await this.props.fetchCartUser(data.id, data.accessToken)
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  totalPrice(){
    let totalPrice = 0
    const cost = this.state.costCourier
    const price = this.props.cartuser.map(data => data.qty * (data.price - (data.price *(data.discount_percentage/100)))).map(data => totalPrice += data + cost)
    return totalPrice
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    return DiscountPrice
  }

  // async btnUpdateShipping(){
  //   const { name, address, province_id, city_id, postalcode, numberPhone, label } = this.state
  //   const session = await AsyncStorage.getItem('session')
  //   const data = await JSON.parse(session)
  //   await this.props.updateShipping(this.state.user_address_id, {name, address, province_id, city_id, postalcode, numberPhone, label}, data.accessToken)
  //   await this.props.fetchUserShipping(data.id, data.accessToken)
  //   await this.toggleModalEditAddress()
  //   await this.setState({
  //     name: '',
  //     address: '',
  //     province: '',
  //     province_id:'',
  //     city_id:'',
  //     city: '',
  //     postalcode: '',
  //     numberPhone: '',
  //     label:'',
  //   })
  //   Alert.alert('Success Add Address', 'Thanks..')
  // }

  // async toggleModalEditAddress(item){
  //   await this.closeModal()
  //   if(this.state.modalVisibleEditAddress){
  //     await this.setState({
  //       user_address_id:item.user_address_id,
  //       name: item.recepient,
  //       address: item.detail_address,
  //       province: item.province,
  //       province_id:item.province_id,
  //       city: item.city,
  //       city_id:item.city_id,
  //       postalcode: item.postal_code,
  //       numberPhone: item.phone,
  //       label:item.label,
  //     })
  //   }else{
  //     await this.setState({
  //       name: '',
  //       address: '',
  //       province: '',
  //       province_id:'',
  //       city: '',
  //       postalcode: '',
  //       numberPhone: '',
  //       label:'',
  //     })
  //   }
  // }

  getCountDown(mdDate){
    const mdTime = moment(mdDate).add(12, 'hours')
    const now = new Date().getTime()
    const distance = mdTime - now
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(distance < 0){
      return 0
    }else{
      // return `${hours} : ${minutes} : ${seconds}`
      const hms =  `${hours}:${minutes}:${seconds}`
      const a = hms.split(':')
      return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
    }
    
  }

  // async deteleShipping(item){
  //   await this.setState({
  //     address_id: item.user_address_id,
  //     address_default: true
  //   })
  //   const session = await AsyncStorage.getItem('session')
  //   const data = await JSON.parse(session)
  //   Alert.alert(
  //     'Delete',
  //     'Are you sure to Delete ?',
  //     [
  //       { text: 'Cancel', onPress: () => {}, style: 'cancel' },
  //       {
  //         text: 'Delete',
  //         onPress: () => this.fetchData(item)
          
  //       }
  //     ],
  //     { cancelable: false }
  //   )
  // }

 async chooseService(code, cost){
   await this.setState({
     modalVisiblePickDeliveryService: !this.state.modalVisiblePickDeliveryService,
     code: code,
     cost: cost
    })
    await console.log('item:', code)
 }

 async chooseCourier(item){
  await this.setState({
     selectedCourier: item,
     costCourier: item.cost[0].value,
     modalVisiblePickDeliveryService: false
   })
 }

 capitalize(string) {
  return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
}

async checkout(){
  this.setState({loadingBtn: true})
  const creditCard = this.props.usercredit.filter(d => d.card_default === true)
  const service = await this.state.code.toUpperCase() + " " + this.state.selectedCourier.service
  const delivery_price = await this.state.selectedCourier.cost[0].value
  const { selectedMethod, province_id, city_id, detail_address, selectedBank, CVV} = await this.state
  const dataProduct = await this.props.cartuser.map(d => ({qty: d.qty, product_id: d.product_id, price: d.price, discount_percentage: d.discount_percentage}))
  const session = await AsyncStorage.getItem('session')
  const data = await JSON.parse(session)
  const { id, first_name, last_name, email} = data
	if(this.state.selectedMethod == 'bank_transfer'){
		payment_detail = {
      bank: selectedBank
    }
	}else{
    const dataCC = creditCard.length && creditCard.map(d => ({card_number: d.card_number, card_exp_month: d.mm.toString(), card_exp_year:d.yyyy.toString(), card_cvv:this.state.CVV.toString() }))
    const detailCC = dataCC.length && dataCC[0]
		payment_detail = detailCC
  }
  if(this.state.selectedMethod == 'bank_transfer'){
    await this.props.postCheckout( {service, delivery_price, selectedMethod, detail_address, id, city_id, province_id, data:dataProduct, user:{first_name, last_name, email}, payment_detail}, data.accessToken)
    await this.toggleCheckoutPayment()
  }else{
    await Alert.alert(
      'Information',
      'Are you sure to Use Credit Card ?',
      [
        { text: 'No', onPress: () => {}, style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => this.checkoutCC()
        }
      ],
      { cancelable: false }
    )
    }
  this.setState({loadingBtn: false})
  }

  async checkoutCC(){
    this.setState({loadingBtn: true})
    const creditCard = this.props.usercredit.filter(d => d.card_default === true)
    const dataCC = creditCard.length && creditCard.map(d => ({card_number: d.card_number, card_exp_month: d.mm.toString(), card_exp_year:d.yyyy.toString(), card_cvv:this.state.CVV.toString() }))
    const detailCC = dataCC.length && dataCC[0]
		payment_detail = detailCC
    const service = await this.state.code.toUpperCase() + " " + this.state.selectedCourier.service
    const delivery_price = await this.state.selectedCourier.cost[0].value
    const { selectedMethod, province_id, city_id, detail_address, CVV} = await this.state
    const dataProduct = await this.props.cartuser.map(d => ({qty: d.qty, product_id: d.product_id, price: d.price, discount_percentage: d.discount_percentage}))
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    const { id, first_name, last_name, email} = data
    await this.props.postCheckout( {service, delivery_price, selectedMethod, detail_address, id, city_id, province_id, data:dataProduct, user:{first_name, last_name, email}, payment_detail}, data.accessToken)        
    if(this.state.selectedMethod === 'credit_card'){
      console.log(this.props.receiveCheckout)
      if(this.props.receiveCheckout.status == 202){
        await Alert.alert('CVV is Invalid')
        await console.log('202')
       }else if( this.props.receiveCheckout.status == 400){
        await Alert.alert('Your Credit Card is Invalid')
        await console.log('400')
       }else{
         await this.setState({modalPayCC:true})
       }
     }
    this.setState({loadingBtn: false})
  }

  setCourier(){
    const service = this.state.selectedCourier[0].service
  }

  renderShipping(){
    const dataUser = this.props.usershipping.filter(shp => shp.address_default)
    const data = dataUser.length && dataUser[0]
    if( data ){
      return (
        // <ShippingAddress 
        //   name={data.recepient}
        //   numberPhone={data.phone}
        //   detail_address={data.detail_address}
        //   address_default={data.address_default}
        // />
        <View style={{
          borderRadius: 1.5,
          borderColor: data.address_default ? '#d11e48' : '#E2E2E2',
          borderWidth: 1,
          marginBottom: data.address_default ? 15 : 5
        }}>
          <View style={styles.contentCard}>
            <View style={styles.wrapLeft}>
              <Text style={styles.txtHeader}>{data.recepient}</Text>
              <Text>{data.phone}</Text>
              <Text>{data.detail_address}</Text>
            </View>
            
          </View>
        </View>
      )
    }else{
      return(
        <View style={{borderColor: '#e2e2e2', borderWidth: 1, padding: 10,marginVertical: 10, flexDirection: 'column',justifyContent: 'space-around', alignItems: 'center'}}>
          <Text>No Shipping Address selected</Text>
          <Text>pick one</Text>
        </View>
      )}
    }

  renderCC(){
    const dataCC = this.props.usercredit.filter(d => d.card_default)
    const CC = dataCC.length && dataCC.map( d => ({card_number: d.card_number, mm: d.mm, yyyy:d.yyyy, card_name: d.card_name}))
    
    if( CC ){
      return(
          <CreditCardsInCart
            cardNumberFormated={ CC[0].card_number }
            cardNumber={ CC[0].card_number }
            mm={ CC[0].mm }
            yyyy={ CC[0].yyyy }
            card_name={ CC[0].card_name }
            />
      )
    }else{
      return(
        <View style={{borderColor: '#e2e2e2', borderWidth: 1, padding: 10,marginVertical: 10, flexDirection: 'column',justifyContent: 'space-around', alignItems: 'center'}}>
          <Text>{I18n.t('cart_no_credit_card1')}</Text>
          <Text>{I18n.t('cart_no_credit_card2')}</Text>
        </View>
      )
    }
  }

  closeModal(){
    this.props.navigation.navigate("HomeContainer")
    this.setState({modalVisibleCheckoutPayment: false})
  }

  async getUser(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    return data
  }

  async ModalPayCC(){
    await this.setState({modalPayCC:false})
    await this.props.navigation.navigate("HomeContainer")
  }
render() {
  const courier = this.props.receiveCourier
  const email = this.state.email
  
  //  <----- FETCH RESPONE MIDTRANS ----->
  const dataCheckout = this.props.receiveCheckout
  const gross_amount = dataCheckout.midtrans_response && dataCheckout.midtrans_response.gross_amount
  const payment_type = dataCheckout.midtrans_response && dataCheckout.midtrans_response.payment_type
  const transaction_status = dataCheckout.midtrans_response && dataCheckout.midtrans_response.transaction_status
  const status_message = dataCheckout.midtrans_response && dataCheckout.midtrans_response.status_message
  const transaction_id = dataCheckout.midtrans_response && dataCheckout.midtrans_response.transaction_id
  const transaction_time = dataCheckout.midtrans_response && dataCheckout.midtrans_response.transaction_time
  const order_id = dataCheckout.midtrans_response && dataCheckout.midtrans_response.order_id
  const checkout = { gross_amount, payment_type, transaction_status, status_message, transaction_id, order_id, transaction_time, email}
  
  // <----- FETCH BANK PERMATA RESPONSE ----->
  const permata_va_number = dataCheckout.midtrans_response && dataCheckout.midtrans_response.permata_va_number
  
  //  <---- FETCH BANK BCA RESPONSE ----->
  const va_numbers = dataCheckout.midtrans_response && dataCheckout.midtrans_response.va_numbers
  const va_bca = va_numbers && va_numbers[0].va_number
  

  return (
    <YourCart 
      navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
      
      // <----- FUNCTION FOR CREDIT CARD ----->
      creditCard={ this.renderCC() }
      onChangeCVV={ (CVV)=> this.setState({CVV})}
      valueCVV={this.state.CVV}
      isCreditcard={this.state.selectedMethod}
      selectedBank={this.state.selectedMethod === 'credit_card' ? '' : this.state.selectedBank}
      isCC={this.state.selectedMethod === 'credit_card'}
      renderCC={ this.renderCC() }
      isCCAvailable={this.state.isCCAvailable}
      goToCC={() => this.props.navigation.navigate("CreditCardContainer", {func: this.getCreditCard.bind(this)}) }

      stillLoading={this.state.stillLoading}
      countDown={this.getCountDown(transaction_time)}
      selectedMethod={this.state.selectedMethod}
      selectedCourier={this.state.selectedCourier}
      selectedServices={this.capitalize(this.state.code)}
      isShippingAddress={this.props.usershipping.filter(shp => shp.address_default === true).length}
      courierCode={courier}
      renderCode={({item}) => (
        <TouchableOpacity style={styles.btnPickDeliveryService} onPress={()=>this.chooseService(item.code, item.costs)}>
          <Text style={styles.txtChooseDeliveryService}>{item.code.toUpperCase()}</Text>
        </TouchableOpacity>
      )}
      courierName={this.state.code === '' || this.state.code === null ? this.state.code : this.state.code.toUpperCase()}
      messageCode={this.props.status}
      bankData={[
        {labelBank: 'BCA', value: 'bca'},
        // {labelBank: 'Mandiri', value: 'mandiri'},
        // {labelBank: 'BNI', value: 'bni'}, status_message: "Payment channel is not activated."
        {labelBank: 'Permata', value: 'permata'},
      ]}
      bankRender={({item}) => (
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1, padding: 5}}>
          <TouchableOpacity style={{margin: 10}} onPress={() => this.setState({selectedBank: item.value})}>
            <Text style={{fontWeight: this.state.selectedBank === item.labelBank ? 'bold' : 'bold'}}>{item.labelBank}</Text>
          </TouchableOpacity>
        </View>
      )}
      
      courierMetode={this.state.cost}
      courierRender={({item}) => (
        <TouchableOpacity onPress={() => this.chooseCourier(item)}>
          <View style={{padding: 10, flexDirection: 'row',justifyContent: 'space-around'}}>
            <Text style={{fontWeight: 'bold',color: '#000'}}>{item.service.toUpperCase()}</Text>
            <Text>{item.cost[0].etd} Days</Text>
            <Text style={{fontWeight: 'bold',color: '#000'}}>Rp. {item.cost[0].value},-</Text>
          </View>
        </TouchableOpacity>
      )}
      modalVisiblePickDeliveryService={this.state.modalVisiblePickDeliveryService}
      toggleModalPickDeliveryService={() => this.setState({modalVisiblePickDeliveryService: !this.state.modalVisiblePickDeliveryService})}
      paymentGuide1Visible={this.state.paymentGuide1Visible}
      togglePaymentGuide1Visible={() => this.togglePaymentGuide1Visible()}
      guide={this.state.guide}
      toggleGuide={() => this.setState({guide: !this.state.guide})}
      paymentGuide2Visible={this.state.paymentGuide2Visible}
      togglePaymentGuide2Visible={() => this.togglePaymentGuide2Visible()}
      quantity={this.state.quantity}
      price={this.discountPrice(this.state.price, this.state.discount_percentage)}
      totalPrice={this.formatPrice(this.totalPrice())}
      onChangeQuantity={(quantity) => this.setState({quantity})}
      addQty={() => this.addQty()}
      minQty={() => this.minQty()}
      handleEditQtyModal={() => this.handleEditQtyModal()}
      loadingBtn={this.state.loadingBtn}
      onCartProduct={this.props.cartuser}
      renderOnCartProduct={({item}) => (
        <OnCart 
          title={item.product.length == 20 ? item.product : item.product.slice(0,18) + "..."}
          categories={item.brands[0].brand}
          quantity={item.qty} 
          price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
          image={item.thumbnails[0].thumbnail_url}
          actionEdit={() => this.toggleModalEditQuantity(item)}
          actionRemove={() => this.removeCart(item)}
        />
      )}

      closePickBankModal={() => alert("Closed")}
      paymentMethod={[
        {methodAlias: 'credit_card'  , label: I18n.t('cart_credit_cart'), image: ImageCreditCard},
        {methodAlias: 'bank_transfer', label: I18n.t('cart_bank_transfer'),  image: ImageBank}
      ]}
      renderPaymentMethod={({item}) => (
        <View style={{borderColor: this.state.selectedMethod === item.methodAlias ? '#d11e48':'#e2e2e2', margin: 5,borderWidth: 1, width: 150}}>
          <TouchableOpacity onPress={() => item.methodAlias === 'bank_transfer' ? this.setState({selectedMethod: item.methodAlias, selectedBank: ''}) : this.setState({selectedMethod: item.methodAlias})} style={{padding: 10, width: 150, flexDirection: 'row', justifyContent:'space-between'}}>
            <Radio selected={this.state.selectedMethod === item.methodAlias} selectedColor={'#d11e48'} onPress={
              () => item.methodAlias === 'bank_transfer' ? this.setState({selectedMethod: item.methodAlias, selectedBank: ''}) : this.setState({selectedMethod: item.methodAlias})
            }/>
            <Image source={item.image} style={{height: 20, width: 20, padding:5}}/>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        </View>
      )}
      renderShipping={this.renderShipping()}
      goToShipping={() => this.props.navigation.navigate("YourShippingAddressContainer", {func: this.getCourier.bind(this)})}
      product={this.state.product}
      brand={this.state.brand}
      image={this.state.image}
      modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}
      toggleModalEditQuantity={() => this.toggleModalEditQuantity(this.props.cartuser)}
      modalVisibleCheckoutPayment={this.state.modalVisibleCheckoutPayment}
      toggleCheckoutPayment={() => this.checkout()}
      deliverySeriveVisible={this.state.deliverySeriveVisible}
      toggleDeliverySerive={() => this.setState({deliverySeriveVisible: !this.state.deliverySeriveVisible})}
      navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
      goback={() => this.props.navigation.goBack()}
      closeModal={() => this.closeModal()}
      typeBank={ dataCheckout.bank }
      checkout={ checkout }
      va_number={ dataCheckout.bank === 'bca' ? va_bca : permata_va_number}
      toggleModal={ () => this.ModalPayCC() }
      modalVisible={ this.state.modalPayCC}
      />
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{
    fetchCartUser: (id, accessToken) => dispatch(fetchCartUser(id, accessToken)),
    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    removeCart: (id, product_id, accessToken) => dispatch(removeCart(id, product_id, accessToken)),
    editQty: (id, product_id, qty, cart_id, accessToken) => dispatch(editQty(id, product_id, qty, cart_id, accessToken)),
    fetchCourier: (weight_gram, province_id) => dispatch(fetchCourier(weight_gram, province_id)),
    postCheckout: ( dataUser, accessToken) => dispatch(postCheckout( dataUser, accessToken)),
    fetchUserCredit: (id, accessToken) => dispatch(fetchUserCredit(id,accessToken)),

  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    cartuser: state.cartuser,
    sessionPersistance: state.sessionPersistance,
    usershipping: state.usershipping,
    receiveCourier: state.receiveCourier,
    receiveCheckout: state.receiveCheckout,
    usercredit: state.usercredit,
    receiveMessage: state.receiveMessage
  }
}

const styles = StyleSheet.create({
  btnPickDeliveryService:{
    height: 40,
    width: 130,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#d11e48',
    margin:5,
  },
  txtChooseDeliveryService:{
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal:  10
  },
  contentCard: {
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  wrapLeft: {
    flex: 1,
  },
  wrapRight: {
    alignItems: 'flex-end'
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtAction: {
    fontSize: 14,
    color: '#d11e48',
    marginBottom: 5
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(YourCartContainer)