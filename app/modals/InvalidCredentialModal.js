import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
const { height, width } = Dimensions.get('window')

const InvalidCredentialModal = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    modalVisible={props.modalVisible}>
    <View style={{
        marginTop: 200,
        marginBottom: 100,
        marginHorizontal: 20,
        height: 250,
        width: 320,
        backgroundColor: '#fff',
        borderColor: '#e2e2e2',
        borderWidth: 1.5,
        borderRadius: 5
      }}>
      <View style={{alignItems: 'center', padding: 5}}>
        <Text>Email address or Password is</Text>
        <Text>Invalid</Text>
      </View>
      <View>
        <View style={{padding: 20}}>
          <Button full style={{borderRadius: 5, backgroundColor: '#d11e48'}} onPress={props.toggleInvalidCredentialModal}>
            <Text style={{color: '#fff'}}>OK</Text>
          </Button>
        </View>
      </View>
    </View>
  </Modal>
)

export default InvalidCredentialModal

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