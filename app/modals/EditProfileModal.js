import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Form, Button } from 'native-base'
import Navbar from '../particles/Navbar'

const EditProfileModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}
  >
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content style={styles.container}>
      <View>
        <Image source={{uri: 'https://telecreativenow.com/images/team/Rendi.png'}} style={styles.imageFrame}/>
        <View style={styles.takePhotoButton}>
          <TouchableOpacity>
            <Icon name='camera' style={styles.takePhotoButtonIcon}/>
          </TouchableOpacity>
        </View>
      </View>
      <Form style={styles.form}>
        <Label style={styles.labels}>First Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Muhammad Isa" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Last Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Wijaya Kusuma" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Email</Label>
        <Item regular style={styles.items}>
          <Input placeholder="muhammadisawk@gmail.com" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Birth Date</Label>
        <Item regular style={styles.items}>
          <Input placeholder="17/11/1999" placeholderTextColor="#CDCDCD"/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Save</Text>
    </Button>
  </Modal>
)

export default EditProfileModal

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff'
  },
  imageFrame:{
    marginTop: 10,
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    alignSelf: 'center'
  },
  takePhotoButton:{
    backgroundColor: '#bdc3c7',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight:5,
    width: 25,
    height: 20,
    right: 120,
    bottom: 75
  },
  takePhotoButtonIcon:{
    alignSelf: 'center',
    fontSize: 20
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
  buttonSaveStyleEditProfile:{
    height: 50, 
    backgroundColor: '#D50039'
  },
  buttonSaveTextStyleEditProfile:{
    color: '#fff',
    fontSize: 20
  }
})