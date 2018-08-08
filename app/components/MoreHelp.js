import React, { Component } from 'react'
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View } from 'native-base'
import Navbar from '../particles/Navbar'
import UnderDevelopment from '../particles/UnderDevelopment'
const { height, width } = Dimensions.get('window')

const MoreHelp = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="FAQ"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <UnderDevelopment/>
    </Content>
  </Container>
)

export default MoreHelp

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