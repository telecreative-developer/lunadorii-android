import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginTroubleshooting from '../components/LoginTroubleshooting'
import { forgotpassword } from '../actions/getSingleUser';

class LoginTroubleshootingContainer extends Component{

  constructor(){
    super()
    this.state={
      email:''
    }
  }

  async forgotpassword(){
    const {email} = await this.state
    await this.props.forgotpassword(email)
    await Alert.alert('Success', 'Please Check Your Email')
  }
  
  render(){
    console.log(this.state)
    return(
      <LoginTroubleshooting
        navigateToLogin={() => this.props.navigation.navigate('LoginContainer')}
        navigateToMoreHelp={() => this.props.navigation.navigate('MoreHelpContainer')}
        forgotpassword={() => this.forgotpassword()}
        emailValue={this.state.email}
        onChangeEmail={(email) => this.setState({email})}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    forgotpassword: (email) => dispatch(forgotpassword(email))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginTroubleshootingContainer)