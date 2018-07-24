import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Textarea, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavbarModal from '../particles/NavbarModal'

const regexCC = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
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

    <Content style={styles.container}>
    <Form style={styles.form}>
        <Label style={styles.labels}>Card Number</Label>
        {regexCC.test(props.cardNumber) === true && props.cardNumber !== '' ? 
          <Text/>:
          <Text>CC is Not Valid</Text>
        }
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: regexCC.test(props.cardNumber) === true ? '#ccc' : '#c0392b'
        }}>
          <Input placeholderTextColor="#CDCDCD" maxLength={16} keyboardType={'numeric'} onChangeText={props.onChangeCardNumber} value={props.cardNumber}/>
          <Ionicons name={regexCC.test(props.cardNumber) === true ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Month</Label>
            <Item regular style={{
              width: 80,
              borderRadius: 5,
              height: 40,
              borderColor: props.mm <= 12 && props.mm > 0 && props.mm !== '' ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="MM" placeholderTextColor="#CDCDCD" maxLength={2} onChangeText={props.onChangemm} value={props.mm.toString()} keyboardType={'numeric'}/>
              <Ionicons name={props.mm <= 12 && props.mm > 0 && props.mm !== '' ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Year</Label>
            <Item regular style={{
              width: 80,
              borderRadius: 5,
              height: 40,
              borderColor: props.yyyy >= 18 ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="YY" placeholderTextColor="#CDCDCD" maxLength={2} onChangeText={props.onChangeyyyy} value={props.yyyy.toString()} keyboardType={'numeric'}/>
              <Ionicons name={props.yyyy >= 18 ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
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
              <Input placeholder="Your country" placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCountry} value={props.country} />
              <Ionicons name={props.country ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Postal Code</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.postalCode ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="Postal Code" placeholderTextColor="#CDCDCD" maxLength={6} onChangeText={props.onChangePostalCode} keyboardType={'numeric'} value={props.postalCode.toString()} />
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
          <Input placeholder="Your name" placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCardHolder} value={props.cardHolderName}/>
          <Ionicons name={props.cardHolderName ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Label style={styles.labels}>Password</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.password ? '#ccc' : '#c0392b'
        }}>
          <Input placeholderTextColor="#CDCDCD" onChangeText={props.onChangePassword} secureTextEntry/>
          <Ionicons name={props.password ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
      </Form>
    </Content>
    {props.cardNumber && props.mm && props.yyyy && props.cvv && props.country && props.postalCode && props.cardHolderName && props.password && regexCC.test(props.cardNumber) === true ? (
      <Button full style={styles.buttonSaveStyle} onPress={props.handleUpdateCreditCard} disabled={props.buttonSave} >
        {props.buttonSave ? <Spinner />:
        <Text style={styles.buttonSaveTextStyle}>Update</Text>
        }
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} disabled>
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