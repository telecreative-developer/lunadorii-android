import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Button, Radio,  } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Navigation from '../particles/Navbar'
import EditQuantityModal from '../modals/EditQuantityModal'
import WaitingForPaymentModal from '../modals/WaitingForPaymentModal'
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
    <EditQuantityModal
      modalVisible={props.modalVisibleEditQuantity}
      actionIcon={props.toggleModalEditQuantity}
      quantity={props.quantity}
      price={props.price}
      totalPrice={props.totalPrice}
      addQty={props.addQty}
      minQty={props.minQty}
    />
    <WaitingForPaymentModal
      modalVisible={props.modalVisibleCheckoutPayment}
      actionIcon={props.toggleCheckoutPayment}
    />
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
      </View>
      <View style={styles.border}>
        <View style={styles.body}>
         <Text style={styles.title}>Shipping Options</Text>
          <FlatList
            data={props.onCartShippingAddress}
            renderItem={props.renderOnCartShippingAddress}
          />
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
        </View>
      </View>
    </Content>
    <View style={styles.footer}>
      <View style={styles.footerWrapper}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTotalText}>Total</Text>
          <Text style={styles.footerTotalPriceText}>{props.totalPrice}</Text>
          <Text style={styles.footerTotalInfo}>Termasuk PPN, jika berlaku.</Text>
        </View>
        <View style={styles.footerButton}>
          <TouchableOpacity onPress={props.toggleCheckoutPayment}>
            <View style={styles.footerButtonStyling}> 
              <FontAwesome name="money" size={20} color="#fff" />
              <Text style={styles.footerButtonTextStyling}>Go to Payment</Text>
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
  },
  border:{
    borderTopWidth:1,
    borderBottomWidth:1,
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
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#AEAEAE',
    margin:5,
    marginBottom:15
  },
  txtAdd:{
    fontSize:14,
    paddingRight:10,
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
    height: 75
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
    paddingRight: 10,
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
  }
})

export default YourCart