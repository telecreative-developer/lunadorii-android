import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Content, Item, Input, Icon, Label, Form, Button, Spinner } from 'native-base'
import defaultPhotoProfile from '../assets/images/icon/photoProfileDefault.png'
import NavbarModal from '../particles/NavbarModal'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

const EditProfileModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}
  >
    <NavbarModal
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon={props.actionIcon}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <View>
        <Image source={{ uri: props.photoProfile }} style={styles.imageFrame} />
        <View style={styles.takePhotoButton}>
          <TouchableOpacity onPress={props.handleOpenCamera}>
            <Icon name='camera' style={styles.takePhotoButtonIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Form>
        <Label style={styles.labels}>First Name</Label>
        <Item regular style={styles.items}>
          <Input value={props.first_name} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeFirstName} />
        </Item>
        <Label style={styles.labels}>Last Name</Label>
        <Item regular style={styles.items}>
          <Input value={props.last_name} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeLastName} />
        </Item>
        <Label style={styles.labels}>Birth Date</Label>
        <Item regular style={styles.items}>
          {console.log('data bod :', props.bod)}
          <DatePicker
            style={{ width: 100, borderWidth: 0 }}
            date={props.bod}
            mode="date"
            placeholder="Birth of Date"
            format="YYYY-MM-DD"
            minDate="1960-01-01"
            maxDate={moment().format('YYYY-MM-DD')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                width: 0,
                height: 0
              },
              dateInput: {
                borderWidth: 0
              },
              placeholderText: {
                color: "#1E1E1E",
                fontSize: 12
              }
            }}
            onDateChange={props.onChangeBirthDate}
          />
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile} onPress={props.handleSaveEditProfile} disabled={props.stillLoading} >
      {props.stillLoading ? <Spinner color="#fff"/> :
        <Text style={styles.buttonSaveTextStyleEditProfile}>Save</Text>
      }
    </Button>
  </Modal >
)

export default EditProfileModal

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff'
  },
  imageFrame: {
    marginTop: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center'
  },
  takePhotoButton: {
    backgroundColor: '#bdc3c7',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 5,
    width: 25,
    height: 20,
    right: 120,
    bottom: 75
  },
  takePhotoButtonIcon: {
    alignSelf: 'center',
    fontSize: 20
  },
  labels: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10
  },
  items: {
    width: '100%',
    borderRadius: 5,
    height: 40
  },
  buttonSaveStyleEditProfile: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18
  }
})