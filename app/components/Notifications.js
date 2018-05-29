import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import { Container, Content, CheckBox, Item, Title, Subtitle, Button } from 'native-base';

const Notifications = () => (
  <Container>
    <Navbar
      navbarTitle="Notifications"
      navbarIcon="close"/>
    <Content>
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>Message</Text>
        <View style={styles.subWrapper}>
          <View style={styles.subtitleTextWrapper}>
            <Text>Terima pesan eksklusif dan info terbaru khusus untuk anda.</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox color="#D50039" checked/>
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
            <CheckBox color="#D50039" checked/>
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
            <CheckBox color="#D50039" checked/>
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
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Container>
)

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  titleText:{ 
    fontWeight: 'bold', 
    fontSize: 16, 
    paddingBottom: 10 
  },
  subWrapper:{
    flexDirection: "row",
    justifyContent: 'space-between',
    borderColor: "#fff"
  },
  subtitleTextWrapper:{
    width: '90%'
  },
  checkboxWrapper:{
    paddingRight: 20
  },
  buttonSaveStyle:{
    height: 50, 
    backgroundColor: '#D50039'
  },
  buttonSaveTextStyle:{
    color: '#fff',
    fontSize: 20
  }
})

export default Notifications