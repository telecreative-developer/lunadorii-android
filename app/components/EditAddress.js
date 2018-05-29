import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import { Container, Content, Input, Item, Label, Form, Button, Textarea } from 'native-base';

const EditAddress = (props) => (
  <Container>
    <Navbar
      navbarTitle="Edit Address"
      navbarIcon="close"/>
    <Content>
      <Form style={{paddingRight: 15,paddingLeft: 15, paddingBottom: 15}}>
        <Label style={styles.labels}>Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Muhammad Isa" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Alamat</Label>
        <Item regular style={styles.itemsTextarea}>
          <Textarea multiline placeholder="Alamat" placeholderTextColor="#CDCDCD" style={styles.textareaStyle}/>
        </Item>
        <Label style={styles.labels}>Provinsi</Label>
        <Item regular style={styles.items}>
          <Input placeholder="DKI Jakarta" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Kota/Kabupaten</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Jakarta Utara" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Kecamatan</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Kelapa Gading" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Kelurahan</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Kelapa Gading" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>No Telp</Label>
        <Item regular style={styles.items}>
          <Input placeholder="0821 6969 6969" placeholderTextColor="#CDCDCD"/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Container>
)

const styles = StyleSheet.create({
  form: {
    paddingRight: 15,
    paddingLeft: 15
  },
  labels: {
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

export default EditAddress