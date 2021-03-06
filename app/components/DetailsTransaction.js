import React, { Component } from 'react'
import { View,Text, StyleSheet, Dimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { Container, Content, Spinner, Button, CheckBox, ListItem, Body, Item } from 'native-base'
import Navbar from '../particles/Navbar'
import moment, { ISO_8601 } from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { responsiveWidth as w } from 'react-native-rescomponent'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const DetailsTransaction = (props) => (

  <Container style={styles.container}>
    <Navbar
      navbarTitle="Details Transaction"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <View>
      { props.transaction_status === "deny" ?
      <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10, backgroundColor: 'rgba(255, 130, 130, 0.75)'}}>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <Entypo name="cross" size={18}/>
          <Text style={{fontSize: 12, justifyContent:'center'}}>}>{I18n.t('detail_transaction_order_failed')}</Text>
        </View>
      </View>:
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#f6f6f6'}}>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <MaterialIcons name="monetization-on" size={18} color={props.status === "Checkout" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "Checkout" ? '#d11e48' : ''}}>Checkout</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={12} style={{marginLeft: 5, marginTop: 10}}/>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <FontAwesome name="handshake-o" size={18} color={props.status === "Accepted_payment" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "Accepted_payment" ? '#d11e48' : ''}}>Deal</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={12} style={{marginLeft: 5, marginTop: 10}}/>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <Feather name="package" size={18} color={props.status === "Packing" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "Packing" ? '#d11e48' : ''}}>Packing</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={12} style={{marginLeft: 5, marginTop: 10}}/>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>      
          <MaterialIcons name="local-shipping" size={18} color={props.status === "Shipping" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "Shipping" ? '#d11e48' : ''}}>Shipping</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={12} style={{marginLeft: 5, marginTop: 10}}/>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <MaterialIcons name="check" size={18} color={props.status === "Delivered" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "Delivered" ? '#d11e48' : ''}}>Delivered</Text>
        </View>
      </View>
      }
    </View>
    {props.stillLoading ? (
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
    ) : (
      <Content>
        <View style={styles.grandWrapper}>

          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18, marginBottom: 5}}>{I18n.t('detail_transaction_on_cart')}</Text>
              <FlatList
                data={props.dataOnCart}
                renderItem={props.renderDataOnCart}
              />
              {props.status === 'Shipping' ? (
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems:'center', padding:10, borderRadius:5, borderColor:"#ccc"}}>
                  <CheckBox checked={props.isSure} style={{backgroundColor:  props.isSure ? "#d11e48" : "#fff", borderColor: '#d11e48', paddingRight:5}} onPress={props.onChangeSure}/>
                  <Text>{I18n.t('detail_transaction_received_sure')}</Text>
                  <Button disabled={!props.isSure} style={{backgroundColor: props.isSure ? "#d11e48" : "#f6f6f6", width: 100, height: 30, alignItems:'center', justifyContent:'center'}} onPress={props.acceptOrder}>
                    <Text style={{color: props.isSure ? "#fff" : "#ccc"}}>{I18n.t('detail_transaction_received_confirm')}</Text>
                  </Button>
                </View>
              ) : (
                <View/>
              )}
            </View>
          </View>

          {props.status === 'Shipping' ? (
            <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
                <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_tracking_code')}</Text>
                <Text style={{color: '#ccc'}}>{props.tracking_code}</Text>
              </View>
            </View>
          ) : (
            <View/>
          )}

          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_transaction_code')}</Text>
              <Text style={{color: '#ccc'}}>{props.billing_code}</Text>
            </View>
          </View>
        
          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_order_status')}</Text>
                {props.renderStatusMessage}
              {/* { props.paid_method === "bank_transfer" ?
                <View>
                  { props.status === 'Checkout' ?
                    <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_waiting_for_payment')}</Text>:
                    <View>
                      { props.status === 'Deal' ? 
                      <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_waiting_for_accepted_payment')}</Text>: 
                        <View>
                          { props.status === 'Packing' ? 
                            <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_packing_your_product')}</Text>:
                            <View>
                              { props.status === 'Shipping' ? 
                                <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_products_in_shipping')}</Text>:
                                <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_your_product_is_delivered')}</Text>
                              }
                            </View>
                          }
                        </View>
                      }
                    </View>
                  }
                </View>:
                <View>
                  <View>
                    { props.status === 'Deal' ? 
                      <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_waiting_for_accepted_payment')}</Text>: 
                        <View>
                          { props.status === 'Packing' ? 
                            <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_packing_your_product')}</Text>:
                            <View>
                              { props.status === 'Shipping' ? 
                                <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_products_in_shipping')}</Text>:
                                <Text style={{color: '#ccc'}}>{I18n.t('detail_transaction_your_product_is_delivered')}</Text>
                              }
                            </View>
                          }
                        </View>
                      }
                    </View>
                </View>
              } */}
            </View>
          </View>

          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_payment_status')}</Text>
              <Text style={{color: '#ccc'}}>{props.midtransResponse.transaction_status}</Text>
            </View>
          </View>

          {props.status === 'Checkout' ? (
            <View>
              <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
                  <Text style={{fontWeight: 'bold',fontSize: 18}}>Virtual Account</Text>
                  <Text style={{color: '#d11e48'}}>{props.va_number}</Text>
                </View>
              </View>
            
              <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
                  <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_expired_payment')}</Text>
                  <Text style={{color: '#d11e48'}}>{moment(props.midtransResponse.transaction_time).add(12, 'hours').format('LLLL')}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
                  <Text style={{fontWeight: 'bold',fontSize: 18}}>Virtual Account</Text>
                  <Text style={{color: '#d11e48', fontSize: 12}}>{I18n.t('detail_transaction_nova')}</Text>
                  <Text style={{color: '#d11e48', fontSize: 12}}>{I18n.t('detail_transaction_youusecc')}</Text>
                </View>
              </View>
            
              <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
                <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
                  <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_expired_payment')}</Text>
                  <Text style={{color: '#d11e48', fontSize: 12}}>{I18n.t('detail_transaction_expay')}</Text>
                  <Text style={{color: '#d11e48', fontSize: 12}}>{I18n.t('detail_transaction_youusecc')}</Text>
                </View>
              </View>
            </View>
          )}
          
          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_shipping_method')}</Text>
              <Text style={{color: '#ccc'}}>{props.delivery_service}</Text>
            </View>
          </View>

          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_shipping_price')}</Text>
              <Text style={{color: '#ccc'}}>Rp. {props.delivery_price}</Text>
            </View>
          </View>

          

          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_total_price')}</Text>
              <Text style={{color: '#ccc'}}>Rp. { String(props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) }</Text>
            </View>
          </View>

          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_payment_method')}</Text>
              <Text style={{color: '#ccc'}}>
                {props.paid_method == 'bank_transfer' ? 
                  <Text>Bank Transfer</Text> :
                  <Text>Credit Card</Text>
                }
              </Text>
            </View>
          </View>
          <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{I18n.t('detail_transaction_address')}</Text>
              <Text style={{color: '#ccc', textAlign: 'justify'}}>
                { props.address }
              </Text>
            </View>
          </View>
        </View>
      </Content>
    )}
    {/* {props.status === 'Checkout' ? 
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
                <Text style={styles.footerButtonTextStyling}> Go to Payment</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>:
      <View/>
    } */}
  </Container>

)

export default DetailsTransaction

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff'
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  grandWrapper:{
    width: '100%',
    height: '100%'
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