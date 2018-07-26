import React, { Component } from 'react'
import { StyleSheet, StatusBar, Dimensions, Text } from 'react-native'
import { Container, Content, View, Button } from 'native-base'
import Navbar from '../particles/Navbar'
import CreditCardPaymentModal from '../modals/CreditCardPaymentModal'
const { height, width } = Dimensions.get('window')

const ScreenTest = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Screen Test"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <CreditCardPaymentModal
      toggleModal={props.toggleVisiblePaymentCCModal}
      modalVisible={props.paymentCCModalVisible}
      total={'100,000'}
    />
    <Content contentContainerStyle={styles.container}>
      <Button full style={{
        marginTop: 20,
        height: 60,
        borderRadius: 10, 
        backgroundColor: '#d11e48'
      }} onPress={props.toggleVisiblePaymentCCModal}>
        <Text style={{
          color: '#fff', 
          fontSize: 18,
          padding: 10
        }}>{props.loginRequiredModalVisible ? 'Hide modal' : 'Show modal'}</Text>
      </Button>
    </Content>
  </Container>
)

export default ScreenTest

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems:'center',
    flex: 1
  }
})