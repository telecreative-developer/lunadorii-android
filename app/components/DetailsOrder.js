import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { Container, Content, Button } from 'native-base'
import Navbar from '../particles/Navbar'
const { height, width } = Dimensions.get('window')

const DetailsOrder = (props) => (

  <Container style={styles.container}>
    <Navbar
      navbarTitle="Details Order"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.grandWrapper}>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Transaction Code</Text>
            <Text style={{color: '#ccc'}}>TRANSACTION_NUMBER</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Purchase Transaction Number</Text>
            <Text style={{color: '#ccc'}}>PURCHASE_TRANSACTION_NUMBER</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Status</Text>
            <Text style={{color: '#ccc'}}>STATUS</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Payment Successfully Time</Text>
            <Text style={{color: '#ccc'}}>PAYMEN_SUCCESSFULLY_TIME</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Delivery Time</Text>
            <Text style={{color: '#ccc'}}>DELIVERY_TIME</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Receiptment Time</Text>
            <Text style={{color: '#ccc'}}>RECEIPTMENT_TIME</Text>
          </View>
        </View>
      </View>
    </Content>
    <View style={{flexDirection: 'row', justifyContent:'center'}}>
      <Button style={styles.buttonReviewStyleEditProfile}>
        <Text style={styles.buttonReviewTextStyleEditProfile}>Review</Text>
      </Button>
      <Button style={styles.buttonBuyStyleEditProfile}>
        <Text style={styles.buttonBuyTextStyleEditProfile}>Shop Again</Text>
      </Button>
    </View>
  </Container>

)

export default DetailsOrder

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff'
  },
  grandWrapper:{
    width: '100%',
    height: '100%'
  },
  buttonReviewStyleEditProfile: {
    margin: 10,
    height: 50,
    width: 165,
    backgroundColor: '#27ae60',
    borderRadius: 5,
  },
  buttonReviewTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18
  },
  buttonBuyStyleEditProfile: {
    margin: 10,
    height: 50,
    width: 165,
    borderRadius: 5,
    backgroundColor: '#d11e48',
  },
  buttonBuyTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})