import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Content, Icon, Button, Radio } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

const CategoryModal = (props) => (
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
      <View style={styles.viewWrap}>
        <View style={styles.flexOnly8}>
          <Text style={styles.txtRadio}>Discussion with Client</Text>
        </View>
        <View style={styles.flexOnly2}>
          <Radio selected={false} style={styles.radio} />
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend}>
      <Text style={styles.txtBtnSend}>Select Category</Text>
    </Button>
  </Modal>
)

export default CategoryModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20
  },
  viewWrap: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  flexOnly8: {
    flex: 0.8
  },
  txtRadio: {
    paddingLeft: 20,
    fontSize: 16
  },
  flexOnly2: {
    flex: 0.2
  },
  radio: {
    alignSelf: 'flex-end',
    paddingRight: 20
  },
  btnSend: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  txtBtnSend: {
    color: "#fff",
    fontSize: 18
  },
})