import React from 'react'
import { View, Image, StyleSheet, StatusBar } from 'react-native'
import { Container, Content, Text } from 'native-base'

const SplashScreen = (props) => (
  <Container>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <View style={styles.style}>
      <Image source={require('../assets/images/icon/LogoLD.png')} style={{ width: 250, height: 65 }} />
    </View>
  </Container >
)

export default SplashScreen

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})
