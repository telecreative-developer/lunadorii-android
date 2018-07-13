import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Button, Radio } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Banks from '../particles/Banks'
const image = require('../assets/images/icon/clock.png')
const bankIcon = require('../assets/images/icon/bank.png')
const atmIcon = require('../assets/images/icon/atm.png')
const deliveryIcon = require('../assets/images/icon/shipped.png')
const emailIcon = require('../assets/images/icon/email.png')

const WaitingForPaymentModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle={props.navbarTitle}
      navbarIcon={"close"}
      actionIcon={props.actionIcon}
    />
    <Content style={styles.container}>
      <View style={styles.paymentInformation1}>
        <Image source={image} style={styles.imageFrame} />
        <Text style={styles.textInfo1}>Waiting for payment</Text>
        <View style={styles.textInfo2Wrapper}>
          <Text style={styles.textInfo2Content}>Nomor pesanan anda </Text><Text style={styles.textInfo2Code}>20437278982220</Text>
        </View>
      </View>
      <View style={styles.paymentInformation2}>
        <View style={styles.paymentInformation2Wrapper}>
          <Text style={styles.paymentInformation2title}>Kode bayar akan berakhir pada</Text>
          <Text style={styles.paymentInformation2timeout}>23 : 52 : 31</Text>
          <Text style={styles.paymentInformation2warning1}>Mohon menyelesaikan pembayaran sebelum</Text>
          <Text style={styles.paymentInformation2warning2}>8:21 PM 27 Mei 2018</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.contentCard}>
            <View style={styles.viewFlex3}>
              <Image source={require('../assets/images/icon/visa.png')} style={styles.image} />
            </View>
            <View style={styles.wrapLeft}>
              <Text style={styles.paymentCardInformationTitle}>Code pembayaran BCA</Text>
              <Text style={styles.paymentCardIformationPaymentCode}>390521106000426</Text>
            </View>
          </View>
          <View style={styles.contentCard2}>
            <Text style={styles.paymentCardInformationTotalLabel}>Total:</Text>
            <Text style={styles.paymentCardInformationGrandTotal}>Rp 420,000</Text>
          </View>
        </View>
        <View style={styles.paymentGuideSparator}>
          <Text style={styles.paymentGuideTitle}>Panduan Pembayaran</Text>
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
          <Banks bcaGuide={props.bcaGuide} toggleBcaGuide={props.toggleBcaGuide}/>
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
      <View style={styles.paymentGuideSparator}>
        <Text style={styles.paymentGuideTitle}>More Information</Text>
      </View>
      <View style={styles.moreInformationItems}>
        <View style={styles.viewFlex3}>
          <Image source={emailIcon} style={styles.iconInformations} />
        </View>
        <View style={styles.wrapLeft}>
          <Text style={styles.paymentCardInformationTitle}>
            Kami telah mengirimkan email konfirmasi ke <Text style={styles.boldFont}>muhammadfuaditrockz@gmail.com</Text> dengan detail pesanan.
          </Text>
        </View>
      </View>
      <View style={styles.moreInformationItems}>
        <View style={styles.viewFlex3}>
          <Image source={deliveryIcon} style={styles.iconInformations} />
        </View>
        <View style={styles.wrapLeft}>
          <Text style={styles.paymentCardInformationTitle}>
            Pesan anda akan dikirimkan pada <Text style={styles.boldFont}>Kamis 31 Mei</Text>.
          </Text>
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend} onPress={props.backToHome}>
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