import React, { Component } from 'react'
import { Modal, Text, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native'
import { Content, Item, Input, Label, Button, Form, View, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchableFlatlist from '../particles/SearchableFlatlist'
import NavbarModal from '../particles/NavbarModal'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const EditAddressModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle={I18n.t('address_modal_title_edit')}
      navbarIcon="close"
      actionIcon={props.actionIcon} 
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Form style={styles.form}>
        <Label style={styles.labels}>{I18n.t('address_modal_name')}</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.nameValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.nameValue} value={props.nameValue} onChangeText={props.onChangeName}/>
          <Ionicons name={props.nameValue ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>{I18n.t('address_modal_addresslabel')}</Label>
        {props.labelValue ? (
          <View/>
        ) : (
          <View style={{ backgroundColor: '#e2e2e2', borderRadius: 5, marginBottom: 5}}>
            <Text style={{fontSize: 12,padding:10}}>{I18n.t('address_modal_example_addresslabel')}</Text>
          </View>
        )}

        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.labelValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.labelValue} value={props.labelValue} onChangeText={props.onChangeLabel}/>
          <Ionicons name={props.labelValue ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>{I18n.t('address_modal_address')}</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.addressValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.addressValue} value={props.addressValue} onChangeText={props.onChangeAddress}/>
          <Ionicons name={props.addressValue ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>{I18n.t('address_modal_province')}</Label>
        {props.provinceValue && props.visibleProvincePicker ? (
          <SearchableFlatlist
            searchTerm={props.provinceValue}
            searchProperty={"province"}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.dataProvince}
            renderItem={props.renderDataProvince}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.provinceValue && props.province_id ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.addressValue.length == 0 ? I18n.t('address_modal_province_placeholder') : props.provinceValue} placeholderTextColor={"#ccc"} value={props.provinceValue} onChangeText={props.onChangeProvince} disabled={props.addressValue.length == 0 ? true : false}/>
          <Ionicons name={props.provinceValue && props.province_id ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>{I18n.t('address_modal_city')}</Label>
        {props.cityValue && props.visibleCityPicker ? (
          <SearchableFlatlist
            searchTerm={props.cityValue}
            searchProperty={"city"}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.dataCity}
            renderItem={props.renderDataCity}
          />
        ) : (
          <View backgroundColor="transparent"/>
        )}
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.cityValue && props.city_id ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.provinceValue.length == 0 ? I18n.t('address_modal_city_placeholder') : props.city_with_type} placeholderTextColor={"#ccc"} value={props.cityValue} onChangeText={props.onChangeCity} disabled={props.provinceValue.length == 0 ? true : false}/> 
          <Ionicons name={props.cityValue && props.city_id ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('address_modal_numberphone')}</Label>
            <Item regular style={{
              width: 180,
              borderRadius: 5,
              height: 40,
              borderColor: props.numberPhoneValue ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder={props.numberPhoneValue} value={props.numberPhoneValue} onChangeText={props.onChangeNumberPhone} keyboardType={'numeric'} maxLength={13}/>
              <Ionicons name={props.numberPhoneValue ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>{I18n.t('address_modal_postalcode')}</Label>
            <Item regular style={{
              width: 140,
              borderRadius: 5,
              height: 40,
              borderColor: props.postalcodeValue ? '#ccc' : '#c0392b'
            }}>
              {console.log(props.postalcodeValue)}
              <Input value={props.postalcodeValue} onChangeText={props.onChangePostalcode} keyboardType={'numeric'} maxLength={6}/>
              <Ionicons name={props.postalcodeValue ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
        </View>
      </Form>
    </Content>
    {props.nameValue && props.labelValue && props.addressValue && props.provinceValue && props.cityValue && props.numberPhoneValue && props.postalcodeValue && props.province_id && props.city_id ? (
      <Button full style={styles.buttonSaveStyle} onPress={props.handleUpdateAddress} disabled={props.loading} >
        {props.loading ? (
          <View stryle={styles.style}>
            <Spinner color="#fff"/>
          </View>
        ) : (
          <Text style={styles.buttonSaveTextStyle}>{I18n.t('address_modal_save')}</Text>
        )}
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} onPress={props.handleSaveAddress} disabled>
        <Text style={styles.buttonSaveTextStyleDisabled}>{I18n.t('address_modal_save')}</Text>
      </Button>
    )}
  </Modal>
)

export default EditAddressModal

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff'
  },
  form: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingVertical: 10
  },
  pickers:{
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 5,
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    alignItems:'center'
  },
  itemsTextarea: {
    borderRadius: 5,
    height: 100
  },
  textareaStyle: {
    borderRadius: 5,
    height: 100,
    width: '100%'
  },
  buttonSaveStyle: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyle: {
    color: '#fff',
    fontSize: 18
  },
  buttonSaveStyleDisabled: {
    height: 50,
    backgroundColor: '#f6f6f6'
  },
  buttonSaveTextStyleDisabled: {
    color: '#ccc',
    fontSize: 18
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexDirectionCol: {
    flexDirection: 'column'
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10
  },
  centeredItemsPostalcode: {
    width: 140,
    borderRadius: 5,
    height: 40
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40
  },
  centeredItems: {
    width: 160,
    borderRadius: 5,
    height: 40
  },
})
