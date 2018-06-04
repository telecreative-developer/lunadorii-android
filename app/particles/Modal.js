import React from 'react'
import { Modal, View, Text, StyleSheet } from 'react-native'
import { Content, Radio, Button, Item, Input, CheckBox } from 'native-base'
import Navbar from '../particles/Navbar'

export const ModalCategory = (props) => (
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
    <Content style={styles.content}>
      <View style={styles.viewWrap}>
        <View style={styles.flexOnly8}>
          <Text style={styles.txtRadio}>Discussion with Client</Text>
        </View>
        <View style={styles.flexOnly2}>
          <Radio selected={false} style={styles.radio}/>
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend}><Text style={styles.txtBtnSend}>Select Category</Text></Button>
  </Modal>
)

export const ModalChangePassword = (props) => (
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
    <Content style={styles.content}>  
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
    <Button full style={styles.btnSend}><Text style={styles.txtBtnSend}>Change Password</Text></Button>
  </Modal>
)

export const ModalNotification = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
  >
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content>
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Message</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima pesan eksklusif dan info terbaru khusus untuk anda.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>      
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Pesanan dan Logistik</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima info mengenai pesanan dana.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Notifikasi Sistem</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima info terbaru mengenai whislist dan troli belanja anda.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Chat</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima pesan in-app di handphone anda.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend}>
      <Text style={styles.txtBtnSend}>Save</Text>
    </Button>
  </Modal>
)

export const ModalEditQuantity = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
  >
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content>
      <Text>Edit Quantity Modal</Text>
    </Content>
  </Modal>
)

const styles = StyleSheet.create({
  content:{
    marginTop: 20
  },
  viewWrap:{
    flexDirection: 'row', 
    paddingBottom: 10
  },
  flexOnly8:{
    flex: 0.8
  },
  flexOnly2:{
    flex: 0.2
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
    marginBottom: 10
  },
  radio:{
    alignSelf: 'flex-end', 
    paddingRight: 20
  },
  txtRadio:{
    paddingLeft: 20, 
    fontSize: 16
  },
  btnSend:{
    backgroundColor: '#D50039'
  },
  txtBtnSend:{
    color: "#fff", 
    fontSize: 16
  },
  viewNotif:{
    flexDirection: "row",
    justifyContent: 'space-between',
    borderColor: "#fff"
  }
})