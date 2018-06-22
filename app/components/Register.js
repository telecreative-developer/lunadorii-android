import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Button, Footer, Form, Label, Item, Input } from 'native-base'
import PropTypes from 'prop-types'

const Register = (props) => (
  <Container style={styles.backgroundColorWhite}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content" />
    <Content style={styles.backgroundColorWhite}>
      <View style={styles.wrapper}>
        <View style={styles.logoImage}>
          <Image source={require('../assets/images/icon/LogoLD.png')} style={styles.logoSize} />
        </View>
        <View>
          <Form>
            <Label style={styles.txtLabel}>First name</Label>
            <Item regular style={styles.item}>
              <Input placeholder="Your first name" placeholderTextColor="#ccc" />
            </Item>
            <Label style={styles.txtLabel}>Last name</Label>
            <Item regular style={styles.item}>
              <Input placeholder="Your last name" placeholderTextColor="#ccc" />
            </Item>
            <Label style={styles.txtLabel}>Email</Label>
            <Item regular style={styles.item}>
              <Input placeholder="You email address" placeholderTextColor="#ccc" />
            </Item>
            <Label style={styles.txtLabel}>Password</Label>
            <Item regular style={styles.item}>
              <Input placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />
            </Item>
          </Form>
          <View style={styles.registerButtonWrapper}>
            <Button full style={styles.registerButtonStyle}>
              <Text style={styles.registerTextButton}>Register</Text>
            </Button>
          </View>
          <View style={styles.informationWrapper}>
            <Text style={styles.alignSelfCenter}>Already have account?</Text>
            <TouchableOpacity style={styles.alignSelfCenter} onPress={props.navigateToLogin}>
              <Text style={styles.registerNowColor}> Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Content>
  </Container>
)

export default Register

const styles = StyleSheet.create({
  logoImage: {
    marginTop: 20,
    marginBottom: 50,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper:{
    padding: 20
  },
  logoSize:{
    width: 250, 
    height: 65 
  },
  registerButtonWrapper:{
    paddingTop: 5, 
    paddingBottom: 10
  },
  registerButtonStyle:{
    borderRadius: 5, 
    backgroundColor: '#d11e48'
  },
  registerTextButton:{
    color: '#fff', 
    fontSize: 18 
  },
  informationWrapper:{
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  alignSelfCenter:{
    alignSelf: 'center'
  },
  registerNowColor:{
    color: '#d11e48'
  },
  backgroundColorWhite:{
    backgroundColor: '#fff'
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
})