import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Icon, Button, Footer, Form, Label, Item, Input } from 'native-base'
import PropTypes from 'prop-types'
import { convertHeightPercentToDP, } from '../particles/Converter'
import { register } from '../actions/register';
const { height, width } = Dimensions.get('window')
import I18n from '../i18n'

const RegisterIdentify = (props) => (
  <Container style={styles.backgroundColorWhite}>
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content" />
    <Content style={styles.backgroundColorWhite}>
      <View style={styles.wrapper}>   
        <View style={{alignItems: 'center', paddingTop: 35, paddingBottom: 100}}>
          <Text style={{fontSize: 26}}>{I18n.t('register_identify_title')}</Text>
        </View>
        <View>
          <Form>
            <Item regular style={styles.item}>
              <Input 
                placeholder={I18n.t('register_identify_first_name_placeholder')} 
                placeholderTextColor="#ccc" 
                value={props.first_name}
                onChangeText={props.onChangeFirstName}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input 
                placeholder={I18n.t('register_identify_last_name_placeholder')} 
                placeholderTextColor="#ccc" 
                value={props.last_name}
                onChangeText={props.onChangeLastName}
              />
            </Item>
            <Item regular style={styles.item}>
              <Input 
                placeholder={I18n.t('register_identify_password_placeholder')} 
                placeholderTextColor="#ccc" 
                value={props.password}
                onChangeText={props.onChangePassword}
                secureTextEntry={props.passwordFieldVisibility}
              />
              <Icon type="Entypo" name={props.passwordFieldVisibility ? "eye-with-line" : "eye"} style={{fontSize: 18, color:'#ccc', marginRight: 5}} onPress={props.togglePasswordFieldVisibility}/>
            </Item>
          </Form>
          {/* <View style={styles.formRegister}>
            <Button full style={styles.buttonRegisterActive}>
              <Text style={styles.buttonRegisterActiveText}>Register</Text>
            </Button>
            
          </View> */}
          {props.renderButton}
        </View>
      </View>
      <View style={{paddingBottom: 10, paddingTop: 90, paddingLeft: 45, paddingRight: 45}}>
        <View style={{ borderBottomColor: "#979797", borderBottomWidth: 1.2}}>
        </View>
      </View>
      <View style={styles.informationWrapper2}>
        <Text style={styles.alignSelfCenter}>{I18n.t('register_identify_clues1')}</Text>
        <TouchableOpacity style={styles.alignSelfCenter} onPress={props.navigateToLogin}>
          <Text style={styles.registerNowColor}> {I18n.t('register_identify_clues2')}</Text>
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