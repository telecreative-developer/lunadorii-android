import React, { Component } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { View, Text, TouchableOpacity } from 'react-native'
// rgba(255, 130, 130, 0.75)
const Reloader = (props) => (
  <View style={{opacity: 100,backgroundColor: 'rgba(255, 130, 130, 0.75)', height: 75, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{padding: 10, fontSize: 14, justifyContent: 'center'}}>No internet connection</Text>
  </View>
)

export default Reloader