import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ChangePasswordModal from '../modals/ChangePasswordModal'
import ChangeEmailModal from '../modals/ChangeEmailModal'
import NotificationsModal from '../modals/NotificationsModal'
const { height, width } = Dimensions.get('window')

const Settings = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Settings"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <ChangePasswordModal
      navbarTitle="Change Password"
      navbarIcon="close"
      modalVisible={props.modalVisibleChangePassword}
      actionIcon={props.toggleModalChangePassword}

      currentPassword={props.currentPassword}
      newPassword={props.newPassword}
      newConfirmPassword={props.newConfirmPassword}

      onChangeCurrentPassword={props.onChangeCurrentPassword}
      onChangeNewPassword={props.onChangeNewPassword}
      onChangeConfirmPassword={props.onChangeConfirmPassword}
      buttonPassword={props.buttonPassword}
      handleChangePassword={props.handleChangePassword}
    />
    <ChangeEmailModal
      navbarTitle="Change Email"
      navbarIcon="close"
      modalVisible={props.modalVisibleChangeEmail}
      actionIcon={props.toggleModalChangeEmail}

      newEmail={props.newEmail}
      confirmEmail={props.confirmEmail}

      onChangeNewEmail={props.onChangeNewEmail}
      onChangeConfirmEmail={props.onChangeConfirmEmail}
      buttonEmail={props.buttonEmail}
      handleChangeEmail={props.handleChangeEmail}
    />
    <NotificationsModal
      navbarTitle="Notifications"
      navbarIcon="close"
      modalVisible={props.modalVisibleNotifications}
      actionIcon={props.toggleModalNotifications}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <TouchableOpacity style={styles.touchablePassword} onPress={props.toggleModalChangePassword}>
        <View style={styles.flexOnly9}>
          <View style={styles.viewPaddingLeft}>
            <Text style={styles.txtLabel}>Change Password</Text>
          </View>
        </View>
        <View style={styles.flexOnly1}>
          <FontAwesome name="chevron-right" style={styles.iconChange} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableEmail} onPress={props.toggleModalChangeEmail}>
        <View style={styles.flexOnly9}>
          <View style={styles.viewPaddingLeft}>
            <Text style={styles.txtLabel}>Change Email</Text>
          </View>
        </View>
        <View style={styles.flexOnly1}>
          <FontAwesome name="chevron-right" style={styles.iconChange} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableNotif} onPress={props.toggleModalNotifications}>
        <View style={styles.viewPaddingLeft}>
          <Text style={styles.txtLabel}>Notifications</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.flexOnly9}>
              <Text note>Get Interesting messages and offers</Text>
            </View>
            <View style={styles.flexOnly1}>
              <FontAwesome name="chevron-right" style={styles.iconNotif} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableLogout} onPress={props.actionLogout}>
        <View style={styles.viewPaddingLeft}>
          <Text style={styles.txtLabel}>Logout</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.flexOnly9}>
              <Text note>{props.userEmail}</Text>
            </View>
            <View style={styles.flexOnly1}>
              <MaterialCommunityIcons name="logout" style={styles.iconLogout} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  flexOnly9: {
    flex: 0.9
  },
  flexOnly1: {
    flex: 0.1
  },
  viewPaddingLeft: {
    paddingLeft: 20
  },
  touchablePassword: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    paddingTop: 15
  },
  touchableEmail: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    paddingTop: 15,
    paddingBottom: 10
  },
  touchableNotif: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    paddingTop: 10
  },
  touchableLogout: {
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    paddingTop: 10,
    paddingBottom: 10
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconChange: {
    fontSize: 16,
    alignSelf: 'flex-end',
    paddingRight: 20,
    top: 5
  },
  iconNotif: {
    fontSize: 16,
    alignSelf: 'flex-end',
    paddingRight: 20,
    bottom: 5
  },
  iconLogout: {
    fontSize: 24,
    alignSelf: 'flex-end',
    paddingRight: 10,
    bottom: 10
  }
})

export default Settings