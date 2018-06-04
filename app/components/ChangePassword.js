import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import { Container, Content, Input, Item, Label, Form, Button } from 'native-base';

const ChangePassword = (props) => (
  <Container>
    <Navbar
      navbarTitle="Change Password"
      navbarIcon="close"/>
    <Content>
      <Form style={{paddingRight: 15,paddingLeft: 15}}>
        <Label style={styles.labels}>Old Password</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Enter current password" placeholderTextColor="#CDCDCD" secureTextEntry/>
        </Item>
        <Label style={styles.labels}>New Password</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Enter new password" placeholderTextColor="#CDCDCD" secureTextEntry/>
        </Item>
        <Label style={styles.labels}>Confirm New Password</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Enter new password" placeholderTextColor="#CDCDCD" secureTextEntry/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Container>
)

const styles = StyleSheet.create({
  form: {
    paddingRight: 15,
    paddingLeft: 15
  },
  labels: {
    fontSize: 16, 
    fontFamily: 'Avenir Next',
    fontWeight: 'bold', 
    paddingBottom: 10,
    paddingTop: 10
  },
  items:{
    width: '100%', 
    borderRadius: 5, 
    height: 40
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

export default ChangePassword