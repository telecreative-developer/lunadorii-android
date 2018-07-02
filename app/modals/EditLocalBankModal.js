import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions, ScrollView, Picker } from 'react-native'
import { Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
const { height, width } = Dimensions.get('window')
import SmartPicker from 'react-native-smart-picker'

const EditLocalBankModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Add Local Bank"
      navbarIcon="close"
      actionIcon={props.actionIcon} 
    />
    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Bank Name</Label>
        <ScrollView>
          <ScrollView>
            <View style={{flex: 1}}>
              <ScrollView style={styles.container}>
                <SmartPicker
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
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.name} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeName} />
        </Item>
        <Label style={styles.labels}>Bill</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.bill} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeBill} />
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.handleEdit}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Modal>
)

export default EditLocalBankModal

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
    paddingBottom: 10,
    paddingTop: 10
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40
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