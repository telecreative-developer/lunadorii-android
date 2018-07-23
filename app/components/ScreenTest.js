import React, { Component } from 'react'
import { StyleSheet, StatusBar, Dimensions, Text } from 'react-native'
import { Container, Content, View, Button } from 'native-base'
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
      <Button full style={{
        marginTop: 20,
        height: 60,
        borderRadius: 10, 
        backgroundColor: '#d11e48'
      }}>
        <Text style={{
          color: '#fff', 
          fontSize: 18,
          padding: 10
        }}>Call modal</Text>
      </Button>
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