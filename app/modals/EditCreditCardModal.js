import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Textarea } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavbarModal from '../particles/NavbarModal'

const EditCreditCardModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>

    <NavbarModal
      navbarTitle="Edit Credit Card"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
    <Form style={styles.form}>
        <Label style={styles.labels}>Card Number</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.cardNumber ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.cardNumber} placeholderTextColor="#CDCDCD" maxLength={19} keyboardType={'numeric'} onChangeText={props.onChangeCardNumber} value={props.cardNumber}/>
          <Ionicons name={props.cardNumber ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Validation Date</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.validationDate ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="MM/YY" placeholderTextColor="#CDCDCD" maxLength={5} onChangeText={props.onChangeValidationDate} value={props.validationDate} keyboardType={'numeric'}/>
              <Ionicons name={props.validationDate ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>CVV</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.cvv ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="3 digits" placeholderTextColor="#CDCDCD" maxLength={3} onChangeText={props.onChangeCVV} keyboardType={'numeric'}/>
              <Ionicons name={props.cvv ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Country</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.country ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="Your country" placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCountry}/>
              <Ionicons name={props.country ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Postalcode</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.postalCode ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="Postalcode" placeholderTextColor="#CDCDCD" maxLength={6} onChangeText={props.onChangePostalCode} keyboardType={'numeric'}/>
              <Ionicons name={props.postalCode ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
        </View>
        <Label style={styles.labels}>Cardholder Name</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.cardHolderName ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder="Your name" placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCardHolder}/>
          <Ionicons name={props.cardHolderName ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
      </Form>
    </Content>
    {props.cardNumber && props.validationDate && props.cvv && props.country && props.postalCode && props.cardHolderName ? (
      <Button full style={styles.buttonSaveStyle} onPress={props.handleUpdateCreditCard}>
        <Text style={styles.buttonSaveTextStyle}>Update</Text>
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} onPress={props.handleUpdateCreditCard} disabled>
        <Text style={styles.buttonSaveTextStyleDisabled}>Update</Text>
      </Button>
    )}
  </Modal>
)

export default EditCreditCardModal

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
  },
  buttonSaveStyleDisabled: {
    height: 50,
    backgroundColor: '#f6f6f6'
  },
  buttonSaveTextStyleDisabled: {
    color: "#ccc",
    fontSize: 18
  }
})