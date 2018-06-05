import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import Navbar from '../particles/Navbar'

const EditAddressModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <Navbar
      navbarTitle="Edit Address"
      navbarIcon="close"
      actionIcon = {props.actionIcon}/>
    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Your name" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Alamat</Label>
        <Item regular style={styles.itemsTextarea}>
          <Textarea placeholder="Address" placeholderTextColor="#CDCDCD" style={styles.textareaStyle}/>
        </Item>
        <Label style={styles.labels}>Provinsi</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Province" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Kota/Kabupaten</Label>
        <Item regular style={styles.items}>
          <Input placeholder="City" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Kecamatan</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Districts" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Kelurahan</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Districts" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>No Telp</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Your active number phone" placeholderTextColor="#CDCDCD"/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Modal>
)

export default EditAddressModal

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
  itemsTextarea:{
    borderRadius: 5, 
    height: 100
  },
  textareaStyle:{
    height: 100,
    width: 300
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