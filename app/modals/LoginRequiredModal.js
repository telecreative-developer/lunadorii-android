import React, { Component } from 'react'
import { Modal, View, StyleSheet, Dimensions, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
import locker from '../assets/images/icon/locker.png'
const { height, width } = Dimensions.get('window')

const LoginRequiredModal = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.modalVisible}
    onRequestClose={props.closeIcon}>
    <View style={{
        marginTop: convertHeightPercentToDP('25%'),
        marginBottom: 100,
        marginHorizontal: 20,
        height: (height - 2000) / 1,
        width: (width - 2000) / 2,
        backgroundColor: '#fff',
        borderColor: '#e2e2e2',
        borderWidth: 1.5,
        borderRadius: 5
      }}>
      <View style={{height: convertHeightPercentToDP('40%'), justifyContent: 'center', alignItems:'center'}}>
        <View>
          <Image source={locker} style={{width: 70, height: 90}}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', padding: 5}}>Login please</Text>
          <Text style={{fontSize: 18}}>You must login to perform</Text>
          <Text style={{fontSize: 18}}>this action</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
        <Button style={{height: 50, width: convertWidthPercentToDP('40%'), borderRadius: 5, backgroundColor: '#d11e48', justifyContent: 'center'}} onPress={props.toggleModal}>
          <Text style={{fontSize: 18, color: '#fff'}}>Cancel</Text>
        </Button>
        <Button style={{height: 50, width: convertWidthPercentToDP('40%'), borderRadius: 5, backgroundColor: '#d11e48', justifyContent: 'center'}} onPress={props.loginAction}>
          <Text style={{fontSize: 18, color: '#fff'}}>Login</Text>
        </Button>
      </View>
    </View>
  </Modal>
)

export default LoginRequiredModal

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