import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Form, Button } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

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
    <Content style={styles.container}>
      <View>
        <Image source={{ uri: props.imageProfile }} style={styles.imageFrame} />
        <View style={styles.takePhotoButton}>
          <TouchableOpacity>
            <Icon name='camera' style={styles.takePhotoButtonIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Form>
        <Label style={styles.labels}>First Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.firstName} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeFirstName} />
        </Item>
        <Label style={styles.labels}>Last Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.lastName} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeLastName} />
        </Item>
        <Label style={styles.labels}>Email</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.email} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeEmail} />
        </Item>
        <Label style={styles.labels}>Birth Date</Label>
        <Item regular style={styles.items}>
          <Input placeholder={props.birthDate} placeholderTextColor="#CDCDCD" onChangeText={props.onChangeBirthDate} />
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile} onPress={props.handleSaveEditProfile}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Save</Text>
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