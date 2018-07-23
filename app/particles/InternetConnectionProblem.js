import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { Button } from 'native-base'
import SadIcon from '../assets/images/icon/sad.png'
const { width, height } = Dimensions.get('window')

const InternetConnectionProblem = (props) => (
  <View style={styles.centeral}>
    <View>
      <Image source={SadIcon} style={{height: 100, width: 100}}/>
    </View>
    <View style={{padding: 10}}>
    <Text style={{fontSize: 18, color: '#000'}}>Unfortunately</Text>
    </View>
    <Text>No internet connection</Text>
    <Text>please check your internet and</Text>
    <Button full style={{
      marginTop: 20,
      height: 60,
      borderRadius: 10, 
      backgroundColor: '#d11e48'
    }}
    onPress={props.buttonAction}>
      <Text style={{
        color: '#fff', 
        fontSize: 18 
      }}>Try Again</Text>
    </Button>
  </View>
)

export default InternetConnectionProblem

const styles = StyleSheet.create({
  centeral: {
    alignItems:'center'
  }
})