import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Container, Content, Text, View } from 'native-base'
import Navbar from '../particles/Navbar'

const PrivacyPolici = (props) => (
  <Container>
    <Navbar
      navbarTitle="Privacy & Policy"
      navbarIcon="arrow-back"
      actionIcon={props.goback}/>
    <Content>
      <View style={{padding: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Personal Data collected for the following</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>purposes and using the following services</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>services:</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontWeight: 'bold'}}>Access to third party services's accounts</Text>
        <Text>Access to Facebook account</Text>
        <Text>Permission: Email</Text>
        <Text>Tweeter account access</Text>
        <Text>Personal Data: various types of Data as spesified in the privacy policy of the service</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontWeight: 'bold'}}>Commercial affiliation</Text>
        <Text>ReferralCandy</Text>
        <Text>Personal Data: Cookies, Email Address, firts name, last name and Usage Data</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontWeight: 'bold'}}>Commercial affiliation</Text>
        <Text>ReferralCandy</Text>
        <Text>Personal Data: Cookies, Email Address, firts name, last name and Usage Data</Text>
      </View>
    </Content>
  </Container>
)

export default PrivacyPolici