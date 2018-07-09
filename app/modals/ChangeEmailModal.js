import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Tabs, Spinner } from 'native-base'
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
    <Content style={styles.container}>
      <View style={styles.viewInputPassword}>
        <Text style={styles.txtLabel}>New Email</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Email' placeholderTextColor="#ccc" onChangeText={props.onChangeNewEmail} />
        </Item>
        <Text style={styles.txtLabel}>Comfirm Email</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Email' placeholderTextColor="#ccc" onChangeText={props.onChangeConfirmEmail} />
        </Item>
      </View>
    </Content>
    <Button full style={styles.btnSend} onPress={props.handleChangeEmail} disabled={props.buttonEmail} >
      {props.buttonEmail ? (<Spinner color='#fff' />):(<Text style={styles.txtBtnSend}>Change Email</Text>)}
    </Button>
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
  }
})