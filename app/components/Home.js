import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Container } from 'native-base'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'

const Home = (props) => (
  <Container style={{backgroundColor: '#fff'}}>
    <Navbar 
    navbarTitle="Home"
    navbarIcon="arrow-back"
    />
    <Text>Hello World</Text>
  </Container>
)

const styles = StyleSheet.create({
  
})

export default Home