import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
const { height, width } = Dimensions.get('window')

const AddToCart = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.modalVisible}
    onRequestClose={props.toggleModalAddToCart}>
    <View style={{
        marginTop: 200,
        marginBottom: 100,
        marginHorizontal: 20,
        height: (height - 2000) / 1,
        width: (width - 2000) / 2,
        backgroundColor: '#fff',
        borderColor: '#e2e2e2',
        borderWidth: 1.5,
        borderRadius: 5
      }}>
      <Icon name="close" type="EvilIcons" fontSize={12} onPress={props.toggleModalAddToCart} style={{alignSelf: 'flex-start', paddingLeft: 5, paddingTop: 10}}/>
      <View>
        <Form style={{paddingVertical:5, paddingHorizontal:20}}>
          <Item style={{borderRadius: 5, borderColor: '#e2e2e2', width: '100%'}} regular>
            <Input placeholder="Input Quantity" placeholderTextColor="#ccc" keyboardType={'numeric'} onChangeText={props.onChangeQty} maxLength={100}/>
          </Item>
        </Form>
        <View style={{paddingHorizontal:20, paddingVertical: 10}}>
          <Button full onPress={props.handleAddToCart} style={{borderRadius: 5, backgroundColor: '#d11e48'}}>
            <Text style={{color: '#fff'}}>Add to cart</Text>
          </Button>
        </View>
      </View>
    </View>
  </Modal>
)

export default AddToCart

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