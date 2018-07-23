import React, { Component } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { View, Text, TouchableOpacity } from 'react-native'
// rgba(255, 130, 130, 0.75)
const Reloader = (props) => (
  <View style={{opacity: 100,backgroundColor: 'rgba(255, 130, 130, 0.75)', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
    <Text style={{padding: 10, fontSize: 14}}>No internet connection</Text>
    <TouchableOpacity style={{padding: 10}} onPress={props.reloadAction}>
      <SimpleLineIcons name='reload' size={18}/>
    </TouchableOpacity>
  </View>
)

export default Reloader