import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content } from 'native-base'
import { ModalChangePassword, ModalNotification } from '../particles/Modal'
import Navbar from '../particles/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Settings = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Settings"
      navbarIcon="arrow-back"
    />
    <ModalChangePassword 
      navbarTitle= "Change Password"
      navbarIcon="close"
      modalVisible={props.modalVisiblePassword}
      actionIcon = {props.closeModalPassword}
    />
    
    <Content>
      <TouchableOpacity style={styles.touchablePassword} onPress={props.openModalPassword}>
        <View style={styles.flexOnly9}>
          <View style={styles.viewPaddingLeft}>
            <Text style={styles.txtLabel}>Change Password</Text>
          </View>
        </View>
        <View style={styles.flexOnly1}>
          <FontAwesome name="chevron-right" style={styles.iconChange}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableNotif}>
        <View style={styles.viewPaddingLeft}>
          <Text style={styles.txtLabel}>Notifications</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.flexOnly9}>
              <Text note>Get Interesting messages and offers</Text>
            </View>
            <View style={styles.flexOnly1}>
              <FontAwesome name="chevron-right" style={styles.iconNotif}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableLogout}>
        <View style={styles.viewPaddingLeft}>
          <Text style={styles.txtLabel}>Logout</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.flexOnly9}>
              <Text note>rendisimamora7127@gmail.com</Text>
            </View>
            <View style={styles.flexOnly1}>
              <MaterialCommunityIcons name="logout" style={styles.iconLogout}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  flexOnly9:{
    flex: 0.9
  },
  flexOnly1:{
    flex: 0.1
  },
  viewPaddingLeft:{
    paddingLeft: 20
  },
  touchablePassword:{
    flexDirection: 'row', 
    marginTop: 20, 
    borderTopWidth: 1, 
    borderColor: '#e2e2e2', 
    paddingTop: 15, 
    paddingBottom: 5
  },
  touchableNotif:{
    marginTop: 10, 
    borderTopWidth: 1, 
    borderColor: '#e2e2e2', 
    paddingTop: 10
  },
  touchableLogout:{
    marginTop: 10, 
    borderTopWidth: 1, 
    borderBottomWidth: 1, 
    borderColor: '#e2e2e2', 
    paddingTop: 10, 
    paddingBottom: 10
  },
  txtLabel:{
    fontSize: 16, 
    fontWeight: 'bold'
  },
  iconChange:{
    fontSize: 16, 
    alignSelf: 'flex-end', 
    paddingRight: 20, 
    top: 5
  },
  iconNotif:{
    fontSize: 16, 
    alignSelf: 'flex-end', 
    paddingRight: 20, 
    bottom: 5
  },
  iconLogout:{
    fontSize: 24, 
    alignSelf: 'flex-end', 
    paddingRight: 20, 
    bottom: 10
  }
})

export default Settings