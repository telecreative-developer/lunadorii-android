import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { convertWidthPercentToDP } from '../particles/Converter'
import { View, Text } from 'native-base'

const Categories = (props) => (
  <View style={styles.flexOnly2}>
    <TouchableOpacity style={styles.viewCategories} onPress={props.action}>
      <View>
        <Image source={{uri: props.icon}} style={styles.imageCategories} />
      </View>
    </TouchableOpacity>
    <View style={{width: convertWidthPercentToDP('20%')}}>
      <Text style={styles.titleCategories}>{props.title}</Text>
    </View>
  </View>
)

export default Categories

const styles = StyleSheet.create({
  flexOnly2: {
    flex: 0.25,
    paddingVertical: 5,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center'
  },
  viewCategories: {
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignSelf: 'center'
  },
  imageCategories: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    resizeMode: 'contain'
  },
  titleCategories: {
    textAlign: 'center',
    color: '#da4365',
    fontSize: 12,
    marginTop: 5
  }
})