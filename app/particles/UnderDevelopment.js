import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native'
import { Button } from 'native-base'
import MassageIcon from '../assets/images/icon/massage.png'
const { height, width } = Dimensions.get('window')

const UnderDevelopment = (props) => (
  <View 
    style={{
      marginVertical: 150,
      padding: 10, 
      alignItems: 'center',
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    }}>
    <View style={{padding: 10}}>
      <Image source={MassageIcon} style={{height: 121, width: 95}}/>
    </View>
    <View style={{padding: 10}}>
      <Text style={{fontSize: 20, color: '#ccc', textAlign: 'center'}}>Sorry this page being</Text>
      <Text style={{fontSize: 20, color: '#ccc', textAlign: 'center'}}>fixed</Text>
    </View>
  </View>
)

export default UnderDevelopment

const styles = StyleSheet.create({
  backToMart:{
    marginLeft:30,
    marginRight:30,
    marginTop: 60,
    height: 60,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  backToMartText:{
    color: '#fff', 
    fontSize: 18 
  },
})
