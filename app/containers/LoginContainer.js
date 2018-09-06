import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet, Text, BackAndroid, Platform, BackHandler, View, TouchableOpacity } from 'react-native'
import { isEmpty, isEmail } from 'validator'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';
import { Button, Spinner } from 'native-base'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import I18n from '../i18n'

import Login from '../components/Login'
import { login, loginFB, loginGoogle } from '../actions/login'
import { setFailed } from '../actions/processor'

import FBSDK from 'react-native-fbsdk';

const { LoginButton, LoginManager, AccessToken } = FBSDK;

class LoginContainer extends Component {

  constructor() {
    super()

    this.state = {
      userInfo: null,
      error: null,
      email: '',
      password: '',
      passwordFieldVisibility: true,
      modalVisibleInvalidCredentialModal: false
    }
  }

  logoutFB(){
    LoginManager.logOut()
  }

  togglePasswordFieldVisibility(){
    this.setState({passwordFieldVisibility: !this.state.passwordFieldVisibility})
  }

  modalVisibleInvalidCredentialModal(){
    this.setState({modalVisibleInvalidCredentialModal: !this.state.modalVisibleInvalidCredentialModal})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      return true
    }

    if (nextState !== this.state) {
      return true
    }

    return false
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.success.condition && prevProps.success.process_on === 'SUCCESS_PROCESS_LOGIN') {
      return {
        logged: true,
        loginPlatform: null,
        loginMessage: null
      }
    } else if (
      prevProps.failed.condition &&
      prevProps.failed.process_on === 'FAILED_PROCESS_LOGIN'
    ) {
      return {
        logged: false,
        loginPlatform: null,
        loginMessage: prevProps.failed.message
      }
    } 

    return null
  }

  async componentDidMount() {
    this._configureGoogleSignIn();
    await this._getCurrentUser();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      if (snapshot.logged) {
        const { navigation } = this.props
        navigation.dispatch(
          StackActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'HomeContainer'})]
          })
        )
      } else {
        Alert.alert('Login gagal', snapshot.loginMessage)
      }
    }
  }

  handleValidationLogin() {
    const { email, password } = this.state
    console.log(email , password)
    if (isEmpty(email)) {
      Alert.alert('Login gagal', 'Silahkan masukan alamat email yang valid')
    } else {
      this.props.login(email, password)
    }
  }

  renderButtons() {
    const { email, password } = this.state
    const { loading } = this.props
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!isEmpty(email) && !isEmpty(password) && regexEmail.test(email) === true) {
			return (
        <Button full style={styles.buttonLoginActive} onPress={()=> this.handleValidationLogin()}>
          {loading.condition === true && loading.process_on === 'LOADING_PROCESS_LOGIN' ? (
            <Spinner color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonLoginActiveText}>{I18n.t('login_button_login')}</Text>
          )}
        </Button>
			)
		} else {
			return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between',width: '100%'}}>
          <View style={{padding: 5, backgroundColor: '#e2e2e2',  borderRadius: 5, marginBottom: 10, alignItems:'center'}}>
            {password ? (
              <Text>Invalid Email</Text>
            ) : (
              <Text>Invalid Password</Text>
            )}
          </View>
          <Button bordered full style={styles.buttonLoginInactive} disabled>
            <Text style={styles.buttonLoginInactiveText}>{I18n.t('login_button_login')}</Text>
          </Button>
        </View>
			)
		}
  }

  _configureGoogleSignIn() {
    const configPlatform = {
      ...Platform.select({
        ios: {
          iosClientId: "87885804671-n4iihjgh90vtks4cp2229fbd5r975n0f.apps.googleusercontent.com",
        },
        android: {},
      }),
    };

    GoogleSignin.configure({
      ...configPlatform,
      webClientId: "87885804671-4spoagki6vvi6fc1l5pcm5an32lth8u8.apps.googleusercontent.com",
      offlineAccess: false,
    });
  }

  async _getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  googleButton(){
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 212, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={this._signIn}
        />
      </View>
    )
  }

  renderError() {
    const { error } = this.state;
    return (
      !!error && (
        <Text>
          {error.toString()} code: {error.code}
        </Text>
      )
    );
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await this.props.loginGoogle(userInfo.user.givenName, userInfo.user.familyName, userInfo.user.photo, userInfo.user.email)
      this.setState({ error: null });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        alert('sign in was cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        alert('operation in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <Login 
        modalVisibleInvalidCredentialModal={this.state.modalVisibleInvalidCredentialModal}
        toggleInvalidCredentialModal={() => this.modalVisibleInvalidCredentialModal()}

        navigateToRegister={() => this.props.navigation.navigate("RegisterContainer")}
        navigateToLoginTroubleshooting={() => this.props.navigation.navigate("LoginTroubleshootingContainer")}
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        onChangeEmail={(email) => this.setState({email})}
        onChangePassword={(password) => this.setState({password})}
        renderButtons={this.renderButtons()}
        passwordFieldVisibility={this.state.passwordFieldVisibility}
        togglePasswordFieldVisibility={() => this.togglePasswordFieldVisibility()} 
        loginFB={this.props.loginFB}
        logoutFB={this.logoutFB}
        googleButton={this.googleButton()}
        skipLogin={() => this.props.navigation.navigate("HomeContainer")}
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonLoginActive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonLoginActiveText:{
    color: '#fff', 
    fontSize: 18 
  },
  buttonLoginActive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonLoginActiveText:{
    color: '#fff', 
    fontSize: 18 
  },
  buttonLoginInactive: {
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#fff',
    borderColor:'#d11e48'
  },
  buttonLoginInactiveText: {
    color: '#d11e48', 
    fontSize: 18 
  }
})

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  loginFB: () => dispatch(loginFB()),
  loginGoogle: (first_name, last_name, avatar_url, email) => dispatch(loginGoogle(first_name, last_name, avatar_url, email)),
  setFailed: (condition, process_on, message) => dispatch(setFailed(condition, process_on, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)