import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
const { height, width } = Dimensions.get('window')

const AddCreditCardModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>

    <NavbarModal
      navbarTitle="Add Credit Card"
      navbarIcon="close"
      actionIcon={props.actionIcon} />

    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Card Number</Label>
        <Item regular style={styles.items}>
          <Input placeholder="**** **** **** 4532" placeholderTextColor="#CDCDCD" maxLength={19} keyboardType={'numeric'} onChangeText={props.onChangeCardNumber} value={props.cardNumber}/>
        </Item>
        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Validation Date</Label>
            <Item regular style={styles.centeredItems}>
              <Input placeholder="MM/YY" placeholderTextColor="#CDCDCD" maxLength={5} onChangeText={props.onChangeValidationDate} value={props.validationDate} keyboardType={'numeric'}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>CVV</Label>
            <Item regular style={styles.centeredItems}>
              <Input placeholder="3 digits" placeholderTextColor="#CDCDCD" maxLength={3} onChangeText={props.onChangeCVV} keyboardType={'numeric'}/>
            </Item>
          </View>
        </View>
        <Label style={styles.labels}>Cardholder Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Your name" placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCardHolder}/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.handleSaveCreditCard}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Modal>
)

export default AddCreditCardModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  form: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexDirectionCol: {
    flexDirection: 'column'
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40
  },
  centeredItems: {
    width: 160,
    borderRadius: 5,
    height: 40
  },
  buttonSaveStyle: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyle: {
    color: '#fff',
    fontSize: 18
  }
})