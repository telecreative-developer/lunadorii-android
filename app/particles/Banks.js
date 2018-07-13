import React, { Component } from 'react'
import { View, Text, TouchableOpacity,  } from 'react-native'
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Guides = (props) => (
  <View style={{padding: 10,flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{width: 20, height: 20, borderRadius: 10, margin: 9, alignItems: 'center', borderColor: '#ccc', borderWidth: 1}}>
      <Text>{props.index}</Text>
    </View>
    <View style={{marginRight: 20, width: 300}}>
      <Text style={{textAlign:'justify'}}>
        {props.contentGuides}
      </Text>
    </View>
  </View>
)

const Banks = (props) => (
  <View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity onPress={props.toggleBcaGuide}>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>BCA</Text>
          <FontAwesome name="chevron-down" style={{marginTop: 5}}/>
        </View>
      </TouchableOpacity>
    </View>
    {props.bcaGuide ? (
      <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1, backgroundColor: '#f6f6f6'}}>
        <Guides index={1} contentGuides={"neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "}/>
        <Guides index={2} contentGuides={"neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "}/>
        <Guides index={3} contentGuides={"neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "}/>
        <Guides index={4} contentGuides={"neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "}/>
        <Guides index={5} contentGuides={"neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "}/>
      </View>
    ) : (
      <View/>
    )}
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>BRI</Text>
          <FontAwesome name="chevron-down" style={{marginTop: 5}}/>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{borderTopColor: '#e2e2e2', borderTopWidth: 1}}>
      <TouchableOpacity>
        <View style={{paddingVertical: 10, paddingHorizontal: 20, margin:5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold',fontSize: 18}}>Mandiri</Text>
          <FontAwesome name="chevron-down" style={{marginTop: 5}}/>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)

export default Banks