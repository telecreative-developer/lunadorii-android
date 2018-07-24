import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  } from 'react-native'
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Guides = (props) => (
  <View style={{padding: 10,flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{width: 20, height: 20, borderRadius: 10, margin: 9, alignItems: 'center', borderColor: '#ccc', borderWidth: 1}}>
      <Text>{props.index}</Text>
    </View>
    <View style={{marginRight: 20, width: 300}}>
      <Text style={{textAlign:'justify'}}>
        {props.contentGuides}
      </Text>
    </View>
  </View>
)

const GuideBCA = () => {
  return(
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1, backgroundColor: '#f6f6f6'}}>
      <Guides index={1} contentGuides={"On the main menu, choose Other Transaction bca"}/>
      <Guides index={2} contentGuides={"Choose Transfer."}/>
      <Guides index={3} contentGuides={"Choose Transfer To BCA Virtual Account."}/>
      <Guides index={4} contentGuides={"Enter your Payment Code (11 digits code) and press Correct."}/>
      <Guides index={5} contentGuides={"Enter the full amount to be paid and press Correct."}/>
      <Guides index={6} contentGuides={"Your payment details will appear on the payment confirmation page. If the information is correct press Yes."}/>
    </View>
  )
}

const GuideBNI = () => {
  return(
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1, backgroundColor: '#f6f6f6'}}>
      <Guides index={1} contentGuides={"On the main menu, choose Others."}/>
      <Guides index={2} contentGuides={"Choose Transfer."}/>
      <Guides index={3} contentGuides={"Choose Savings Account."}/>
      <Guides index={4} contentGuides={"Choose To BNI Account."}/>
      <Guides index={5} contentGuides={"Enter the payment account number and press Yes."}/>
      <Guides index={6} contentGuides={"Enter the full amount to be paid. If the amount entered is not the same as the invoiced amount, the transaction will be declined."}/>
      <Guides index={7} contentGuides={"Amount to be paid, account number, and merchant name will appear on the payment confirmation page. If the information is correct, press Yes."}/>
      <Guides index={8} contentGuides={"You are done."}/>
    </View>
  )
}

const GuideMandiri = () => {
  return(
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1, backgroundColor: '#f6f6f6'}}>
      <Guides index={1} contentGuides={"On the main menu, choose Pay/Buy."}/>
      <Guides index={2} contentGuides={"Choose Others."}/>
      <Guides index={3} contentGuides={"Choose Multi Payment."}/>
      <Guides index={4} contentGuides={"Enter 70012 (Midtrans company code) and press Correct."}/>
      <Guides index={5} contentGuides={"Enter your Payment Code and press Correct."}/>
      <Guides index={6} contentGuides={"Your payment details will appear on the payment confirmation page. If the information is correct press Yes."}/>
    </View>
  )
}

const GuidePermata = () => {
  return(
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1, backgroundColor: '#f6f6f6'}}>
      <Guides index={1} contentGuides={"On the main menu, choose Other Transaction."}/>
      <Guides index={2} contentGuides={"Choose Payment."}/>
      <Guides index={3} contentGuides={"Choose Other Payment."}/>
      <Guides index={4} contentGuides={"Choose Virtual Account."}/>
      <Guides index={5} contentGuides={"Enter 16 digits Account No. and press Correct."}/>
      <Guides index={6} contentGuides={"Amount to be paid, account number, and merchant name will appear on the payment confirmation page. If the information is right, press Correct."}/>
      <Guides index={7} contentGuides={"Choose your payment account and press Correct."}/>
    </View>
  )
}


export default class Banks extends Component{
  
  renderGuides = (bankName) => {
    if(bankName === 'BCA'){
      return <GuideBCA/>
    }else if(bankName === 'BNI'){
      return <GuideBNI/>
    }else if(bankName === 'Mandiri'){
      return <GuideMandiri/>
    }else if(bankName === 'Permata'){
      return <GuidePermata/>
    }
  }

  render(){
    return(
      <View>
        <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
          <TouchableOpacity onPress={this.props.toggleGuide}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>{this.props.bankName}</Text>
              <FontAwesome name="chevron-down" style={{marginTop: 5}}/>
            </View>
          </TouchableOpacity>
        </View>
        {this.props.guide ? this.renderGuides(this.props.bankName) : <View/> }
      </View>
    )
  }
}