import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
import { convertWidthPercentToDP } from '../particles/Converter'
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
        <Form style={{paddingVertical:5, paddingHorizontal:20, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
          <Button style={{borderRadius: 30, height: 50, width: 50, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center'}} disabled={props.quantityValue == 0} onPress={props.decreaseQty}>
            <Text style={{fontSize: 24, color:'fff'}}>-</Text>
          </Button>
          <View style={{borderRadius: 5, borderColor: '#e2e2e2', width: convertWidthPercentToDP('45%'), height:50, backgroundColor: '#f6f6f6', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24, justifyContent: 'center'}}>{props.quantityValue}</Text>
          </View>
          <Button style={{borderRadius: 30, height: 50, width: 50, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center'}} disabled={props.quantityValue == 100} onPress={props.increaseQty}>
            <Text style={{fontSize: 24, color:'fff'}}>+</Text>
          </Button>
        </Form>
        {props.quantityValue > 100 || props.quantityValue == 0? (
          <View style={{paddingHorizontal:20, paddingVertical: 10}}>
            <Button full onPress={props.handleAddToCart} style={{borderRadius: 5, backgroundColor: '#f6f6f6'}} disabled>
              <Text style={{color: '#ccc'}}>Order refused</Text>
            </Button>
          </View>
        ) : (
          <View style={{paddingHorizontal:20, paddingVertical: 10}}>
            <Button full onPress={props.handleAddToCart} style={{borderRadius: 5, backgroundColor: '#d11e48'}}>
              <Text style={{color: '#fff'}}>Add to cart</Text>
            </Button>
          </View>
        )}
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
  },
  buttonSelectStyleEditProfileDisabled: {
    height: 50, 
    backgroundColor: '#f6f6f6'
  },
  buttonSelectTextStyleEditProfileDisabled: {
    color: '#ccc',
    fontSize: 18
  }
})