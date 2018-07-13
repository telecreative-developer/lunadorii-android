import React, { Component } from 'react'
import { View,Text, StyleSheet, Dimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const { height, width } = Dimensions.get('window')

const DetailsTransaction = (props) => (

  <Container style={styles.container}>
    <Navbar
      navbarTitle="Details Transaction"
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
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Bill Number</Text>
            <Text style={{color: '#ccc'}}>23942103MSC9234</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Status</Text>
            <Text style={{color: '#ccc'}}>Delivered</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18, marginBottom: 5}}>On Cart</Text>
            <FlatList
              data={props.dataOnCart}
              renderItem={props.renderDataOnCart}
            />
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Total Price</Text>
            <Text style={{color: '#ccc'}}>Rp 120,500</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Payment Method</Text>
            <Text style={{color: '#ccc'}}>Transfer</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Address</Text>
            <Text style={{color: '#ccc', textAlign: 'justify'}}>
              Jl.Manggala 3 Perumahan Cipondoh Makmur RT 01 RW 02
              Provinsi Banten Kota Tangerang Kecamatan Cipondoh No. 29
              14250 Nomor telp 089643951073
            </Text>
          </View>
        </View>
      </View>
    </Content>
    <View style={styles.footer}>
      <View style={styles.footerWrapper}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTotalText}>Total</Text>
          <Text style={styles.footerTotalPriceText}>Rp. 2,400,000</Text>
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
    </View>
  </Container>

)

export default DetailsTransaction

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