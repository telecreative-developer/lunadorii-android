import React, { Component } from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Alert } from "react-native"
import { Button, Spinner, Text} from 'native-base'
import {isEmpty, isEmail} from 'validator'
import {View} from 'react-native'
import I18n from '../i18n'

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps !== this.props) {
  //     return true
  //   }

  //   if(nextState !== this.state) {
  //     return true
  //   }

  //   return false
  // }

  // getSnapshotBeforeUpdate(prevProps) {
  //   if (
  //     prevProps.success.condition &&
  //     prevProps.success.process_on === 'SUCCESS_PROCESS_CHECK_EMAIL'
  //   ) {
  //     return {
  //       register: true,
  //       platform: 'BASIC',
  //       message: null
  //     }
  //   } else if (
  //     prevProps.failed.condition &&
  //     prevProps.failed.process_on === 'FAILED_PROCESS_CHECK_EMAIL'
  //   ) {
  //     return {
  //       register: false,
  //       platform: 'BASIC',
  //       message: prevProps.failed.message
  //     }
  //   }

  //   return null
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (snapshot !== null) {
  //     if (snapshot.register && snapshot.platform === 'BASIC') {
  //       prevProps.navigation.navigate('RegisterIdentifyContainer', prevState)
  //     } else {
  //       Alert.alert('Register gagal', snapshot.message)
  //     }
  //   }
  // }

  // ValidationEmail() {
  //   const { email } = this.state
  //     this.props.checkEmail(email)
  //     console.log("email", email)
  // }

  // renderButton() {
  //   const { email } = this.state
  //   const { loading } = this.props
  //   {console.log('Test Button' , this.ValidationEmail())}
	// 	if (!isEmpty(email)) {
	// 		return (
  //       <Button full style={styles.buttonLoginActive} onPress={()=> this.ValidationEmail()}>
  //         {loading.condition === true && loading.process_on === 'LOADING_PROCESS_CHECK_EMAIL' ? (
  //           <Spinner color="#FFFFFF" />
  //         ) : (
  //           <Text style={styles.buttonLoginActiveText}>NEXT</Text>
  //         )}
  //       </Button>
	// 		)
	// 	} else {
	// 		return (
	// 			<Button bordered full style={styles.buttonLoginInactive}>
	// 				<Text style={styles.buttonLoginInactiveText}>NEXT</Text>
	// 			</Button>
	// 		)
	// 	}
  // }

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
      Alert.alert('Login Failed', 'Email Already Use!')
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

  async handleValidationCheckEmail(){
    const {email} = await this.state
    await this.props.checkEmail(email)
    await this.setState({email:""})
  }

  renderButton() {
    const { email } = this.state
    const { loading } = this.props
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!isEmpty(email) && 
        regexEmail.test(email) === true) {
			return (
        <Button full style={styles.buttonLoginActive} onPress={()=> this.handleValidationCheckEmail()}>
          {loading.condition === true && loading.process_on === 'LOADING_PROCESS_CHECK_EMAIL' ? (
            <Spinner color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonLoginActiveText}>{I18n.t('register_button_next')}</Text>
          )}
        </Button>
			)
		} else {
			return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between',width: '100%'}}>
          <View style={{padding: 5, backgroundColor: '#e2e2e2',  borderRadius: 5, marginBottom: 10, alignItems:'center'}}>
            <Text>Invalid Email</Text>
          </View>
          <Button bordered full style={styles.buttonLoginInactive} disabled>
            <Text style={styles.buttonLoginInactiveText}>{I18n.t('register_button_next')}</Text>
          </Button>
        </View>
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
        handleNext={() => this.props.navigation.navigate('RegisterIdentifyContainer', { email: this.state.email })}
        skipLogin={() => this.props.navigation.navigate("HomeContainer")}/>
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