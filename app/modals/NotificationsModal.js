import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Label, Button, CheckBox } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

const NotificationsModal = (props) => (
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
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>Message</Text>
        <View style={styles.subWrapper}>
          <View style={styles.subtitleTextWrapper}>
            <Text>Terima pesan eksklusif dan info terbaru khusus untuk anda.</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox color="#D50039" checked />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>Pesanan dan Logistik</Text>
        <View style={styles.subWrapper}>
          <View style={styles.subtitleTextWrapper}>
            <Text>Terima info mengenai pesanan dana.</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox color="#D50039" checked />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>Notifikasi Sistem</Text>
        <View style={styles.subWrapper}>
          <View style={styles.subtitleTextWrapper}>
            <Text>Terima info terbaru mengenai whislist dan troli belanja anda.</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox color="#D50039" checked />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>Chat</Text>
        <View style={styles.subWrapper}>
          <View style={styles.subtitleTextWrapper}>
            <Text>Terima pesan in-app di handphone anda.</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox color="#D50039" checked />
          </View>
        </View>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Save</Text>
    </Button>
  </Modal>
)

export default NotificationsModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10
  },
  subWrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderColor: "#fff"
  },
  subtitleTextWrapper: {
    width: '90%'
  },
  checkboxWrapper: {
    paddingRight: 20
  },
  buttonSaveStyle: {
    height: 50,
    backgroundColor: '#D50039'
  },
  buttonSaveTextStyle: {
    color: '#fff',
    fontSize: 20
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