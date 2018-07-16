import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Icon, Button, Form, Input, Item, Label } from 'native-base'
import moment from 'moment'
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
        {console.log(props.courierMetode)}
        <FlatList
          data={props.courierMetode}
          renderItem={({item}) => (
            <TouchableOpacity onPress={props.selectedCourier}>
              <View style={{padding: 10, flexDirection: 'row',justifyContent: 'space-around'}}>
                <Text style={{fontWeight: 'bold',color: '#000'}}>{item.service}</Text>
                <Text>{item.cost[0].etd }</Text>
                <Text style={{fontWeight: 'bold',color: '#000'}}>Rp. {item.cost[0].value},-</Text>
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