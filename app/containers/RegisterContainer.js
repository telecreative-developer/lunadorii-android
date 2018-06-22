import React, { Component } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import { Spinner, Button } from 'native-base'
import { isEmail, isEmpty } from "validator"
import { connect } from 'react-redux'

import Register from '../components/Register'
import { setNavigate } from '../actions/processor'
import { register} from '../actions/register'

class RegisterContainer extends Component {

  constructor(){
    super()

    this.state = {
      first_name:'',
      last_name:'',
      password:'',
      email:''
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps !== this.props){
      return true
    }

    if(nextState !== this.state){
      return true
    }

    return false
  }

  componentWillUpdate(nextProps){
    const { loading, success, failed, navigation } = nextProps
    if(
      nextProps.success.condition === true && 
      nextProps.success.process_on === 'SUCCESS_REGISTER'
    ){
      Alert.alert('Register Successfull!')
    }

    if(
      nextProps.failed.condition === true && 
      nextProps.failed.process_on === 'FAILED_REGISTER'
    ) {
      Alert.alert('Register Failed!', nextProps.failed.message)
    }

  }

  renderButton(){
    const { first_name, last_name, email, password } = this.state
    const { loading } = this.props
    const regexEmail = /^[^@]+@(yahoo|gmail)\.(com|net)$/i

    if (!isEmpty( String(JSON.stringify(first_name)) ) &&
        !isEmpty(String(JSON.stringify(last_name))) &&
        !isEmpty(String(JSON.stringify(email))) &&
        regexEmail.test(email) === true &&
        !isEmpty(String(JSON.stringify(password)))) {
        return (
          <View style={styles.formRegister}>
            {loading.condition === true && loading.process_on === 'LOADING_REGISTER' ? (
              <Button rounded center style={styles.buttonRegisterActive}>
                <Spinner color="#FFFFFF" />
              </Button>
              ) : (
              <Button style={styles.buttonRegisterActive} onPress={() => this.handleValidationRegister()} rounded center>
                <Text style={styles.buttonRegisterActiveText}>Sign Up</Text>
              </Button>
              )}
          </View>
        )
    } else {
      return (
        <View style={styles.formRegister}>
          <Button style={styles.buttonRegisterInactive} rounded bordered>
            <Text style={styles.buttonRegisterInactiveText}>Sign Up</Text>
          </Button>
        </View>
      )
    }
  }

  handleValidationRegister(nextProps){
    const { email } = this.state
    // if (!isEmail(String(JSON.stringify(email)))) {
    //   console.log('Ini email', email)
    //   Alert.alert('Register gagal', 'Silahkan masukan alamat email yang valid')
    // } else {
    //   this.props.register(this.state)
    //   this.props.navigation.navigate('HomeContainer', {user: this.state})
    //   this.setState({
    //     first_name: '',
    //     last_name: '',
    //     email: '',
    //     password: ''
    //   })
    // }
    this.props.register(this.state)
    this.props.navigation.navigate('LoginContainer', {user: this.state})
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    })
  }

  render() {
    const { first_name, last_name, email, password } = this.state
    return (
      <Register 
        first_name={first_name}
        last_name={last_name}
        email={email}
        password={password}

        onChangeFirstName={(first_name)=>this.setState({first_name})}
        onChangeLastName={(last_name)=> this.setState({last_name})}
        onChangeEmail={(email)=> this.setState({email})}
        onChangePassword={(password)=> this.setState({password})}
        renderButton={this.renderButton()}
      />
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed
})

const mapDispatchToProps = dispatch => ({
  register: (data) => dispatch(register(data))
})

const styles = StyleSheet.create({
  buttonRegisterActive: {
    justifyContent: "center",
    backgroundColor: "#F85959",
    marginTop: 20,
    margin: 10,
    width: 135,
    height: 40,
    alignSelf: 'center'
  },
  buttonRegisterActiveText: {
    fontSize: 12,
    fontWeight: "bold",
    color:'#FFF',
    alignSelf: 'center'
  },
  buttonRegisterInactive: {
    width: 135,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
    borderColor: "#F85959",
    backgroundColor: "#FFFFFF"
  },
  buttonRegisterInactiveText: {
    fontSize: 12,
    color: "#F85959",
    fontWeight: "bold",
    alignSelf: 'center'
  },
  formRegister: {
    marginHorizontal: 30,
    marginTop: 10,
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
