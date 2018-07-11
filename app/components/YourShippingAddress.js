import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, StatusBar, Dimensions, Text } from 'react-native'
import { Container, Content, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
// import EditAddressModal from '../modals/EditAddressModal'
import AddAddressModal from '../modals/AddAddressModal'
const { height, width } = Dimensions.get('window')

const YourShippingAddress = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Shipping Address"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <AddAddressModal
      navbarTitle="Add Addresss"
      navbarIcon="close"
      modalVisible={props.modalVisibleAddAddress}
      actionIcon={props.toggleModalAddAddress} 

      nameValue={props.nameValue}
      onChangeName={props.onChangeName}

      addressValue={props.addressValue}
      onChangeAddress={props.onChangeAddress}

      provinceValue={props.provinceValue}
      onChangeProvince={props.onChangeProvince}

      cityValue={props.cityValue}
      onChangeCity={props.onChangeCity}

      regencyValue={props.regencyValue}
      onChangeRegency={props.onChangeRegency}

      postalcodeValue={props.postalcodeValue}
      onChangePostalcode={props.onChangePostalcode}

      numberPhoneValue={props.numberPhoneValue}
      onChangeNumberPhone={props.onChangeNumberPhone}

      dataProvince={props.dataProvince}
      renderDataProvince={props.renderDataProvince}
      visibleProvincePicker={props.visibleProvincePicker}

      dataCity={props.dataCity}
      renderDataCity={props.renderDataCity}
      visibleCityPicker={props.visibleCityPicker}

      dataRegency={props.dataRegency}
      renderDataRegency={props.renderDataRegency}
      visibleRegencyPicker={props.visibleRegencyPicker}

      handleSaveAddress={props.handleSaveAddress}/>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <View>
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
    backgroundColor: '#fff',
    width: width,
    height: height
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