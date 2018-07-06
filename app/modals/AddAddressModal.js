import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions, ScrollView, Picker } from 'react-native'
import { Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
import SmartPicker from 'react-native-smart-picker'
const { height, width } = Dimensions.get('window')

const AddAddressModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Add Address"
      navbarIcon="close"
      actionIcon={props.actionIcon} 
    />
    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.name} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeName} />
        </Item>
        <Label style={styles.labels}>Alamat</Label>
        <Item regular style={styles.itemsTextarea}>
          <Textarea placeholder={props.address} placeholderTextColor="#CDCDCD" style={styles.textareaStyle} onChangeText={props.onChangeAddress} />
        </Item>
        <Label style={styles.labels}>Provinsi</Label>
        <ScrollView>
          <ScrollView>
            <View style={{flex: 1}}>
              <ScrollView>
                <SmartPicker
                  arrowColor={"#fff"}
                  selectedValue={props.selectedBank}
                  onValueChange={props.onChangeBankName}>
                  <Picker.Item label='BRI' value='BRI' />
                  <Picker.Item label='BCA' value='BCA' />
                  <Picker.Item label='Mayapada' value='MAYAPADA' />
                  <Picker.Item label='Mandiri' value='MANDIRI' />
                </SmartPicker>
              </ScrollView>
            </View>
          </ScrollView>
        </ScrollView>
        <Label style={styles.labels}>Kota/Kabupaten</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.city} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeCity} />
        </Item>
        <Label style={styles.labels}>Kecamatan</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.regency} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeRegency} />
        </Item>
        {/* <Label style={styles.labels}>Kelurahan</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.district} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeDistrict} />
        </Item> */}
        <Label style={styles.labels}>No Telp</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.numberPhone} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeNumberPhone} keyboardType={'numeric'}/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.handleSaveAddres}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Modal>
)

export default AddAddressModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  form: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingTop: 10
  },
  pickers:{
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 5,
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    alignItems:'center'
  },
  itemsTextarea: {
    borderRadius: 5,
    height: 100
  },
  textareaStyle: {
    height: 100,
    width: 300
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