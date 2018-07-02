import React, { Component } from 'react'
import { Modal, Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

const SetProvinceModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Select Province"
      navbarIcon="close"
      actionIcon={props.toggleModalSetProvince} />
    <Content style={styles.container}>
      <View style={styles.form}>
        <View style={{padding: 10}}>
          <Text>Banten</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>Banten</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>Banten</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>Banten</Text>
        </View>
      </View>
    </Content>
    <Button full style={styles.buttonOKStyle}>
      <Text style={styles.buttonOKTextStyle}>OK</Text>
    </Button>
  </Modal>
)

export default SetProvinceModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  form: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40
  },
  buttonOKStyle: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonOKTextStyle: {
    color: '#fff',
    fontSize: 18
  }
})