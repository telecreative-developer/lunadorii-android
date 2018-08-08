import React, { Component } from 'react'
import { Modal, View, StyleSheet, Dimensions, Text, Image } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
import CreditCard from '../assets/images/icon/credit-card.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('window')

const CreditCardPaymentModal = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.modalVisible}>
    <View style={{
        marginTop: convertHeightPercentToDP('25%'),
        marginBottom: 100,
        marginHorizontal: 20,
        height: (height - 2000) / 1,
        width: (width - 2000) / 2,
        backgroundColor: '#fff',
        borderColor: '#e2e2e2',
        borderWidth: 1.5,
        borderRadius: 5
      }}>
      <View style={{height: convertHeightPercentToDP('40%'), justifyContent: 'center', alignItems:'center'}}>
        <View>
          <Ionicons name="ios-checkmark-circle-outline" size={128} color={'#2ecc71'}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', padding: 5}}>Credit Card Payemt</Text>
          <Text style={{fontSize: 18}}>You have pay with Credit Card</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>Total </Text><Text style={{fontWeight:'bold', fontSize: 18}}>Rp. {props.totalPrice}</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
        <Button style={{height: 50, width: '100%', borderRadius: 5, backgroundColor: '#d11e48', justifyContent: 'center'}} onPress={props.toggleModal}>
          <Text style={{fontSize: 18, color: '#fff'}}>Ok</Text>
        </Button>
      </View>
    </View>
  </Modal>
)

export default CreditCardPaymentModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  buttonSelectStyleEditProfile: {
    height: 50, 
    backgroundColor: '#d11e48'
  },
  buttonSelectTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18
  }
})