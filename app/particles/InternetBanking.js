import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const InternetBanking = (props) => (
  <View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>INTERNET_BANKING_1</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>INTERNET_BANKING_2</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>INTERNET_BANKING_3</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)

export default InternetBanking