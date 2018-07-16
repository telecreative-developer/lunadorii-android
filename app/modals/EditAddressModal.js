import React, { Component } from 'react'
import { Modal, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Textarea, View, Spinner } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
const { height, width } = Dimensions.get('window')

const EditAddressModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Edit Address"
      navbarIcon="close"
      actionIcon={props.actionIcon} 
    />
    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.nameValue} value={props.nameValue} onChangeText={props.onChangeName}/>
        </Item>

        <Label style={styles.labels}>Label</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.labelValue} value={props.labelValue} onChangeText={props.onChangeLabel}/>
        </Item>

        <Label style={styles.labels}>Address</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.addressValue} value={props.addressValue} onChangeText={props.onChangeAddress}/>
        </Item>

        <Label style={styles.labels}>Province</Label>
        {props.provinceValue && props.visibleProvincePicker ? (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.dataProvince}
            renderItem={props.renderDataProvince}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}
        <Item regular style={styles.items}>
          <Input placeholder={props.provinceValue} value={props.provinceValue} onChangeText={props.onChangeProvince}/>
        </Item>

        <Label style={styles.labels}>City</Label>
        {props.cityValue && props.visibleCityPicker ? (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.dataCity}
            renderItem={props.renderDataCity}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}
        <Item regular style={styles.items}>
          <Input placeholder={props.cityValue} value={props.cityValue} onChangeText={props.onChangeCity}/> 
        </Item>

        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Number Phone</Label>
            <Item regular style={styles.centeredItems}>
              <Input placeholder={props.numberPhoneValue} value={props.numberPhoneValue.toString()} onChangeText={props.onChangeNumberPhone} keyboardType={'numeric'}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Postalcode</Label>
            <Item regular style={styles.centeredItemsPostalcode}>
              <Input value={props.postalcodeValue.toString()} onChangeText={props.onChangePostalcode} keyboardType={'numeric'}/>
            </Item>
          </View>
        </View>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.handleUpdateAddress} disabled={props.loading} >
    {props.loading ? <Spinner /> :
    <Text style={styles.buttonSaveTextStyle}>Save</Text> }
    </Button>
  </Modal>
)

export default EditAddressModal

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
  centeredItemsPostalcode: {
    width: 140,
    borderRadius: 5,
    height: 40
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
})
