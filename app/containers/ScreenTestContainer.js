import React, { Component } from 'react'
import ScreenTest from '../components/ScreenTest'
import { Container, Button, Toast, Text } from 'native-base' 

export default class ScreenTestContainer extends Component{

  state={
    paymentCCModalVisible: false,
    showToast: false
  }

  toggleVisiblePaymentCCModal(){
    this.setState({paymentCCModalVisible: !this.state.paymentCCModalVisible})
  }



  render(){
    return(
      <Container>
        <Button onPress={()=> Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay'
          })}>
          <Text>Toast</Text>
        </Button>
      </Container>
      
    )
  }
}