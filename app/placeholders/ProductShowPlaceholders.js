import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const ProductShowPlaceholders = props => (
  <View style={styles.descriptionWrapper}>
    <View style={{height: 15, width: 100, backgroundColor: '#ccc', marginBottom: 20, borderRadius: 5}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#ccc', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#ccc', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#ccc', borderRadius: 5, marginVertical:3}}/>
  </View>
)

const TitlePlaceholder = props => (
  <View>
    <View style={{height: 25, width: 250, backgroundColor: '#f6f6f6', borderRadius: 5, marginBottom: 5}}/>
    <View style={{height: 25, width: 250, backgroundColor: '#f6f6f6', borderRadius: 5, marginBottom: 5}}/>
  </View>
)

const CategoryPlaceholder = props => (
  <View>
    <View style={{height: 20, width: 100, backgroundColor: '#f6f6f6', marginTop: 5,borderRadius: 5}}/>
  </View>
)

const DescriptionPlaceholder = props => (
  <View style={styles.descriptionWrapper}>
    <View style={{height: 15, width: 100, backgroundColor: '#f6f6f6', marginBottom: 20, borderRadius: 5}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
  </View>
)

export {
  ProductShowPlaceholders,
  DescriptionPlaceholder,
  TitlePlaceholder,
  CategoryPlaceholder
}