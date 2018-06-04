import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { Container, Button, Icon, Content } from 'native-base'
import SVGImage from 'react-native-svg-image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'


const Payments = (props) => (
  <Container style={styles.container}>
    <Navbar 
    navbarTitle="Waiting for payment"
    navbarIcon="close"
    />
    <Content>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  
})

export default Payments