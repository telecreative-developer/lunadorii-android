import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet, Text, BackAndroid, Platform, BackHandler } from 'react-native'
import { isEmpty, isEmail } from 'validator'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';
import { Button, Spinner } from 'native-base'

import Login from '../components/Login'
import { login } from '../actions/login'
import { setFailed } from '../actions/processor'
// import FBSDK from 'react-native-fbsdk';

// const { LoginButton, LoginManager, AccessToken } = FBSDK;

class LoginContainer extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      passwordFieldVisibility: true,
      modalVisibleInvalidCredentialModal: false
    }

    this.loginFB = this.loginFB.bind(this);
  }

  loginFB () {
    // AccessToken.getCurrentAccessToken()
    // .then((data) => {
    //   if (data !== null) {
    //     _this.initUser(data.accessToken);
    //   } else {
    //     // this.loginFBWithPermission();
    //     console.log('haha')
    //   }
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    alert("This feature is under development")
  }
  
  loginFBWithPermission() {
    const _this = this;
    LoginManager.logInWithReadPermissions(["public_profile", "email", "user_photos"])
    .then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
          AccessToken.getCurrentAccessToken().then((data) => {
            _this.initUser(data.accessToken);
          }).catch(err => {
            console.log(err)
          })
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
        Alert.alert('Error', 'Login fail with error: ' + error);
      }
    )
    .catch((err) => console.log(err));
  }
  
  initUser = (token1) => {
    this.setState({ loading: true });
    fetch('https://graph.facebook.com/v2.9/me?fields=id,name,email,picture{url}&access_token=' + token1) //--> parameter graph bisa diganti sesuai keinginan mengacu pada graph API Facebook
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
  }


  togglePasswordFieldVisibility(){
    this.setState({passwordFieldVisibility: !this.state.passwordFieldVisibility})
  }

  modalVisibleInvalidCredentialModal(){
    this.setState({modalVisibleInvalidCredentialModal: !this.state.modalVisibleInvalidCredentialModal})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps !== this.props) {
      return true
    }

    if(nextState !== this.state) {
      return true
    }

    return false
  }

  componentWillUpdate(nextProps) {
    const { loading, success, failed, navigation } = nextProps
    if (
      loading.condition === false &&
      loading.process_on === 'LOADING_PROCESS_LOGIN' &&
      failed.condition === true &&
      failed.process_on === 'FAILED_PROCESS_LOGIN'
    ) {
      Alert.alert('Login gagal', 'Silahkan Cek Kembali Akun Anda!')
    } else if (
      loading.condition === false &&
      loading.process_on === 'LOADING_FETCH_USER_WITH_ID' &&
      success.condition === true &&
      success.process_on === 'SUCCESS_FETCH_USER_WITH_ID'
    ) {
      this.props.navigation.dispatch(
        StackActions.reset({
          index:0,
          actions:[NavigationActions.navigate({routeName:'HomeContainer'})]
        })
      )
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed)
  }

  backPressed = () => {
    this.handleBack()
    return true
  }

   async handleBack() {
    await this.props.navigation.goBack()
    await this.props.setNavigate()
  }

  componentDidUpdate(prevProps) {
    const { failed, setFailed } = prevProps
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(data){
      try{
        this.props.navigation.dispatch(
          StackActions.reset({
            index:0,
            actions:[NavigationActions.navigate({routeName:'HomeContainer'})]
          })
        )
      }catch(e){
        alert(e)
      }
    }
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress = () => {
    this.props.navigation.navigate('RegisterContainer') // works best when the goBack is async
    return true;
  }

  handleValidationLogin() {
    const { email, password } = this.state
    // if (!isEmpty(email)) {
		// 	Alert.alert('Login Failed', 'Silahkan masukan alamat email yang valid')
		// } else {
			this.props.login(email, password)
		// }
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
            <Text style={styles.buttonLoginActiveText}>Login</Text>
          )}
        </Button>
			)
		} else {
			return (
				<Button bordered full style={styles.buttonLoginInactive} disabled>
					<Text style={styles.buttonLoginInactiveText}>Login</Text>
				</Button>
			)
		}
  }

  // navigateToRegister()
  // {
  //   this.props.navigation.navigate('RegisterContainer')
  // }

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
        loginFB={this.loginFB}
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
  setFailed: (condition, process_on, message) => dispatch(setFailed(condition, process_on, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)