import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import ShippingAddress from '../particles/ShippingAddress'

const YourShippingAddress = (props) => (
  <Container>
    <Navbar
      navbarTitle="Shipping Address"
      navbarIcon="arrow-back"
      actionIcon={props.goback}/>
    <Content>
      <View style={styles.viewShippingAddress}>
        <Text style={styles.txtShippingAddress}>Your Shipping Address</Text>
        <ShippingAddress
          name="Fuadit Muhammad"
          numberPhone="+62 821 3620 4407"
          address="Jl.Pegangsaan Dua No.20, Apaterment Gading Nias D 9 NU. Kelapa Gading Jakarta Utara"/>
      </View>
      <Button style={styles.btnAddAddress}>
        <Icon name="add"/><Text style={styles.txtAddAddress}>Add Another Address</Text>
      </Button>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  viewShippingAddress:{
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  txtShippingAddress:{
    fontWeight: 'bold', 
    fontSize: 16,
    padding: 10
  },
  btnAddAddress:{
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#AEAEAE',
    margin:5,
    marginBottom:15
  },
  txtAddAddress:{
    fontSize:14,
    paddingRight:10,
    color:'#fff',
    fontWeight:'bold'
  }
})

export default YourShippingAddress