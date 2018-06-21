import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const ResultNotFound = (props) => (
  <View>
    <View>
      {
        props.amount == 0 || props.amount == 1 ?
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Result {props.amount} product by "{props.searchTitle}"</Text>
          :
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Results {props.amount} product by "{props.searchTitle}"</Text>
      }
    </View>
    <View style={{ alignItems: 'center', paddingTop: 20 }}>
      <Image source={{ uri: "https://png.icons8.com/metro/1600/sad.png" }} style={{ height: 50, width: 50 }} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ccc', paddingTop: 10 }}>We're sorry, your search not found</Text>
    </View>
  </View>
)

export default ResultNotFound