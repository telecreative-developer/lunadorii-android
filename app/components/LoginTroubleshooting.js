import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Button } from 'native-base'

const LoginTroubleshooting = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.wrapper}>
        
      </View>
    </Content>
  </Container>
)

export default LoginTroubleshooting

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  content:{
    backgroundColor: '#fff'
  },
  wrapper: {
    paddingLeft: 45,
    paddingRight: 45
  }
})