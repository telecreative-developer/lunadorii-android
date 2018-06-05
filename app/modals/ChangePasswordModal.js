import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button } from 'native-base'
import Navbar from '../particles/Navbar'

const ChangePasswordModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content style={styles.container}>
      <View style={styles.viewInputPassword}>
        <Text style={styles.txtLabel}>Old Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter Current Password' placeholderTextColor="#ccc" />
        </Item>
        <Text style={styles.txtLabel}>New Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Password' placeholderTextColor="#ccc" />
        </Item>
        <Text style={styles.txtLabel}>Confirm Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Password' placeholderTextColor="#ccc" />
        </Item>
      </View>
    </Content>
    <Button full style={styles.btnSend}>
      <Text style={styles.txtBtnSend}>Change Password</Text>
    </Button>
  </Modal>
)

export default ChangePasswordModal

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor: '#fff'
  },
  viewInputPassword:{
    paddingLeft: 20, 
    paddingRight: 20
  },
  txtLabel:{
    fontSize: 16, 
    fontWeight: 'bold', 
    paddingBottom: 10
  },
  item:{
    marginBottom: 10,
    borderRadius: 5
  },
  btnSend:{
    backgroundColor: '#D50039'
  },
  txtBtnSend:{
    color: "#fff", 
    fontSize: 16
  }
})