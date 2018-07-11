import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Picker = (props) => (
  <View style={{
    width: '100%',
    borderRadius: 5,
    borderColor: '#f6f6f6'
  }}>
    <TouchableOpacity style={{padding: 5}} onPress={props.onSelect}>
      <Text>{props.data}</Text>
    </TouchableOpacity>
  </View>
)

export default Picker