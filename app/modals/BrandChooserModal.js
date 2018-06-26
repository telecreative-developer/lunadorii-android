import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Content, Item, Input, Icon, Button } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

const BrandChooserModal = (props) => (
  <Modal
    animationType="none"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <NavbarModal
      navbarTitle="Brands"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <Content style={styles.container}>
      <View style={}>

      </View>
    </Content>
    <Button full style={styles.buttonSelectStyleEditProfile}>
      <Text style={styles.buttonSelectTextStyleEditProfile}>Select</Text>
    </Button>
  </Modal>
)

export default BrandChooserModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  buttonSelectStyleEditProfile: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSelectTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18
  }
})