import React, { Component } from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Alert } from "react-native"
import { Button, Spinner, Text} from 'native-base'
import {isEmpty, isEmail} from 'validator'

import Register from '../components/Register'
import { checkEmail } from '../actions/register'
import { setFailed } from '../actions/processor'

class RegisterContainer extends Component{

  constructor (){
    super()

    this.state = {
      email:''
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
      failed.process_on === 'FAILED_PROCESS_CHECK_EMAIL'
    ) {
      Alert.alert('Register Failed', 'Email Already Use!')
    } else if (
      loading.condition === false &&
      loading.process_on === 'LOADING_PROCESS_CHECK_EMAIL' &&
      success.condition === true &&
      success.process_on === 'SUCCESS_PROCESS_CHECK_EMAIL'
    ) {
      navigation.navigate('RegisterIdentifyContainer' , {email: this.state.email})
    }
  }

  componentDidUpdate(prevProps) {
    const { failed, setFailed } = prevProps
  }

  handleValidationCheckEmail(){
    const {email} = this.state
    this.props.checkEmail(email)
  }

  renderButton() {
    const { email } = this.state
    const { loading } = this.props
		if (!isEmpty(email)) {
			return (
        <Button full style={styles.buttonLoginActive} onPress={()=> this.handleValidationCheckEmail()}>
          {loading.condition === true && loading.process_on === 'LOADING_PROCESS_CHECK_EMAIL' ? (
            <Spinner color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonLoginActiveText}>NEXT</Text>
          )}
        </Button>
			)
		} else {
			return (
				<Button bordered full style={styles.buttonLoginInactive}>
					<Text style={styles.buttonLoginInactiveText}>NEXT</Text>
				</Button>
			)
		}
  }

  render(){
    return(
      <Register 
        email={this.state.email}
        onChangeEmail={(email) => this.setState({email})}
        renderButton={this.renderButton()}
        navigateToLogin={() => this.props.navigation.navigate('LoginContainer')}
        handleNext={() => this.props.navigation.navigate('RegisterIdentifyContainer', { email: this.state.email })}/>
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

const mapStateToProps = (state) => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed
})

const mapDispatchToProps = dispatch => ({
  checkEmail: (email) => dispatch(checkEmail(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)