import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { Container, Button, Icon, Content, Radio } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import EditCreditCardModal from '../modals/EditCreditCardModal'
import WaitingForPaymentModal from '../modals/WaitingForPaymentModal'

const Payments = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Payment"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <EditCreditCardModal
      navbarTitle="Edit Credit Card"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditCreditCard}
      actionIcon={props.toggleModalEditCreditCard}
    />
    <WaitingForPaymentModal
      navbarTitle="Waiting for payment"
      navbarIcon="close"
      modalVisible={props.modalVisibleWaitingForPayment}
      actionIcon={props.toggleModalWaitingForPayment}
    />
    <Content style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.textTitle}>Credit Card</Text>
        <Text style={{ fontSize: 16 }}>Please, click credit card if you wanna pay with credit card</Text>
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={props.dataCreditCards}
          renderItem={props.renderCreditCards}
          keyExtractor={(item, index) => JSON.stringify(index)} />
      </View>
      <Button style={styles.btnAdd}>
        <Icon name="add" /><Text style={styles.txtAdd}>Add Other Card</Text>
      </Button>
      <View style={styles.sparator}>
        <View style={styles.textWrapper}>
          <Text style={styles.textTitle}>Bank Transfer</Text>
        </View>
        <View style={styles.radioWrapper}>
          <Radio />
          <View style={styles.radioTextWrapper}>
            <Text style={styles.radioText}>BCA</Text>
          </View>
        </View>
        <View style={styles.radioWrapper}>
          <Radio />
          <View style={styles.radioTextWrapper}>
            <Text style={styles.radioText}>BCA Virtual Account</Text>
          </View>
        </View>
        <View style={styles.radioWrapper}>
          <Radio />
          <View style={styles.radioTextWrapper}>
            <Text style={styles.radioText}>Mandiri</Text>
          </View>
        </View>
        <View style={styles.radioWrapper}>
          <Radio />
          <View style={styles.radioTextWrapper}>
            <Text style={styles.radioText}>BNI</Text>
          </View>
        </View>
      </View>
    </Content>
    <View style={styles.footer}>
      <View style={styles.footerWrapper}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTotalText}>Total</Text>
          <Text style={styles.footerTotalPriceText}>Rp 420,000</Text>
          <Text style={styles.footerTotalInfo}>Termasuk PPN, jika berlaku.</Text>
        </View>
        <View style={styles.footerButton}>
          <TouchableOpacity onPress={props.toggleModalWaitingForPayment}>
            <View style={styles.footerButtonStyling}>
              <FontAwesome name="money" size={20} color="#fff" />
              <Text style={styles.footerButtonTextStyling}>Pay Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  textWrapper: {
    padding: 10
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  radioWrapper: {
    paddingLeft: 20,
    paddingTop: 5,
    flexDirection: 'row',
  },
  radioTextWrapper: {
    padding: 5,
    justifyContent: 'center'
  },
  radioText: {
    fontSize: 16,
    paddingBottom: 10
  },
  sparator: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  btnAdd: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#AEAEAE',
    margin: 5,
    marginBottom: 15
  },
  txtAdd: {
    fontSize: 14,
    paddingRight: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  footer: {
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
    width: 120,
    backgroundColor: '#2ecc71',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 10
  },
  footerButtonTextStyling: {
    fontWeight: 'bold',
    color: '#fff',
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

export default Payments