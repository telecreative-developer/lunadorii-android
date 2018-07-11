import React, { Component } from 'react'
import { Modal, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Textarea, View } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
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
        <Label style={styles.labels}>Complete Address</Label>
        <Item regular style={styles.textareaStyle}>
          <Textarea style={{height: 100,width: '100%'}} value={
            "To " + props.nameValue + "\n" +
            props.provinceValue + " " + props.cityValue + " " + props.addressValue + "\n" + 
            props.regencyValue + " " +
            "Postalcode " + props.postalcodeValue + " Number phone " + props.numberPhoneValue
          }/>
        </Item>
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.nameValue} value={props.nameValue} onChangeText={props.onChangeName}/>
        </Item>
        <Label style={styles.labels}>Address</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.addressValue} value={props.addressValue} onChangeText={props.onChangeAddress}/>
        </Item>

        <Label style={styles.labels}>Province</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.provinceValue} value={props.provinceValue} onChangeText={props.onChangeProvince}/>
        </Item>
        <View>
          {props.provinceValue && props.visibleProvincePicker ? (
            <FlatList
              data={props.dataProvince}
              renderItem={props.renderDataProvince}
            />
          ) : (
            <View backgroundColor="transparent"/>
          )}
        </View>

        <Label style={styles.labels}>City</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.cityValue} value={props.cityValue} onChangeText={props.onChangeCity}/> 
        </Item>
        {props.cityValue && props.visibleCityPicker ? (
          <FlatList
            data={props.dataCity}
            renderItem={props.renderDataCity}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}

        <Label style={styles.labels}>Regency</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.regencyValue} value={props.regencyValue} onChangeText={props.onChangeRegency}/> 
        </Item>
        {props.regencyValue && props.visibleRegencyPicker ? (
          <FlatList
            data={props.dataRegency}
            renderItem={props.renderDataRegency}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}

        <Label style={styles.labels}>Postalcode</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.postalcodeValue} value={props.postalcodeValue} onChangeText={props.onChangePostalcode} keyboardType={'numeric'}/>
        </Item>
        <Label style={styles.labels}>Number Phone</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.numberPhoneValue} value={props.numberPhoneValue} onChangeText={props.onChangeNumberPhone} keyboardType={'numeric'}/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.handleSaveAddress}>
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
    paddingVertical: 10
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
    borderRadius: 5,
    height: 100,
    width: '100%'
  },
  buttonSaveStyle: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyle: {
    color: '#fff',
    fontSize: 18
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
})
