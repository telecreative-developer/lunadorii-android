import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Form, Button } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

const FiltersModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Filters"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <Content style={styles.container}>
      <Text style={styles.txtLabel}>Category</Text>
      <Item regular style={styles.item}>
        <Input placeholder='Select category below' placeholderTextColor="#ccc" />
      </Item>
      <View style={styles.flexStart}>
        <View style={styles.buttonWrapper}>
          <Button bordered danger style={styles.mediumButton}>
            <Text style={styles.buttonText}>Makeup</Text>
          </Button>
          <Button bordered danger style={styles.mediumButton}>
            <Text style={styles.buttonText}>Nails</Text>
          </Button>
          <Button bordered danger style={styles.mediumButton}>
            <Text style={styles.buttonText}>Skincare</Text>
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button bordered danger style={styles.largeButton}>
            <Text style={styles.buttonText}>Tools & Brushes</Text>
          </Button>
          <Button bordered danger style={styles.largeButton}>
            <Text style={styles.buttonText}>Bath & Body</Text>
          </Button>
        </View>
      </View>
      <Text style={styles.txtLabel}>Brands</Text>
      <Item regular style={styles.item}>
        <Input placeholder='Select brand' placeholderTextColor="#ccc" />
      </Item>
      <Text style={styles.txtLabel}>Price</Text>
      <View style={styles.inputWrapper}>
        <Item regular style={styles.inputMin}>
          <Input placeholder='Min' placeholderTextColor="#ccc" />
        </Item>
        <Text style={styles.sparator}>-</Text>
        <Item regular style={styles.inputMax}>
          <Input placeholder='Max' placeholderTextColor="#ccc" />
        </Item>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Search</Text>
    </Button>
  </Modal>
)

export default FiltersModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  sparator: {
    fontSize: 36,
    color: '#ccc',
    alignSelf: 'center',
    paddingBottom: 15
  },
  inputMin: {
    width: 130,
    height: 40,
    marginBottom: 10,
    borderRadius: 5
  },
  inputMax: {
    width: 130,
    height: 40,
    marginBottom: 10,
    borderRadius: 5
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mediumButton: {
    height: 30,
    width: 80,
    justifyContent: 'center',
    borderColor: '#F7009A',
    borderRadius: 5,
    margin: 5
  },
  flexStart: {
    justifyContent: 'flex-start'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  largeButton: {
    height: 30,
    width: 125,
    justifyContent: 'center',
    borderColor: '#F7009A',
    borderRadius: 5,
    margin: 5
  },
  buttonText: {
    color: '#F7009A'
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  item: {
    marginBottom: 10,
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