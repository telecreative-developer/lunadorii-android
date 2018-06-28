import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Button, Footer, Form, Label, Item, Input } from 'native-base'
import PropTypes from 'prop-types'
import LunadoriiPortraitLogo from '../assets/images/icon/PortraitLogo.png'

const Login = (props) => (
  <Container style={styles.backgroundColorWhite}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content" />
    <Content style={styles.backgroundColorWhite}>
      <View style={styles.wrapper}>
        <View style={styles.logoImage}>
          <Image source={LunadoriiPortraitLogo} style={styles.logoSize} />
        </View>
        <View>
          <Form>
            <Item regular style={styles.item}>
              <Input 
                placeholder="You email address" 
                placeholderTextColor="#ccc"
                value={props.valueEmail}
                onChangeText={props.onChangeEmail}
                style={{marginLeft: 5}}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input 
                placeholder="Password" 
                placeholderTextColor="#ccc" 
                secureTextEntry={props.passwordFieldVisibility}
                value={props.valuePassword}
                onChangeText={props.onChangePassword}
                style={{marginLeft: 5}}
              />
              <Icon type="Entypo" name={props.passwordFieldVisibility ? "eye" : "eye-with-line"} style={{fontSize: 18, color:'#ccc', marginRight: 5}} onPress={props.togglePasswordFieldVisibility}/>
            </Item>
            <View style={{marginBottom: 30}}>
              <TouchableOpacity onPress={props.navigateToLoginTroubleshooting}>
                <Text style={{alignSelf: 'flex-end', color:'#d11e48'}}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
          </Form>
          <View style={styles.registerButtonWrapper}>
            {props.renderButtons}
          </View>
        </View>
      </View>
      <View style={{paddingBottom: 10, paddingTop: 45, paddingLeft: 45, paddingRight: 45}}>
        <View style={{borderTopColor: "#979797", borderTopWidth: 1.2, borderBottomColor: "#979797", borderBottomWidth: 1.2}}>
          <View style={styles.informationWrapper1}>
            <TouchableOpacity style={styles.alignSelfCenter1} onPress={props.navigateToRegister}>
              <Icon type="Entypo" name="facebook" style={{color:"#3B5998"}}/><Text style={{color:"#3B5998"}}>Log in With Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.informationWrapper2}>
        <Text style={styles.alignSelfCenter}>Don't have account?</Text>
        <TouchableOpacity style={styles.alignSelfCenter} onPress={props.navigateToRegister}>
          <Text style={styles.registerNowColor}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Content>
  </Container>
)

Login.propTypes = {
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  navigateToRegister: PropTypes.func
}

export default Login

const styles = StyleSheet.create({
  logoImage: {
    marginTop: 60,
    marginBottom: 40,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper:{
    paddingLeft: 45,
    paddingRight: 45
  },
  logoSize:{
    width: 250, 
    height: 65 
  },
  registerButtonWrapper:{
    paddingTop: 5, 
    paddingBottom: 10,
    alignItems: 'center'
  },
  informationWrapper2:{
    marginBottom: 15,
    flexDirection: 'row', 
    justifyContent: 'center'
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
  alignSelfCenter:{
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
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