import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import EditAddressModal from '../modals/EditAddressModal'
import AddAddressModal from '../modals/AddAddressModal'
const { height, width } = Dimensions.get('window')

const YourShippingAddress = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Shipping Address"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <EditAddressModal
      navbarTitle="Edit Addresss"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditAddress}
      actionIcon={props.toggleModalEditAddress} 
      
      name={props.name}
      phone={props.phone}
      detail_address={props.detail_address}
      province={props.province}
      city={props.city}
      district={props.district}

      onChangeName={props.onChangeName}
      onChangePhone={props.onChangePhone}
      onChangeAddress={props.onChangeAddress}
      onChangeProvince={props.onChangeProvince}
      onChangeCity={props.onChangeCity}
      onChangeDistrict={props.onChangeDistrict}

      modalVisibleSetProvince={props.modalVisibleSetProvince}
      toggleModalSetProvince={props.toggleModalSetProvince}

      updateShipping={props.handlerUpdateShipping}
    />
    <AddAddressModal
      navbarTitle="Add Addresss"
      navbarIcon="close"
      modalVisible={props.modalVisibleAddAddress}
      actionIcon={props.toggleModalAddAddress} 
      
      modalVisibleSetProvince={props.modalVisibleSetProvince}
      toggleModalSetProvince={props.toggleModalSetProvince}

      handleSaveShippingAddress={props.handleSaveShippingAddress}/>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <View style={styles.viewShippingAddress}>
        <Text style={styles.txtShippingAddress}>Your Shipping Address</Text>
        <FlatList
          data={props.dataShippingAddress}
          renderItem={props.renderShippingAddress}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
      <Button style={styles.btnAddAddress} onPress={props.toggleModalAddAddress}>
        <Icon name="add" /><Text style={styles.txtAddAddress}>Add Another Address</Text>
      </Button>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewShippingAddress: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  txtShippingAddress: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10
  },
  btnAddAddress: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#AEAEAE',
    margin: 5,
    marginBottom: 15
  },
  txtAddAddress: {
    fontSize: 14,
    paddingRight: 10,
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default YourShippingAddress