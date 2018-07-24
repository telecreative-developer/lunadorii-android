import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Content, Button, Form, Item, Input, Icon } from 'native-base'
import LunadoriiCircleLogo from '../assets/images/icon/CircleLogo.png'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
const { height, width } = Dimensions.get('window')

const LoginTroubleshooting = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.logoImage}>
            <Image source={LunadoriiCircleLogo} style={styles.logoSize} />
            <Text style={{padding: 10, color: '#000', fontSize: 16}}>Trouble logging in?</Text>
            <Text>Enter your username or email and we'll</Text>
            <Text>send you a link to get back into</Text>
            <Text>your account</Text>
          </View>
          <Form style={{marginHorizontal: 50}}>
            <Item regular style={styles.item}>
              <Input 
                placeholder="You email address" 
                placeholderTextColor="#ccc"
                value={props.valueEmail}
                onChangeText={props.onChangeEmail}
              />
            </Item>
          </Form>
          <View style={styles.buttonSendLinkWrapper}>
            <Button full style={styles.buttonSendLinkStyle} onPress={props.forgotpassword}>
              <Text style={styles.buttonSendLinkStyleText}>Send Login Link</Text>
            </Button>
          </View>
          <View style={{marginBottom: 25, paddingTop: 10}}>
            <TouchableOpacity onPress={props.navigateToMoreHelp}>
              <Text style={{alignSelf: 'center', color:'#d11e48'}}>Need more help?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{borderTopColor: '#979797', borderTopWidth: 1.2, borderBottomColor: '#979797', borderBottomWidth: 1.2, marginHorizontal: 45, alignItems:'center'}}>
          <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', paddingVertical: convertHeightPercentToDP('5%')}} onPress={props.loginFB}>
            <Icon type="Entypo" name="facebook" style={{color:"#3B5998"}}/><Text style={{color:"#3B5998", paddingLeft: 5}}>Log in With Facebook</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{paddingBottom: 10}}>
          <View style={{borderTopColor: "#979797", borderTopWidth: 1.2, borderBottomColor: "#979797", borderBottomWidth: 1.2}}>
            <View style={styles.informationWrapper1}>
              <TouchableOpacity style={styles.alignSelfCenter1}>
                <Icon type="Entypo" name="facebook" style={{color:"#3B5998"}}/><Text style={{color:"#3B5998"}}>Log in With Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
        <View style={styles.informationWrapper2}>
          <TouchableOpacity style={styles.alignSelfCenter} onPress={props.navigateToLogin}>
            <Text style={styles.backToLoginStyle}>Back To Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Content>
  </Container>
)

export default LoginTroubleshooting

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  content:{
    backgroundColor: '#fff',
    height: height,
    width: width
  },
  wrapper: {
    
  },
  item: {
    borderColor: '#979797',
    backgroundColor: '#f6f6f6',
    marginBottom: 20,
    borderRadius: 10,
    height: 50
  },
  logoImage: {
    marginTop: convertWidthPercentToDP('8%'),
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoSize:{
    width: 80, 
    height: 80 
  },
  buttonSendLinkWrapper:{
    paddingTop: 5, 
    paddingBottom: 10
  },
  buttonSendLinkStyle:{
    marginHorizontal: 50,
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonSendLinkStyleText:{
    color: '#fff', 
    fontSize: 16 
  },
  informationWrapper1:{
    marginTop: 40,
    marginBottom: 30,
  },
  informationWrapper2:{
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row', 
    justifyContent: 'center'
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
  backToLoginStyle:{
    color: '#d11e48'
  },
  backgroundColorWhite:{
    backgroundColor: '#fff'
  },
})