import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet } from 'react-native'
import { isEmpty, isEmail } from 'validator'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Button, Spinner, Text } from 'native-base'

import Login from '../components/Login'
import { login } from '../actions/login'
import { setFailed } from '../actions/processor'

class LoginContainer extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
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
      failed.condition === true &&
      failed.process_on === 'FAILED_PROCESS_LOGIN'
    ) {
      Alert.alert('Login gagal', 'Silahkan Cek Kembali Akun Anda!')
    } else if (
      loading.condition === false &&
      loading.process_on === 'LOADING_FETCH_USER_WITH_EMAIL' &&
      success.condition === true &&
      success.process_on === 'SUCCESS_FETCH_USER_WITH_EMAIL'
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
    console.log('Ini isi session' , data)
    if(data !== null){
      try{
        await this.props.login(data.email, data.password)
        this.props.navigation.navigate('HomeContainer')
      }catch(e){
        alert(e)
      }
    }
  }

  handleValidationLogin() {
    const { email, password } = this.state
      this.props.login(email, password)
      this.props.navigation.navigate('HomeContainer')
  }

  renderButtons() {
    const { email, password } = this.state
    const { loading } = this.props
		if (!isEmpty(email) && !isEmpty(password)) {
			return (
        <Button style={styles.buttonLoginActive} rounded onPress={() => this.handleValidationLogin()}>
          {loading.condition === true && loading.process_on === 'LOADING_PROCESS_LOGIN' ? (
            <Spinner color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonLoginActiveText}>Sign In</Text>
          )}
        </Button>
			)
		} else {
			return (
				<Button rounded bordered style={styles.buttonLoginInactive}>
					<Text style={styles.buttonLoginInactiveText}>Sign In</Text>
				</Button>
			)
		}
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Login 
        navigateToRegister={() => this.props.navigation.navigate("RegisterContainer")}
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        onChangeEmail={(email) => this.setState({email})}
        onChangePassword={(password) => this.setState({password})}
        renderButtons={this.renderButtons()}  
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonLoginActive: {
    backgroundColor: '#F85959',
    width: 135,
    height: 40,
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonLoginActiveText: {
    fontSize: 14,
    fontWeight: "bold",
    color: '#FFF',
    alignSelf: "center",
  },
  buttonLoginInactive: {
    width: 135,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
    borderColor: "#F85959"
  },
  buttonLoginInactiveText: {
    alignSelf: "center",
    fontSize: 12,
    color: "#F85959",
    fontWeight: "bold"
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