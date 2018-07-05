import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Spinner } from 'native-base'
const { height, width } = Dimensions.get('window')

const LoadingModal = (props) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={props.modalVisible}>
    <View style={{
        marginHorizontal: 130,
        marginVertical: 250,
        height: (height - 2000) / 1,
        width:100,
        backgroundColor: '#fff',
        borderColor: '#e2e2e2',
        borderWidth: 1.5,
        borderRadius: 10
      }}>
      <View style={{alignItems:'center', flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 5}}>
        <Spinner color="#d11e48"/>
        <Text>{props.message}</Text>
      </View>
    </View>
  </Modal>
)

export default LoadingModal

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