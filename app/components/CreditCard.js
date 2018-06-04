import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import CreditCards from '../particles/CreditCards'

const CreditCard = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Credit Card"
      navbarIcon="arrow-back"
      actionIcon={props.goback}/>
    <Content style={{padding: 10}}>
      <View style={styles.viewBrand}>
        <Text style={styles.txtLabel}>Your Credit Card</Text>
        <CreditCards
          accountNumber="**** **** **** **** 2238"
          expiredDate="03/23"/>
      </View>
      <Button style={styles.btnAdd}>
        <Icon name="add"/><Text style={styles.txtAdd}>Add Another Card</Text>
      </Button>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  txtLabel:{
    fontWeight: 'bold', 
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 5
  },
  viewBrand:{
    paddingBottom: 5,
    paddingLeft: 5
  },
  btnAdd:{
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#AEAEAE',
    margin:5,
    marginBottom:15
  },
  txtAdd:{
    fontSize:14,
    paddingRight:10,
    color:'#fff',
    fontWeight:'bold'
  }
})

export default CreditCard