import React from 'react'
import { View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container } from 'native-base'
import LunadoriiPortraitLogo from '../assets/images/icon/lunadorii-highres.png'
const { height, width } = Dimensions.get('window')

const SplashScreen = (props) => (
  <Container>
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <View style={styles.style}>
      <Image source={LunadoriiPortraitLogo} style={{ width: 250, height: 65 }} />
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
