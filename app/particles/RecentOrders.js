import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const RecentOrders = (props) => (
  <View style={{borderWidth: 1, borderColor: '#e2e2e2', padding: 10, marginRight: 10, width: 280}}>
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 0.3}}>
        <Image source={{uri: props.image}} style={{width: 70, height: 70}}/>
      </View>
      <View style={{flex: 0.7}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{props.date}, {props.time}</Text>
          <Text>{props.categories}</Text>
        </View>
      </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <View>
        <Text>Status: <Text style={{fontWeight: 'bold'}}>{props.status}</Text></Text>
      </View>
      <View>
        <Text>Total : <Text style={{fontWeight: 'bold'}}>Rp. {props.total}</Text></Text>
      </View>
    </View>
  </View>
)
const styles = StyleSheet.create({
 
})

export default RecentOrders
