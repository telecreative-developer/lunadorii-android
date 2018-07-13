import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Banks = (props) => (
  <View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>BCA</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>BRI</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>Mandiri</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)

export default Banks