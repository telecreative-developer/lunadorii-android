import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
const { height, width } = Dimensions.get('window')

const PickDeliveryServiceModal = (props) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={props.modalVisible}
    onRequestClose={props.closeIcon}>
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f6f6f6',borderBottomColor: '#e2e2e2', borderBottomWidth:1}}>
        <Icon name="close" type="EvilIcons" fontSize={12} onPress={props.closeIcon} style={{alignSelf: 'flex-start', paddingVertical: 10, paddingHorizontal:5, paddingTop: 10}}/>
        <Text style={{fontWeight: 'bold',color: '#000',alignSelf: 'flex-end', paddingBottom: 13, paddingRight: 10}}>Delivery Services</Text>
      </View>
      <View style={{height: 200}}>
        <FlatList
          data={[
            {class: 'Standard', estimated: 'est delivery (Fri 20/5)', price: 20000},
            {class: 'Fast', estimated: 'est delivery (Fri 20/5)', price: 20000},
            {class: 'Normal', estimated: 'est delivery (Fri 20/5)', price: 20000},
            {class: 'Madness', estimated: 'est delivery (Fri 20/5)', price: 20000},
            {class: 'Fuckin Shit', estimated: 'est delivery (Fri 20/5)', price: 20000},
            {class: 'OMG', estimated: 'est delivery (Fri 20/5)', price: 20000}
          ]}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => alert("You pick " + item.class)}>
              <View style={{padding: 10, flexDirection: 'row',justifyContent: 'space-around'}}>
                <Text style={{fontWeight: 'bold',color: '#000'}}>{item.class}</Text>
                <Text>{item.estimated}</Text>
                <Text style={{fontWeight: 'bold',color: '#000'}}>Rp. {item.price},-</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  </Modal>
)

export default PickDeliveryServiceModal

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