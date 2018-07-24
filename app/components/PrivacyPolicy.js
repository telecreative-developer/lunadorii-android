import React, { Component } from 'react'
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View } from 'native-base'
import Navbar from '../particles/Navbar'
const { height, width } = Dimensions.get('window')

const PrivacyPolici = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Privacy & Policy"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <View style={styles.textContentWrapper}>
        <Text style={styles.bigText}>Personal Data collected for the following</Text>
        <Text style={styles.bigText}>purposes and using the following services</Text>
        <Text style={styles.bigText}>services:</Text>
      </View>
      <View style={styles.textContentWrapper}>
        <Text style={styles.textTitle}>Access to third party services's accounts</Text>
        <Text>Access to Facebook account</Text>
        <Text>Permission: Email</Text>
        <Text>Tweeter account access</Text>
        <Text>Personal Data: various types of Data as spesified in the privacy policy of the service</Text>
      </View>
      <View style={styles.textContentWrapper}>
        <Text style={styles.textTitle}>Commercial affiliation</Text>
        <Text>ReferralCandy</Text>
        <Text>Personal Data: Cookies, Email Address, firts name, last name and Usage Data</Text>
      </View>
      <View style={styles.textContentWrapper}>
        <Text style={styles.textTitle}>Commercial affiliation</Text>
        <Text>
          Data transfer to countries that guarantee European standards, Data transfer
          abroad based on standard contractual clauses and Data transfer from the EU and
          /or Switzerland to the U.S based on Privacy Shield Personal Data: various types of Data
        </Text>
      </View>
    </Content>
  </Container>
)

export default PrivacyPolici

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  textContentWrapper: {
    padding: 10
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textTitle: {
    fontWeight: 'bold'
  }
})