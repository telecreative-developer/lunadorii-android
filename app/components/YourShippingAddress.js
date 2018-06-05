import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import ShippingAddress from '../particles/ShippingAddress'
import EditAddressModal from '../modals/EditAddressModal'

const YourShippingAddress = (props) => (
  <Container>
    <Navbar
      navbarTitle="Shipping Address"
      navbarIcon="arrow-back"
      actionIcon={props.goback}/>
    <EditAddressModal
      navbarTitle= "Edit Addresss"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditAddress}
      actionIcon={props.toggleModalEditAddress}/>
    <Content>
      <View style={styles.viewShippingAddress}>
        <Text style={styles.txtShippingAddress}>Your Shipping Address</Text>
        <FlatList
          data={props.dataShippingAddress}
          renderItem={props.renderShippingAddress}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
      <Button style={styles.btnAddAddress}>
        <Icon name="add"/><Text style={styles.txtAddAddress}>Add Another Address</Text>
      </Button>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  viewShippingAddress:{
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  txtShippingAddress:{
    fontWeight: 'bold', 
    fontSize: 16,
    padding: 10
  },
  btnAddAddress:{
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#AEAEAE',
    margin:5,
    marginBottom:15
  },
  txtAddAddress:{
    fontSize:14,
    paddingRight:10,
    color:'#fff',
    fontWeight:'bold'
  }
})

export default YourShippingAddress