import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'
const { height, width } = Dimensions.get('window')

const Payment = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Payment"
      actionIcon={props.goback}
      navbarIcon="arrow-back"
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.grandWrapper}>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <TouchableOpacity onPress={props.navigateToDebitPayment}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18, color: '#000'}}>Debit</Text>
              <Text>Payment with your bank</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <TouchableOpacity onPress={props.navigateToCreditCard}>
            <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
              <Text style={{fontWeight: 'bold',fontSize: 18, color: '#000'}}>Credit Card</Text>
              <Text>Payment with your Credit Card</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Content>
  </Container>
)

export default Payment

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width
  },
  content: {
    backgroundColor: '#fff'
  },
  grandWrapper:{
    width: '100%',
    height: '100%'
  }
})