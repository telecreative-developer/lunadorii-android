import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Content, Button } from 'native-base'
import moment from 'moment'
import CountDown from 'react-native-countdown-component';
import NavbarModal from '../particles/NavbarModal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Banks from '../particles/Banks'
const image = require('../assets/images/icon/clock.png')
const bankIcon = require('../assets/images/icon/bank.png')
const atmIcon = require('../assets/images/icon/atm.png')
const deliveryIcon = require('../assets/images/icon/shipped.png')
const emailIcon = require('../assets/images/icon/email.png')
const creditCard = require('../assets/images/icon/cc.png')

const WaitingForPaymentModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.closeModal}>
    <NavbarModal
      navbarTitle={props.navbarTitle}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <View style={styles.paymentInformation1}>
        {props.selectedMethod === 'bank_transfer' ? 
          <View>
            <Image source={image} style={styles.imageFrame} />
            <Text style={styles.textInfo1}>Waiting for payment</Text>
            <View style={styles.textInfo2Wrapper}>
              <Text style={styles.textInfo2Content}>Your order number </Text><Text style={styles.textInfo2Code}>{ props.checkout.order_id }</Text>
            </View>
          </View>:
          <View/>
        }
      </View>
      <View style={styles.paymentInformation2}>
        <View style={styles.paymentInformation2Wrapper}>
          <View style={{paddingTop: 10}}>
            {
            props.selectedMethod === 'credit_card' ? 
              <View>
                <Text style={{fontSize: 24}}>Thank You</Text>
              </View>
            :
            <View>
              <Text style={styles.paymentInformation2title}>Payment code will end in</Text>
              <CountDown
                until={props.countDown}
                onFinish={() => alert('finished')}
                onPress={() => alert('hello')}
                size={20}
                digitBgColor={'#f6f6f6'}
                timeToShow={['H','M','S']}
              />
            </View>
            }
          </View>
          {props.selectedMethod === 'bank_transfer' ? 
            <View>
              <Text style={styles.paymentInformation2warning1}>Please pay your bill before</Text>
              <Text style={styles.paymentInformation2warning2}>{new Date(props.checkout.transaction_time).getTime()}</Text>
            </View>:
            <View/>
          }
        </View>
        <View style={styles.Card}>
          <View style={styles.contentCard}>
            <View style={styles.viewFlex3}>
              <Image source={require('../assets/images/icon/visa.png')} style={styles.image} />
            </View>
            <View style={styles.wrapLeft}>
              <Text style={styles.paymentCardInformationTitle}>Payment code {props.checkout.permata_va_number} </Text>
              <Text style={styles.paymentCardIformationPaymentCode}>Paid Method 
                {props.checkout.payment_type == 'bank_transfer' ? 
                  <Text> Bank Transfer</Text> :
                  <Text> Credit Card</Text>
                }
              </Text>
              {/* {props.checkout.bank ? 
              <Text>Bank : </Text>:
              <Text></Text>
              } */}
            </View>
          </View>
          <View style={styles.contentCard2}>
            <Text style={styles.paymentCardInformationTotalLabel}>Total:</Text>
            <Text style={styles.paymentCardInformationGrandTotal}>Rp {props.checkout.gross_amount }</Text>
          </View>
        </View>
        {props.isCC ? (
          <View style={{padding: 10}}>
            
              <Text style={{
                color: '#e2e2e2', 
                fontSize: 18 
              }}>Pay With Credit Card SUCCESS</Text>
          </View>
        ) : (
          <View/>
        )}
        {props.isCC ? (
          <View/>
        ) : (
          <View>
            <View style={styles.paymentGuideSparator}>
              <Text style={styles.paymentGuideTitle}>Payment Guide</Text>
            </View>
            <TouchableOpacity style={styles.touchableGuidePayment1} onPress={props.togglePaymentGuide1Visible}>
              <View style={styles.paddingLeft20}>
                <Image source={atmIcon} style={styles.iconSize} />
              </View>
              <View style={styles.flexOnly9}>
                <View style={styles.viewPaddingLeft}>
                  <Text style={styles.txtLabel}>ATM</Text>
                </View>
              </View>
              <View style={styles.flexOnly1}>
                <FontAwesome name="chevron-down" style={styles.iconDrop} />
              </View>
            </TouchableOpacity>
            {props.paymentGuide1Visible ? (
              <Banks guide={props.guide} toggleGuide={props.toggleGuide} bankName={props.selectedBank}/>
            ) : (
              <View/>
            )}
            <TouchableOpacity style={styles.touchableGuidePayment1} onPress={props.togglePaymentGuide2Visible}>
              <View style={styles.paddingLeft20}>
                <Image source={bankIcon} style={styles.iconSize} />
              </View>
              <View style={styles.flexOnly9}>
                <View style={styles.viewPaddingLeft}>
                  <Text style={styles.txtLabel}>Internet Banking (App & Web)</Text>
                </View>
              </View>
              <View style={styles.flexOnly1}>
                <FontAwesome name="chevron-down" style={styles.iconDrop} />
              </View>
            </TouchableOpacity>
            {props.paymentGuide2Visible ? (
              <Banks/>
            ) : (
              <View/>
            )}
          </View>
        )}
      </View>
      <View style={styles.paymentGuideSparator}>
        <Text style={styles.paymentGuideTitle}>More Information</Text>
      </View>
      <View style={styles.moreInformationItems}>
        <View style={styles.viewFlex3}>
          <Image source={emailIcon} style={styles.iconInformations} />
        </View>
        <View style={styles.wrapLeft}>
          <Text style={styles.paymentCardInformationTitle}>
            We have sent email information to <Text style={styles.boldFont}>{props.checkout.email}</Text> with detail orders.
          </Text>
        </View>
      </View>
      <View style={styles.moreInformationItems}>
        <View style={styles.viewFlex3}>
          <Image source={deliveryIcon} style={styles.iconInformations} />
        </View>
        <View style={styles.wrapLeft}>
          <Text style={styles.paymentCardInformationTitle}>
            Your orders will send at <Text style={styles.boldFont}>Tuesday 31 May</Text>.
          </Text>
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend} onPress={props.goHome}>
      <Text style={styles.txtBtnSend}>Back to Home</Text>
    </Button>
  </Modal>
)

export default WaitingForPaymentModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    marginBottom: 20
  },
  grandWrapper:{
    width: '100%',
    height: '100%'
  },
  Card: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 1,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    marginBottom: 5
  },
  contentCard: {
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  contentCard2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexOnly9: {
    marginTop: 5,
    flex: 0.9
  },
  iconSize: {
    width: 30,
    height: 30
  },
  flexOnly1: {
    flex: 0.1
  },
  viewPaddingLeft: {
    paddingLeft: 20
  },
  boldFont: {
    fontWeight: 'bold'
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  viewFlex3: {
    flex: 0.3
  },
  paddingLeft20: {
    paddingLeft: 20
  },
  wrapLeft: {
    marginTop: 5,
    flex: 1,
  },
  iconDrop: {
    marginTop: 5,
    fontSize: 16,
    paddingRight: 10,
    top: 3
  },
  iconInformations: {
    width: 30,
    height: 30,
    margin: 10
  },
  touchableGuidePayment1: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    paddingTop: 15,
    paddingBottom: 15
  },
  moreInformationItems: {
    margin: 5,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    marginLeft: 5,
    width: 50,
    height: 50
  },
  textInfo1: {
    paddingTop: 10,
    fontSize: 20,
    color: '#F7009A'
  },
  textInfo2Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 30
  },
  textInfo2Content: {
    paddingTop: 10,
    fontSize: 16
  },
  textInfo2Code: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  paymentInformation1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  paymentInformation2: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  paymentInformation2Wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  paymentInformation2title: {
    paddingTop: 20,
    fontSize: 16
  },
  paymentInformation2timeout: {
    paddingTop: 10,
    fontSize: 32
  },
  paymentInformation2warning1: {
    paddingTop: 20,
    fontSize: 16
  },
  paymentInformation2warning2: {
    paddingBottom: 20,
    fontSize: 16
  },
  paymentCardInformationTitle: {
    fontSize: 16
  },
  paymentCardIformationPaymentCode: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  paymentCardInformationTotalLabel: {
    margin: 15,
    fontSize: 16
  },
  paymentCardInformationGrandTotal: {
    margin: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },
  paymentGuideSparator: {
    margin: 10
  },
  paymentGuideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  imageFrame: {
    marginTop: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  btnSend: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  txtBtnSend: {
    color: "#fff",
    fontSize: 18
  },
})