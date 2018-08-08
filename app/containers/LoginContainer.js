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

  render() {
    const { navigate } = this.props.navigation
    console.log('state:', this.state.email)
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
  setFailed: (condition, process_on, message) => dispatch(setFailed(condition, process_on, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)