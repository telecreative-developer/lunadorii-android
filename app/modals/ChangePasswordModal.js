import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Tabs, Spinner } from 'native-base'
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
    <Content style={styles.container}>
      <View style={styles.viewInputPassword}>
        <Text style={styles.txtLabel}>Old Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter Current Password' secureTextEntry placeholderTextColor="#ccc" onChangeText={props.onChangeCurrentPassword} />
        </Item>
        <Text style={styles.txtLabel}>New Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Password' secureTextEntry placeholderTextColor="#ccc" onChangeText={props.onChangeNewPassword} />
        </Item>
        <Text style={styles.txtLabel}>Confirm Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Password' secureTextEntry placeholderTextColor="#ccc" onChangeText={props.onChangeConfirmPassword} />
        </Item>
      </View>
    </Content>
    <Button full style={styles.btnSend} onPress={props.handleChangePassword} disabled={props.buttonPassword} >
      
        {props.buttonPassword ? (<Spinner color='#fff' />):(<Text style={styles.txtBtnSend}>Change Password</Text>)}
      
    </Button>
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
  }
})