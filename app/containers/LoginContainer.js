import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet, Text } from 'react-native'
import { isEmpty, isEmail } from 'validator'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Button, Spinner } from 'native-base'

import Login from '../components/Login'
import { login } from '../actions/login'
import { setFailed } from '../actions/processor'

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
      failed.condition === false &&
      failed.process_on === 'FAILED_PROCESS_LOGIN'
    ) {
      Alert.alert('Login gagal', 'Silahkan Cek Kembali Akun Anda!')
    } else if (
      loading.condition === false &&
      loading.process_on === 'LOADING_FETCH_USER_WITH_ID' &&
      success.condition === true &&
      success.process_on === 'SUCCESS_FETCH_USER_WITH_ID'
    ) {
      navigation.navigate('HomeContainer')
    }
  }

  componentDidUpdate(prevProps) {
    const { failed, setFailed } = prevProps
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(data !== null){
      try{
        this.props.navigation.navigate('HomeContainer')
      }catch(e){
        alert(e)
      }
    }
  }

  handleValidationLogin() {
    const { email, password } = this.state
      this.props.login(email, password)
  }

  renderButtons() {
    const { email, password } = this.state
    const { loading } = this.props
		if (!isEmpty(email) && !isEmpty(password)) {
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
				<Button bordered full style={styles.buttonLoginInactive}>
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