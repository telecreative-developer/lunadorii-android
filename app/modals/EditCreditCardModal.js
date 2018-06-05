import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import Navbar from '../particles/Navbar'

const EditCreditCardModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>

    <Navbar
      navbarTitle="Edit Credit Card"
      navbarIcon="close"
      actionIcon = {props.actionIcon}/>

    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Card Number</Label>
        <Item regular style={styles.items}>
          <Input placeholder="**** **** **** 4532" placeholderTextColor="#CDCDCD"/>
        </Item>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <Label style={styles.labels}>Validation Date</Label>
            <Item regular style={styles.centeredItems}>
              <Input placeholder="MM/YY" placeholderTextColor="#CDCDCD"/>
            </Item>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Label style={styles.labels}>CVV</Label>
            <Item regular style={styles.centeredItems}>
              <Input placeholder="3 digits" placeholderTextColor="#CDCDCD"/>
            </Item>
          </View>
        </View>
        <Label style={styles.labels}>Cardholder Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Your name" placeholderTextColor="#CDCDCD"/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
      <Text style={styles.buttonSaveTextStyle}>Update</Text>
    </Button>
  </Modal>
)

export default EditCreditCardModal

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  form:{
    paddingRight: 15,
    paddingLeft: 15, 
    paddingBottom: 15
  },
  labels:{
    fontSize: 16, 
    fontFamily: 'Avenir Next',
    fontWeight: 'bold', 
    paddingBottom: 10,
    paddingTop: 10
  },
  items:{
    width: '100%', 
    borderRadius: 5, 
    height: 40
  },
  centeredItems:{
    width: 160,
    borderRadius: 5, 
    height: 40
  },
  buttonSaveStyle:{
    height: 50, 
    backgroundColor: '#D50039'
  },
  buttonSaveTextStyle:{
    color: '#fff',
    fontSize: 20
  }
})