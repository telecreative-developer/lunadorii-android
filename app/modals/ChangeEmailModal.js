import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Tabs, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavbarModal from '../particles/NavbarModal'

const ChangeEmailModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon={props.actionIcon}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
    {/*  */}
      <View style={styles.viewInputPassword}>
        <Text style={styles.txtLabel}>New Email</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor:  props.newEmail.length == 0 ? '#c0392b' : '#ccc'
        }}>
          <Input placeholder='Enter New Email' placeholderTextColor="#ccc" onChangeText={props.onChangeNewEmail} />
          <Ionicons name={props.newEmail.length == 0 ? 'ios-alert-outline' : '' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.txtLabel}>Confirm Email</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor:  props.confirmEmail ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder='Enter New Email' placeholderTextColor="#ccc" onChangeText={props.onChangeConfirmEmail} />
          <Ionicons name={props.confirmEmail ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
      </View>
    </Content>
    {props.newEmail && props.confirmEmail ? (
      <Button full style={styles.btnSend} onPress={props.handleChangeEmail} disabled={props.buttonEmail} >
        {props.buttonEmail ? (<Spinner color='#fff' />):(<Text style={styles.txtBtnSend}>Change Email</Text>)}
      </Button>
    ) : (
      <Button full style={styles.btnSendDisabled} onPress={props.handleChangeEmail} disabled>
        <Text style={styles.txtBtnSendDisabled}>Change Email</Text>
      </Button>
    )}
  </Modal>
)

export default ChangeEmailModal

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fff'
  },
  viewInputPassword: {
    paddingLeft: 10,
    paddingRight: 10
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  item: {
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
  btnSend: {
    backgroundColor: '#d11e48'
  },
  txtBtnSend: {
    color: "#fff",
    fontSize: 18
  },
  btnSendDisabled: {
    backgroundColor: '#f6f6f6'
  },
  txtBtnSendDisabled: {
    color: "#ccc",
    fontSize: 18
  }
})