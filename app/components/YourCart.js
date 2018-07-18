import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon, Button, Input, Label, Item, Spinner  } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Navigation from '../particles/Navbar'
import EditQuantityModal from '../modals/EditQuantityModal'
import WaitingForPaymentModal from '../modals/WaitingForPaymentModal'
import PickDeliverySeriveModal from '../modals/PickDeliveryServiceModal'
import Validations from '../particles/Validations'
import { fetchCourier } from '../actions/shipping';
const shippingAddress = require('../assets/images/icon/shipping-address.png')
const tiki = require('../assets/images/icon/tiki.png')
const { height, width } = Dimensions.get('window')

const YourCart = (props) => (
  <Container style={styles.Container}>
    <Navigation 
       navbarTitle="Your Cart"
       navbarIcon="arrow-back"
       actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content" />
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
      modalVisible={props.modalVisibleCheckoutPayment}
      actionIcon={props.toggleCheckoutPayment}
      
      paymentGuide1Visible={props.paymentGuide1Visible}
      togglePaymentGuide1Visible={props.togglePaymentGuide1Visible}
      bcaGuide={props.bcaGuide}
      toggleBcaGuide={props.toggleBcaGuide}

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
      <Content>
        <View style={styles.body}>
          <Text style={styles.title}>Products</Text>
          <View>
            <FlatList
              data={props.onCartProduct}
              renderItem={props.renderOnCartProduct}
            />
          </View>
          <Button style={styles.btnAdd} onPress={props.navigateToHome}>
            <Icon name="add"/><Text style={styles.txtAdd}>Add More Product</Text>
          </Button>
          {/* <TouchableOpacity style={{
             height: 40,
             width: 130,
             borderRadius:5,
             alignItems:'center',
             alignSelf:'center',
             justifyContent:'space-between',
             backgroundColor:'#ccc',
             margin:5,
             flexDirection: 'row',
          }}>
            <Ionicons name="md-add"/>
            <Text style={{
              color: '#fff',
              marginHorizontal:  10
            }}>Add More Product</Text>
          </TouchableOpacity> */}
          
        </View>
        <View style={{
          borderTopWidth:1,
          borderColor:'#e2e2e2'
        }}>
          <View style={styles.body}>
            <Text style={styles.title}>Payment Method</Text>
          </View>
        </View>
        <View style={styles.border}>
          <View style={styles.body}>
            <Text style={styles.title}>Shipping Address</Text>
            <FlatList
              data={props.onCartShippingAddress}
              renderItem={props.rendersOnCartShippingAddress}
            />

            {/* <View>
              <TouchableOpacity style={styles.touchableGuidePayment1} onPress={props.toggleDeliverySerive}>
                <View>
                  <Image source={shippingAddress} style={styles.iconSize} />
                </View>
                <View style={styles.flexOnly9}>
                  <View style={styles.viewPaddingLeft}>
                    <Text style={styles.txtLabel}>Delivery Service</Text>
                  </View>
                </View>
                <View style={styles.flexOnly1}>
                  <FontAwesome name="chevron-down" style={styles.iconDrop} />
                </View>
              </TouchableOpacity>
              {props.deliverySeriveVisible ? (
                <View style={styles.contentBottom}>
                  <Radio/>
                  <View style={styles.wrapKurir}>
                    <Text style={styles.txtkurir}>JNE</Text>
                    <Text style={styles.txtdetilkurir}>Barang akan sampai 2 -3 hari</Text>
                  </View>
                  <Text style={styles.txtpcs}>RP 15,000</Text>
                </View>

                <View style={styles.contentBottom}>
                  <Radio/>
                  <View style={styles.wrapKurir}>
                    <Text style={styles.txtkurir}>YES</Text>
                    <Text style={styles.txtdetilkurir}>Barang akan sampai 1 hari</Text>
                  </View>
                  <Text style={styles.txtpcs}>RP 15,000</Text>
                </View>

                <View style={styles.contentBottom}>
                  <Radio/>
                  <View style={styles.wrapKurir}>
                    <Text style={styles.txtkurir}>Express</Text>
                    <Text style={styles.txtdetilkurir}>Barang akan sampai 2 -3 hari</Text>
                  </View>
                  <Text style={styles.txtpcs}>RP 15,000</Text>
                </View> 
              ) : (
                <View/>
              )}
            </View> */}
          </View>
        </View>
        <View style={styles.border1}>
          <View style={styles.body}>
            <Text style={styles.title}>Delivery Service</Text>
            {console.log(props.selectedCourier)}
            {props.selectedCourier != null ? (
              
              <View style={{borderColor: '#e2e2e2', borderWidth: 1, padding: 10,marginVertical: 10, flexDirection: 'row',justifyContent: 'space-around'}}>
                <Text style={{fontWeight: 'bold',color: '#000'}}>{props.selectedCourier.service}</Text>
                <Text>{props.selectedCourier.cost[0].etd} Days</Text>
                <Text style={{fontWeight: 'bold',color: '#000'}}>Rp. {props.selectedCourier.cost[0].value},-</Text>
              </View>
            ) : (
              <View style={{borderColor: '#e2e2e2', borderWidth: 1, padding: 10,marginVertical: 10, flexDirection: 'column',justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>No delivery service selected</Text>
                <Text>pick one</Text>
              </View>
            )}
          </View>
          <View style={{alignItems:'center', paddingBottom: 10}}>
            {console.log('courier :', props.courierCode)}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={props.courierCode}
              renderItem={props.renderCode}
            />
          </View>
        </View>
        {/* <View style={styles.border1}>
          <View style={styles.body1}>
            <Text style={styles.title}>Delivery Service</Text>
            <View>
              <View>
                <Label style={styles.label}>Service</Label>
                <Item regular style={{width: '100%', borderRadius: 5,height: 40,alignItems:'center'}}>
                  <Input/>
                </Item>
              </View>
              <View style={{flexDirection:'row', justifyContent: 'space-between', paddingVertical: 10}}> 
                <View>
                  <Label style={styles.label}>Class</Label>
                  <Item regular style={{width: 150, borderRadius: 5,height: 40,alignItems:'center'}}>
                    <Input/>
                  </Item>
                </View>
                <View>
                  <Label style={styles.label}>Fare</Label>
                  <Item regular style={{width: 150, borderRadius: 5,height: 40,alignItems:'center'}}>
                    <Input/>
                  </Item>
                </View>
              </View>
            </View>
          </View>
        </View> */}
      </Content>
    )}
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
              <Text style={styles.footerButtonTextStyling}> Go to Payment</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    height: 40,
    width: 130,
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