import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native'
import { Content, Item, Input, Label, Button, Form, Spinner } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
const { height, width } = Dimensions.get('window')

const EditLocalBankModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Edit Local Bank"
      navbarIcon="close"
      actionIcon={props.actionIcon} 
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Bank Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.bankName} value={props.bankName} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeBankName} />
        </Item>
        {props.bankName && props.visibleBankNamePicker ? (
          <FlatList
            data={props.dataBankName}
            renderItem={props.renderDataBankName}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input value={props.name} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeName} />
        </Item>
        <Label style={styles.labels}>Bill</Label>
        <Item regular style={styles.items}>
          <Input value={props.bill} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeBill} />
        </Item>
        <Label style={styles.labels}>Password</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.password} placeholderTextColor="#CDCDCD" value={props.password} onChangeText={props.onChangePassword} secureTextEntry/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.handleEdit} disabled={props.buttonSave} >
      {props.buttonSave ? <Spinner color="#fff"/> : 
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
      }
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