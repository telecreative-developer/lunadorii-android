// import React, { Component } from 'react'
// import { View, Text, Alert, StyleSheet } from 'react-native'
// import { Spinner, Button } from 'native-base'
// import { isEmail, isEmpty } from "validator"
// import { connect } from 'react-redux'

// import RegisterIdentify from '../components/RegisterIdentify'
// import { setNavigate } from '../actions/processor'
// import { register} from '../actions/register'

// class RegisterIdentifyContainer extends Component {

//   constructor(){
//     super()

//     this.state = {
//       passwordFieldVisibility: true,
//       first_name:'',
//       last_name:'',
//       password:'',
//       email:''
//     }
//   }

//   async componentDidMount(){
//     email = this.props.navigation.state.params.email
//     await this.setState({email})
//     await alert(JSON.stringify(this.state.email))
//   }

//   togglePasswordFieldVisibility(){
//     this.setState({passwordFieldVisibility: !this.state.passwordFieldVisibility})
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     if(nextProps !== this.props){
//       return true
//     }

//     if(nextState !== this.state){
//       return true
//     }

//     return false
//   }

//   componentWillUpdate(nextProps){
//     const { loading, success, failed, navigation } = nextProps
//     if(
//       nextProps.success.condition === true && 
//       nextProps.success.process_on === 'SUCCESS_REGISTER'
//     ){
//       Alert.alert('Register Successfull!')
//     }

//     if(
//       nextProps.failed.condition === true && 
//       nextProps.failed.process_on === 'FAILED_REGISTER'
//     ) {
//       Alert.alert('Register Failed!', nextProps.failed.message)
//     }

//   }

//   renderButton(){
//     const { first_name, last_name, email, password } = this.state
//     const { loading } = this.props
//     const regexEmail = /^[^@]+@(yahoo|gmail)\.(com|net)$/i

//     if (!isEmpty( String(JSON.stringify(first_name)) ) &&
//         !isEmpty(String(JSON.stringify(last_name))) &&
//         !isEmpty(String(JSON.stringify(email))) &&
//         regexEmail.test(email) === true &&
//         !isEmpty(String(JSON.stringify(password)))) {
//         return (
//           <View style={styles.formRegister}>
//             {loading.condition === true && loading.process_on === 'LOADING_REGISTER' ? (
//               <Button full style={styles.buttonRegisterActive}>
//                 <Spinner color="#FFFFFF" />
//               </Button>
//               ) : (
//               <Button full style={styles.buttonRegisterActive} onPress={() => this.handleValidationRegister()} rounded center>
//                 <Text style={styles.buttonRegisterActiveText}>Next</Text>
//               </Button>
//               )}
//           </View>
//         )
//     } else {
//       return (
//         <View style={styles.formRegister}>
//           <Button bordered full style={styles.buttonRegisterInactive}>
//             <Text style={styles.buttonRegisterInactiveText}>Register</Text>
//           </Button>
//         </View>
//       )
//     }
//   }

//   handleValidationRegister(nextProps){
//     const { email } = this.state
//     // if (!isEmail(String(JSON.stringify(email)))) {
//     //   console.log('Ini email', email)
//     //   Alert.alert('Register gagal', 'Silahkan masukan alamat email yang valid')
//     // } else {
//     //   this.props.register(this.state)
//     //   this.props.navigation.navigate('HomeContainer', {user: this.state})
//     //   this.setState({
//     //     first_name: '',
//     //     last_name: '',
//     //     email: '',
//     //     password: ''
//     //   })
//     // }
//     this.props.register(this.state)
//     this.props.navigation.navigate('LoginContainer', {user: this.state})
//     this.setState({
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: ''
//     })
//   }

//   render() {
//     const { first_name, last_name, email, password } = this.state
//     return (
//       <RegisterIdentify
//         togglePasswordFieldVisibility={this.togglePasswordFieldVisibility()}
//         passwordFieldVisibility={this.state.passwordFieldVisibility}

//         first_name={first_name}
//         last_name={last_name}
//         email={email}
//         password={password}

//         onChangeFirstName={(first_name)=>this.setState({first_name})}
//         onChangeLastName={(last_name)=> this.setState({last_name})}
//         onChangeEmail={(email)=> this.setState({email})}
//         onChangePassword={(password)=> this.setState({password})}
//         renderButton={this.renderButton()}
//       />
//     )
//   }
// }

// const mapStateToProps = state => ({
//   loading: state.loading,
//   success: state.success,
//   failed: state.failed
// })

// const mapDispatchToProps = dispatch => ({
//   register: (data) => dispatch(register(data))
// })

// const styles = StyleSheet.create({
//   formRegister:{
//     paddingTop: 5, 
//     paddingBottom: 10
//   },
//   buttonRegisterActive:{
//     height: 50,
//     borderRadius: 10, 
//     backgroundColor: '#d11e48'
//   },
//   buttonRegisterActiveText:{
//     color: '#fff', 
//     fontSize: 18 
//   },
//   buttonRegisterInactive:{
//     height: 50,
//     borderRadius: 10, 
//     backgroundColor: '#fff',
//     borderColor:'#d11e48'
//   },
//   buttonRegisterInactiveText:{
//     color: '#d11e48', 
//     fontSize: 18 
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(RegisterIdentifyContainer)

import React, { Component } from 'react'
import RegisterIdentify from '../components/RegisterIdentify'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { Button, Spinner} from 'native-base'
import { connect } from 'react-redux'
import { isEmpty } from 'validator'

import Register from '../components/Register'
import { setNavigate } from '../actions/processor'
import { register} from '../actions/register'

class RegisterIdentifyContainer extends Component {

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

  async componentDidMount(){
    email = this.props.navigation.state.params
    await this.setState({email: email.email})
    console.log('isi Session' , this.state )
  }

  togglePasswordFieldVisibility(){
    this.setState({passwordFieldVisibility: !this.state.passwordFieldVisibility})
  }

  renderButton(){
        const { first_name, last_name, email, password } = this.state
        const { loading } = this.props
        // const regexEmail = /^[^@]+@(yahoo|gmail)\.(com|net)$/i
    
        if (!isEmpty( String(JSON.stringify(first_name)) ) &&
            !isEmpty(String(JSON.stringify(last_name))) &&
            !isEmpty(String(JSON.stringify(email))) &&
            // regexEmail.test(email) === true &&
            !isEmpty(String(JSON.stringify(password)))) {
            return (
              <View style={styles.formRegister}>
                {loading.condition === true && loading.process_on === 'LOADING_REGISTER' ? (
                  <Button full style={styles.buttonRegisterActive}>
                    <Spinner color="#FFFFFF" />
                  </Button>
                  ) : (
                  <Button full style={styles.buttonRegisterActive} onPress={() => this.handleValidationRegister()} rounded center>
                    <Text style={styles.buttonRegisterActiveText}>Next</Text>
                  </Button>
                  )}
              </View>
            )
        } else {
          return (
            <View style={styles.formRegister}>
              <Button bordered full style={styles.buttonRegisterInactive}>
                <Text style={styles.buttonRegisterInactiveText}>Register</Text>
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

  render(){
    const { first_name, last_name, email, password } = this.state

    return(
      <RegisterIdentify
        passwordFieldVisibility={this.state.passwordFieldVisibility}
        togglePasswordFieldVisibility={() => this.togglePasswordFieldVisibility()}

        first_name={first_name}
        last_name={last_name}
        email={email}
        password={password}

        navigateToLogin={() => this.props.navigation.navigate('LoginContainer')}
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
  formRegister:{
    paddingTop: 5, 
    paddingBottom: 10
  },
  buttonRegisterActive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonRegisterActiveText:{
    color: '#fff', 
    fontSize: 18 
  },
  buttonRegisterInactive:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#fff',
    borderColor:'#d11e48'
  },
  buttonRegisterInactiveText:{
    color: '#d11e48', 
    fontSize: 18 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterIdentifyContainer)
