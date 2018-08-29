import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, StatusBar, Dimensions, Text } from 'react-native'
import { Container, Content, View, Button, Icon, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import Validations from '../particles/Validations'
import LoadingModal from '../modals/LoadingModal'
// import UnderDevelopment from '../particles/UnderDevelopment'
import ImageShippingAddress from '../assets/images/icon/shipping-address.png'
import EditAddressModal from '../modals/EditAddressModal'
import AddAddressModal from '../modals/AddAddressModal'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const YourShippingAddress = (props) => (
  <Container style={styles.container}>
    <LoadingModal 
      modalVisibleLoading={props.setDefaultLoading}
    />
    <Navbar
      navbarTitle={I18n.t('shipping_address_title')}
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <AddAddressModal
      navbarTitle={I18n.t('shipping_address_add_address_modal')}
      navbarIcon="close"
      modalVisible={props.modalVisibleAddAddress}
      actionIcon={props.toggleModalAddAddress} 
      loading={props.loading}

      province_id={props.province_id}
      city_id={props.city_id}

      nameValue={props.nameValue}
      onChangeName={props.onChangeName}

      labelValue={props.labelValue}
      onChangeLabel={props.onChangeLabel}

      addressValue={props.addressValue}
      onChangeAddress={props.onChangeAddress}

      provinceValue={props.provinceValue}
      onChangeProvince={props.onChangeProvince}

      cityValue={props.cityValue}
      onChangeCity={props.onChangeCity}

      postalcodeValue={props.postalcodeValue}
      onChangePostalcode={props.onChangePostalcode}

      numberPhoneValue={props.numberPhoneValue}
      onChangeNumberPhone={props.onChangeNumberPhone}

      postalcodeValue={props.postalcodeValue}

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

    <EditAddressModal
      navbarTitle={I18n.t('shipping_address_edit_address_modal')}
      navbarIcon="close"
      modalVisible={props.modalVisibleEditAddress}
      actionIcon={props.toggleModalEditAddress} 
      loading={props.loading}

      province_id={props.province_id}
      city_id={props.city_id}

      nameValue={props.nameValue}
      onChangeName={props.onChangeName}

      labelValue={props.labelValue}
      onChangeLabel={props.onChangeLabel}

      addressValue={props.addressValue}
      onChangeAddress={props.onChangeAddress}

      provinceValue={props.provinceValue}
      onChangeProvince={props.onChangeProvince}

      cityValue={props.cityValue}
      onChangeCity={props.onChangeCity}

      postalcodeValue={props.postalcodeValue}
      onChangePostalcode={props.onChangePostalcode}

      numberPhoneValue={props.numberPhoneValue}
      onChangeNumberPhone={props.onChangeNumberPhone}

      postalcodeValue={props.postalcodeValue}

      dataProvince={props.dataProvince}
      renderDataProvince={props.renderDataProvince}
      visibleProvincePicker={props.visibleProvincePicker}

      dataCity={props.dataCity}
      renderDataCity={props.renderDataCity}
      visibleCityPicker={props.visibleCityPicker}

      dataRegency={props.dataRegency}
      renderDataRegency={props.renderDataRegency}
      visibleRegencyPicker={props.visibleRegencyPicker}

      handleUpdateAddress={props.handleUpdateAddress}/>
      

    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />

    {props.stillLoading ? 
      <Content contentContainerStyle={{justifyContent: 'center', alignItems:'center', flex: 1}}>
        <View stryle={styles.style}>
          <Spinner color="#d11e48"/>
        </View>
      </Content>:
      <Content style={styles.container}>
        {props.dataShippingAddressDefault != 0 || props.dataShippingAddress != 0 ? 
          <View>
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.txtShippingAddress}>{I18n.t('shipping_address_address_title')}</Text>
              <FlatList
                data={props.dataShippingAddressDefault}
                renderItem={props.renderShippingAddress}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
              <FlatList
                data={props.dataShippingAddress}
                renderItem={props.renderShippingAddress}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            </View>
            <Button style={styles.btnAddAddress} onPress={props.toggleModalAddAddress}>
              <Icon name="add" /><Text style={styles.txtAddAddress}>{I18n.t('shipping_address_add_button')}</Text>
            </Button>
          </View>:
          <Validations 
          showImportedImage={true}
          image={ImageShippingAddress}
          title={I18n.t('shipping_address_validation_title')}
          message1={I18n.t('shipping_address_validation_message1')}
          message2={I18n.t('shipping_address_validation_message2')}
          buttonText={I18n.t('shipping_address_validation_button')}
          buttonAction={props.toggleModalAddAddress}
        />
        }        
      </Content>
    }
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
    paddingVertical: 10
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
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default YourShippingAddress