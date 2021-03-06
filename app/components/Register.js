import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Form, Item, Input } from 'native-base'
import PropTypes from 'prop-types'
import { register } from '../actions/register';
import LunadoriiPortraitLogo from '../assets/images/icon/lunadorii-highres.png'
import LunadoriiCircleLogo from '../assets/images/icon/CircleLogo.png'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const Register = (props) => (
  <Container style={styles.backgroundColorWhite}>
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content" />
    <Content style={styles.backgroundColorWhite}>
      <View style={styles.wrapper}>    
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: convertWidthPercentToDP('5%'),
        }}>
          <Image source={LunadoriiCircleLogo} style={{height: 90, width: 90}} />    
        </View>
        <View style={styles.logoImage}>
          <Image source={LunadoriiPortraitLogo} style={styles.logoSize} />
        </View>
        <View>
          <Form>
            <Item regular style={styles.item}>
              <Input 
                placeholder={I18n.t('register_email_address_placeholder')}
                placeholderTextColor="#ccc" 
                value={props.email}
                onChangeText={props.onChangeEmail}
              />
            </Item>
          </Form>
          <View style={styles.formRegister}>
            {/* <Button full style={styles.buttonRegisterActive} onPress={props.ha}>
              <Text style={styles.buttonRegisterActiveText}>Next</Text>
            </Button> */}
            {props.renderButton}
          </View>
        </View>
      </View>
    </Content>
    <View style={{paddingBottom: 10, paddingLeft: 45, paddingRight: 45}}>
      <View style={{ borderBottomColor: "#979797", borderBottomWidth: 1.2}}>
      </View>
    </View>
    <View style={styles.informationWrapper2}>
      <Text style={styles.alignSelfCenter}>{I18n.t('register_clues1')}</Text>
      <TouchableOpacity style={styles.alignSelfCenter} onPress={props.navigateToLogin}>
        <Text style={styles.registerNowColor}> {I18n.t('register_clues2')}</Text>
      </TouchableOpacity>
      <Text> {I18n.t('register_clues3')} </Text>
      <TouchableOpacity onPress={props.skipLogin} style={{paddingLeft: 5}}>
        <Text style={{color: '#d11e48'}}>{I18n.t('register_clues4')}</Text>
      </TouchableOpacity>
    </View>
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

export default Register

const styles = StyleSheet.create({
  logoImage: {
    marginBottom: 90,
    height: 75,
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
    backgroundColor: '#fff',
    height: height,
    width: width
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