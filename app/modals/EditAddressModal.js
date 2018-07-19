import React, { Component } from 'react'
import { Modal, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import { Content, Item, Input, Label, Button, Form, View, Spinner } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavbarModal from '../particles/NavbarModal'
const { height, width } = Dimensions.get('window')

const EditAddressModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Edit Address"
      navbarIcon="close"
      actionIcon={props.actionIcon} 
    />
    <Content style={styles.container}>
    <Form style={styles.form}>
        <Label style={styles.labels}>Name</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.nameValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.nameValue} value={props.nameValue} onChangeText={props.onChangeName}/>
          <Ionicons name={props.nameValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>Label</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.labelValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.labelValue} value={props.labelValue} onChangeText={props.onChangeLabel}/>
          <Ionicons name={props.labelValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>Address</Label>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.addressValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.addressValue} value={props.addressValue} onChangeText={props.onChangeAddress}/>
          <Ionicons name={props.addressValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>Province</Label>
        {props.provinceValue && props.visibleProvincePicker ? (
          <FlatList
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
          borderColor: props.provinceValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.provinceValue} value={props.provinceValue} onChangeText={props.onChangeProvince}/>
          <Ionicons name={props.provinceValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <Label style={styles.labels}>City</Label>
        {props.cityValue && props.visibleCityPicker ? (
          <FlatList
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
          borderColor: props.cityValue ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={props.cityValue} value={props.cityValue} onChangeText={props.onChangeCity}/> 
          <Ionicons name={props.cityValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>

        <View style={styles.wrapper}>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Number Phone</Label>
            <Item regular style={{
              width: 180,
              borderRadius: 5,
              height: 40,
              borderColor: props.numberPhoneValue ? '#ccc' : '#c0392b'
            }}>
              <Input placeholder={props.numberPhoneValue} value={props.numberPhoneValue} onChangeText={props.onChangeNumberPhone} keyboardType={'numeric'} maxLength={13}/>
              <Ionicons name={props.numberPhoneValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
          <View style={styles.flexDirectionCol}>
            <Label style={styles.labels}>Postalcode</Label>
            <Item regular style={{
              width: 140,
              borderRadius: 5,
              height: 40,
              borderColor: props.postalcodeValue ? '#ccc' : '#c0392b'
            }}>
              {console.log('isi postal code :', props.postalcodeValue, props.numberPhoneValue)}
              <Input value={props.postalcodeValue} onChangeText={props.onChangePostalcode}  maxLength={6}/>
              <Ionicons name={props.postalcodeValue ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
            </Item>
          </View>
        </View>
      </Form>
    </Content>
    {props.nameValue && props.labelValue && props.addressValue && props.provinceValue && props.cityValue && props.numberPhoneValue && props.postalcodeValue ? (
      <Button full style={styles.buttonSaveStyle} onPress={props.handleUpdateAddress} disabled={props.loading} >
        {props.loading ? (
          <View stryle={styles.style}>
            <Spinner color="#fff"/>
          </View>
        ) : (
          <Text style={styles.buttonSaveTextStyle}>Save</Text>
        )}
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} disabled>
        <Text style={styles.buttonSaveTextStyleDisabled}>Save</Text>
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
