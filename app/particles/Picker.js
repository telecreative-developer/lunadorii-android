import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Picker = (props) => (
  <View style={{
    width: '100%',
    padding: 5
  }}>
    <TouchableOpacity style={{backgroundColor: '#f6f6f6', borderRadius: 5, padding: 10}} onPress={props.onSelect}>
      <Text>{props.data}</Text>
    </TouchableOpacity>
  </View>
)

export default Picker