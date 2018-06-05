import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Button, Radio } from 'native-base'
import Navbar from '../particles/Navbar'
const image = require('../assets/images/icon/clock.png')

const WaitingForPaymentModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
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
        <Text style={{ paddingTop: 20, fontSize: 16 }}>Kode bayar akan berakhir pada</Text>
        <Text style={{ paddingTop: 10, fontSize: 32 }}>23 : 52 : 31</Text>
        <Text style={{ paddingTop: 20, fontSize: 16 }}>Mohon menyelesaikan pembayaran sebelum</Text>
        <Text style={{ paddingBottom: 20, fontSize: 16 }}>8:21 PM 27 Mei 2018</Text>
      </View>
      <View>
      </View>
    </Content>
    <Button full style={styles.btnSend}>
      <Text style={styles.txtBtnSend}>Back to Home</Text>
    </Button>
  </Modal>
)

export default WaitingForPaymentModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  imageFrame: {
    marginTop: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  btnSend: {
    backgroundColor: '#D50039'
  },
  txtBtnSend: {
    color: "#fff",
    fontSize: 16
  },
})