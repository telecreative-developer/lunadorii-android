import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
const { height, width } = Dimensions.get('window')

const AddToCart = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.modalVisible}>
    <View style={{
        marginTop: 200,
        marginBottom: 100,
        marginHorizontal: 20,
        height: (height - 5) / 1,
        width: (width - 5) / 2,
        backgroundColor: '#fff',
        borderColor: '#e2e2e2',
        borderWidth: 1.5,
        borderRadius: 5
      }}>
      <Icon name="close" type="EvilIcons" fontSize={12} onPress={props.toggleModalAddToCart} style={{alignSelf: 'flex-start', paddingLeft: 5, paddingTop: 10}}/>
      <View>
        <Form style={{padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{borderRadius: 30, height: 50, width: 50, alignSelf: 'flex-start', backgroundColor: '#ccc', justifyContent:'center'}}>
              <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 24}}>-</Text>
            </View>
            <Item style={{borderRadius: 5, borderColor: '#e2e2e2', width: (width - 70 ) / 2}} regular>
              <Input placeholder="Input Quantity" placeholderTextColor="#ccc" keyboardType={'numeric'} onChangeText={props.onChangeQty}/>
            </Item>
            <View style={{borderRadius: 30, height: 50, width: 50, alignSelf: 'flex-end', backgroundColor: '#ccc', justifyContent:'center'}}>
              <Text style={{textAlign: 'center', alignSelf:'center', fontSize: 24}}>+</Text>
            </View>
          </View>
        </Form>
        <View style={{padding: 20}}>
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