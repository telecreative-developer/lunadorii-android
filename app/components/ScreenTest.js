import React, { Component } from 'react'
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View } from 'native-base'
import Navbar from '../particles/Navbar'
import InternetConnectionProblem from '../particles/InternetConnectionProblem'
const { height, width } = Dimensions.get('window')

const ScreenTest = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Screen Test"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content contentContainerStyle={styles.container}>
      <InternetConnectionProblem buttonAction={props.buttonAction}/>
    </Content>
  </Container>
)

export default ScreenTest

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems:'center',
    flex: 1
  }
})