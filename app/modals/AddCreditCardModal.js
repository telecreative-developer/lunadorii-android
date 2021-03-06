import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Textarea, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavbarModal from '../particles/NavbarModal'
import I18n from '../i18n'

const regexCC = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
const AddCreditCardModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle={I18n.t('creditcard_modal_title_add')}
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
    <Form style={styles.form}>
        {regexCC.test(props.cardNumber) === true && props.cardNumber !== '' ? 
          <Label style={styles.labels}>{I18n.t('creditcard_modal_card_number')}</Label>:
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Label style={styles.labels}>{I18n.t('creditcard_modal_card_number')}</Label><Label style={styles.labelsInfo}>{I18n.t('creditcard_modal_validation')}</Label>
          </View>
        }
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: regexCC.test(props.cardNumber) === true ? '#ccc' : '#c0392b'
        }}>
          <Input placeholderTextColor="#CDCDCD" maxLength={16} keyboardType={'numeric'} onChangeText={props.onChangeCardNumber} value={props.cardNumber}/>
          <Ionicons name={regexCC.test(props.cardNumber) === true ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('creditcard_modal_month')}</Label>
            <Item regular style={{
              width: 75,
              borderRadius: 5,
              height: 40,
              borderColor: props.mm <= 12 && props.mm !== '' ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="MM" placeholderTextColor="#CDCDCD" maxLength={2} onChangeText={props.onChangemm} value={props.mm.toString()} keyboardType={'numeric'}/>
              <Ionicons name={props.mm <= 12 && props.mm !== '' ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('creditcard_modal_year')}</Label>
            <Item regular style={{
              width: 75,
              borderRadius: 5,
              height: 40,
              borderColor: props.yyyy >= 18 ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="YY" placeholderTextColor="#CDCDCD" maxLength={2} onChangeText={props.onChangeyyyy} value={props.yyyy.toString()} keyboardType={'numeric'}/>
              <Ionicons name={props.yyyy >= 18 ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('creditcard_modal_CVV')}</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.cvv ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder="3 digits" placeholderTextColor="#CDCDCD" maxLength={3} onChangeText={props.onChangeCVV} keyboardType={'numeric'} secureTextEntry/>
              <Ionicons name={props.cvv ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('creditcard_modal_country')}</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.country ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder={I18n.t('creditcard_modal_country_placeholder')} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCountry} value={props.country} />
              <Ionicons name={props.country ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('creditcard_modal_postalcode')}</Label>
            <Item regular style={{
              width: 160,
              borderRadius: 5,
              height: 40,
              borderColor: props.postalCode ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder={I18n.t('creditcard_modal_postalcode_placeholder')} placeholderTextColor="#CDCDCD" maxLength={6} onChangeText={props.onChangePostalCode} keyboardType={'numeric'} value={props.postalCode.toString()} />
              <Ionicons name={props.postalCode ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
        </View>
        <Label style={styles.labels}>{I18n.t('creditcard_modal_cardholdername')}</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.cardHolderName ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={I18n.t('creditcard_modal_cardholdername_placeholder')} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCardHolder} value={props.cardHolderName}/>
          <Ionicons name={props.cardHolderName ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Label style={styles.labels}>{I18n.t('creditcard_modal_password')}</Label><Label style={styles.labelsInfo}>{I18n.t('creditcard_password_validation')}</Label>
        </View>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.password ? '#ccc' : '#c0392b'
        }}>
          <Input placeholderTextColor="#CDCDCD" onChangeText={props.onChangePassword} secureTextEntry/>
          <Ionicons name={props.password ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:10, borderColor:'#3498db', borderWidth:1, borderRadius: 5}}>
          <Text style={{padding:10, textAlign:'center'}}>{I18n.t('creditcard_modal_information')}</Text>
        </View>
      </Form>
    </Content>
    {props.cardNumber && props.mm && props.yyyy && props.cvv && props.country && props.postalCode && props.cardHolderName && props.password && regexCC.test(props.cardNumber) === true ? (
      <Button full style={styles.buttonSaveStyle} onPress={props.handleSaveCreditCard} disabled={props.buttonSave} >
        {props.buttonSave ?<Spinner color="#fff"/>:
        <Text style={styles.buttonSaveTextStyle}>{I18n.t('creditcard_modal_save')}</Text>
        }
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} disabled>
        <Text style={styles.buttonSaveTextStyleDisabled}>{I18n.t('creditcard_modal_save')}</Text>
      </Button>
    )}
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
  labelsInfo: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
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