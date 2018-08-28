import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon, Button, Input, Label, Item, Spinner  } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Navigation from '../particles/Navbar'
import EditQuantityModal from '../modals/EditQuantityModal'
import CreditCardPaymentModal from '../modals/CreditCardPaymentModal'
import WaitingForPaymentModal from '../modals/WaitingForPaymentModal'
import PickDeliverySeriveModal from '../modals/PickDeliveryServiceModal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Validations from '../particles/Validations'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
import PickBankModal from '../modals/PickBankModal'
import ShopingCart from '../assets/images/icon/shopping-cart.png'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const YourCart = (props) => (
  <Container style={styles.Container}>
    <Navigation 
       navbarTitle={I18n.t('your_cart_title')}
       navbarIcon="arrow-back"
       actionIcon={props.goback}
    />
    <CreditCardPaymentModal 
      modalVisible={props.modalVisible}
      total={props.total}
      toggleModal={props.toggleModal}
      totalPrice={props.totalPrice}
    />

    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content" />
    <PickBankModal
      modalVisible={props.selectedMethod === 'bank_transfer' && props.selectedBank === ''}
      bankData={props.bankData}
      bankRender={props.bankRender}
      closePickBankModal={props.closePickBankModal}
    />
    <PickDeliverySeriveModal
      modalVisible={props.modalVisiblePickDeliveryService}
      closeIcon={props.toggleModalPickDeliveryService}
      courierMetode={props.courierMetode}
      selectedCourier={props.selectedCourier}
      courierRender={props.courierRender}
    />
    <EditQuantityModal
      modalVisible={props.modalVisibleEditQuantity}
      actionIcon={props.toggleModalEditQuantity}
      image={props.image}
      product={props.product}
      brand={props.brand}
      quantity={props.quantity}
      price={props.price}
      totalPrice={props.totalPrice}
      addQty={props.addQty}
      minQty={props.minQty}
      onChangeQuantity={props.onChangeQuantity}
      handleEditQtyModal={props.handleEditQtyModal}
      loadingBtn={props.loadingBtn}
    />
    <WaitingForPaymentModal
      countDown={props.countDown}
      modalVisible={props.modalVisibleCheckoutPayment}
      closeModal={props.closeModal}
      selectedBank={props.selectedBank}
      selectedMethod={props.selectedMethod}
      checkout={props.checkout}
      totalPrice={props.totalPrice}
      goHome={props.navigateToHome}
      va_number={props.va_number}
      typeBank={props.typeBank}
      
      isCC={props.isCC}
      paymentGuide1Visible={props.paymentGuide1Visible}
      togglePaymentGuide1Visible={props.togglePaymentGuide1Visible}
      guide={props.guide}
      toggleGuide={props.toggleGuide}

      paymentGuide2Visible={props.paymentGuide2Visible}
      togglePaymentGuide2Visible={props.togglePaymentGuide2Visible}
    />
    
    {props.stillLoading ? (
      <Content contentContainerStyle={{justifyContent: 'center', alignItems:'center', flex: 1}}>
        <View stryle={styles.style}>
          <Spinner color="#d11e48"/>
        </View>
      </Content>
    ) : (
      props.onCartProduct.length > 0 ? (
        <Content>
          <View style={styles.body}>
            <Text style={styles.title}>{I18n.t('cart_product')}</Text>
            <View>
              <FlatList
                data={props.onCartProduct}
                renderItem={props.renderOnCartProduct}
              />
            </View>
            <Button style={styles.btnAdd} onPress={props.navigateToHome}>
              <Icon name="add"/><Text style={styles.txtAdd}>{I18n.t('cart_add_more_product')}</Text>
            </Button>
          </View>
          <View style={{
            borderTopWidth:1,
            borderColor:'#e2e2e2'
          }}>
            <View style={styles.body}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>{I18n.t('cart_payment_method')}</Text>
                <Text>{props.selectedBank}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  data={props.paymentMethod}
                  renderItem={props.renderPaymentMethod}
                />
              </View> 
              {props.selectedMethod === 'credit_card' ? 
              <View style={styles.viewBrand}>
                <Text style={styles.txtLabel}>{I18n.t('cart_your_credit_card')}</Text>
                  <TouchableOpacity onPress={props.goToCC}>
                      {props.renderCC}
                  </TouchableOpacity>
                {props.isCCAvailable ?
                <View>
                  <Label style={{
                    fontSize: 16,
                    fontFamily: 'Avenir Next',
                    fontWeight: 'bold',
                    paddingVertical: 10
                  }}>CVV</Label>
                  <Item regular style={{
                    marginBottom: 10,
                    borderRadius: 5,
                    height: 40,
                    borderColor: props.valueCVV ? '#ccc' : '#c0392b'
                  }}>
                    <Input placeholder="CVV" onChangeText={props.onChangeCVV} value={props.valueCVV} placeholderTextColor="#e2e2e2" maxLength={3} keyboardType={"numeric"}/>
                    <Ionicons name={props.valueCVV ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
                  </Item>
                </View>: null }
              </View>:
              <View/>
              }
            </View>
          </View>
          <View style={styles.border}>
            <View style={styles.body}>
              <Text style={styles.title}>{I18n.t('cart_shipping_address')}</Text>
              <TouchableOpacity onPress={props.goToShipping}>
                {props.renderShipping}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.border1}>
            <View style={styles.body}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.title}>{I18n.t('cart_delivery_service')}</Text>
                <Text style={{
                  fontSize:16,
                  marginBottom:5
                }}>{props.courierName}</Text>
              </View>
              {props.selectedCourier != null ? (
                
                <View style={{borderColor: '#e2e2e2', borderWidth: 1, padding: 10,marginVertical: 10, flexDirection: 'row',justifyContent: 'space-around'}}>
                  <Text style={{fontWeight: 'bold',color: '#000'}}>{props.selectedCourier.service}</Text>
                  <Text>{props.selectedCourier.cost[0].etd} Days</Text>
                  <Text style={{fontWeight: 'bold',color: '#000'}}>Rp. {props.selectedCourier.cost[0].value},-</Text>
                </View>
              ) : (
                <View style={{borderColor: '#e2e2e2', borderWidth: 1, padding: 10,marginVertical: 10, flexDirection: 'column',justifyContent: 'space-around', alignItems: 'center'}}>
                  <Text>{I18n.t('cart_no_delivery_service1')}</Text>
                  <Text>{I18n.t('cart_no_delivery_service2')}</Text>
                </View>
              )}
            </View>
            <View style={{alignItems:'center', paddingBottom: 10}}>
            {console.log(props.isShippingAddress)}
              {props.isShippingAddress != 0 ? 
              <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={props.courierCode}
              renderItem={props.renderCode}
            />: null }
            </View>
          </View>
        </Content>
      ) : (
        <Validations
          showImportedImage={true}
          image={ShopingCart}
          title={I18n.t('empty_cart')}
          message1={I18n.t('empty_cart_description1')}
          message2={I18n.t('empty_cart_description2')}
          buttonText={I18n.t('button_empty_cart')}
          buttonAction={props.navigateToHome}
        />
      )
    )}
    {props.selectedCourier ? (
      <View style={styles.footer}>
        <View style={styles.footerWrapper}>
          <View style={styles.footerInfo}>
            <Text style={styles.footerTotalText}>Total</Text>
            <Text style={styles.footerTotalPriceText}>Rp. {props.totalPrice}</Text>
            <Text style={styles.footerTotalInfo}>Termasuk PPN, jika berlaku.</Text>
          </View>
          <View style={styles.footerButton}>
            <TouchableOpacity onPress={props.toggleCheckoutPayment}>
              <View style={styles.footerButtonStyling}> 
                <FontAwesome name="money" size={20} color="#fff" />
                {props.isCreditcard === 'credit_card' ? 
                  <Text style={styles.footerButtonTextStyling}> Pay Now</Text>:
                  <Text style={styles.footerButtonTextStyling}> Go to Payment</Text>
                }
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : (
      <View/>
    )}
  </Container>
)

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'#fff'
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5
  },
  body:{
    marginHorizontal:10,
    marginTop:10,
    marginBottom: 5,
  },
  body1:{
    marginHorizontal:10,
  },
  border:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#e2e2e2'
  },
  border1:{
    borderTopWidth:0,
    borderColor:'#e2e2e2'
  },
  Card:{
    borderRadius:1,
    borderColor:'#E2E2E2',
    borderWidth:1,
    marginBottom:5
  },
  contentCard:{
    margin:10,
    flexDirection:'row',
    flex:1,
  },
  label:{
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingVertical: 10
  },
  image:{
    width:75,
    height:75,
    marginRight:10
  },
  wrapLeft:{
    flex:1,
  },
  wrapRight:{
    alignItems:'flex-end'
  },
  txtHeader:{
    fontSize:16,
    fontWeight:'bold',
  },
  txtDetail:{
    fontSize:14,
  },
  txtBlank:{
    marginVertical:5
  },
  txtAction:{
    fontSize:14,
    color:'#d11e48',
    marginBottom:5
  },
  txtpcs:{
    fontSize:14,
    fontWeight:'bold'
  },
  btnAdd:{
    marginVertical:10,
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#AEAEAE'
  },
  btnPickDeliveryService:{
    height: 25,
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#d11e48',
    margin:5,
  },
  txtChooseDeliveryService:{
    fontSize:14,
    padding:5,
    color:'#fff',
    fontWeight:'bold'
  },
  txtAdd:{
    padding: 10,
    color:'#fff',
    fontWeight:'bold'
  },
  contentBottom:{
    flexDirection:'row',
    margin:10
  },
  wrapKurir:{
    flex:1
  },
  txtkurir:{
    fontSize:16,
    marginLeft:5
  },
  txtdetilkurir:{
    fontSize:12,
    marginLeft:5
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#f6f6f6',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: 75,
    paddingHorizontal: 5
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerInfo: {
    padding: 5
  },
  footerButton: {
    justifyContent: 'center',
    paddingRight: 15,
    paddingTop: 5
  },
  footerButtonStyling: {
    borderRadius: 5,
    height: convertHeightPercentToDP('7%'),
    width: convertWidthPercentToDP('40%'),
    backgroundColor: '#2ecc71',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10
  },
  footerButtonTextStyling: {
    fontWeight: 'bold',
    color: '#fff'
  },
  footerTotalText: {
    fontSize: 16
  },
  footerTotalPriceText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  footerTotalInfo: {
    fontSize: 16
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    alignItems:'center',
    marginVertical: 5
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingVertical: 10
  },
  touchableGuidePayment1: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
  },
  iconSize: {
    width: 30,
    height: 30
  },
  deliveryServiceLogoStyle: {
    width: 40,
    height: 40
  },
  flexOnly9: {
    marginTop: 5,
    flex: 0.9
  },
  viewPaddingLeft: {
    paddingLeft: 20
  },
  txtLabel: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  flexOnly1: {
    flex: 0.1
  },
  iconDrop: {
    marginTop: 5,
    fontSize: 16,
    paddingRight: 10,
    top: 3
  },
})

export default YourCart