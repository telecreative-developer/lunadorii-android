import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Button, Footer, Form, Label, Item, Input } from 'native-base'
import PropTypes from 'prop-types'
import { register } from '../actions/register';

const RegisterIdentify = (props) => (
  <Container style={styles.backgroundColorWhite}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content" />
    <Content style={styles.backgroundColorWhite}>
      <View style={styles.wrapper}>   
        <View style={{alignItems: 'center', paddingTop: 35, paddingBottom: 100}}>
          <Text style={{fontSize: 26}}>Name and Password</Text>
        </View>
        <View>
          <Form>
            <Item regular style={styles.item}>
              <Input 
                placeholder="First Name" 
                placeholderTextColor="#ccc" 
                value={props.email}
                onChangeText={props.onChangeEmail}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input 
                placeholder="Last Name" 
                placeholderTextColor="#ccc" 
                value={props.email}
                onChangeText={props.onChangeEmail}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input 
                placeholder="Password" 
                placeholderTextColor="#ccc" 
                value={props.email}
                onChangeText={props.onChangeEmail}
              />
            </Item>
          </Form>
          <View style={styles.formRegister}>
            <Button full style={styles.buttonRegisterActive}>
              <Text style={styles.buttonRegisterActiveText}>Register</Text>
            </Button>
          </View>
        </View>
      </View>
      <View style={{paddingBottom: 10, paddingTop: 100, paddingLeft: 45, paddingRight: 45}}>
        <View style={{ borderBottomColor: "#979797", borderBottomWidth: 1.2}}>
        </View>
      </View>
      <View style={styles.informationWrapper2}>
        <Text style={styles.alignSelfCenter}>Already have account?</Text>
        <TouchableOpacity style={styles.alignSelfCenter} onPress={props.navigateToRegister}>
          <Text style={styles.registerNowColor}> Login</Text>
        </TouchableOpacity>
      </View>
    </Content>
  </Container>
)

register.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes,

  onChangeEmail: PropTypes.func,
  onChangeFirstName: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangePassword: PropTypes.func
}

export default RegisterIdentify

const styles = StyleSheet.create({
  logoImage: {
    marginBottom: 90,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoImageCircle:{
    marginTop: 30,
    marginBottom: 50,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper:{
    paddingTop: 30,
    paddingLeft: 45,
    paddingRight: 45
  },
  formRegister:{
    paddingTop: 5, 
    paddingBottom: 10
  },
  buttonRegisterActive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonRegisterActiveText:{
    color: '#fff', 
    fontSize: 18 
  },
  logoSize:{
    width: 155, 
    height: 40
  },
  informationWrapper1:{
    marginTop: 40,
    marginBottom: 30,
  },
  alignSelfCenter1:{
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
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
  informationWrapper2:{
    marginBottom: 15,
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
    borderColor: '#979797',
    backgroundColor: '#f6f6f6',
    marginBottom: 20,
    borderRadius: 10,
    height: 50
  },
})