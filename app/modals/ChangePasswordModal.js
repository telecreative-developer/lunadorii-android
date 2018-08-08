import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Tabs, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavbarModal from '../particles/NavbarModal'

const ChangePasswordModal = (props) => (
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
      <View style={styles.viewInputPassword}>
        <Text style={styles.txtLabel}>Old Password</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.currentPassword ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder='Enter Current Password' secureTextEntry placeholderTextColor="#ccc" onChangeText={props.onChangeCurrentPassword} />
          <Ionicons name={props.currentPassword ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.txtLabel}>New Password</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.newPassword ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder='Enter New Password' secureTextEntry placeholderTextColor="#ccc" onChangeText={props.onChangeNewPassword} />
          <Ionicons name={props.newPassword ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.txtLabel}>Confirm Password</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor:  props.newConfirmPassword ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder='Confirm New Password' secureTextEntry placeholderTextColor="#ccc" onChangeText={props.onChangeConfirmPassword} />
          <Ionicons name={props.newConfirmPassword == props.newPassword && props.newConfirmPassword != '' ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
      </View>
    </Content>
    {props.currentPassword  && props.newPassword && props.newConfirmPassword ? (
      <Button full style={styles.btnSend} onPress={props.handleChangePassword} disabled={props.buttonPassword} >
      
        {props.buttonPassword ? (<Spinner color='#fff' />):(<Text style={styles.txtBtnSend}>Change Password</Text>)}
          
      </Button>
    ) : (
      <Button full style={styles.btnSendDisabled} onPress={props.handleChangePassword} disabled>
      
        <Text style={styles.txtBtnSendDisabled}>Change Password</Text>
          
      </Button>
    )}
  </Modal>
)

export default ChangePasswordModal

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