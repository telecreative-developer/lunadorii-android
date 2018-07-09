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
    <View style={{height: 25, width: 255, backgroundColor: '#f6f6f6', borderRadius: 5, marginBottom: 5}}/>
    <View style={{height: 25, width: 255, backgroundColor: '#f6f6f6', borderRadius: 5, marginBottom: 5}}/>
    <View style={{height: 25, width: 255, backgroundColor: '#f6f6f6', borderRadius: 5, marginBottom: 5}}/>
  </View>
)

const TitleOneLine = props => (
  <View>
    <View style={{height: 15, width: 120, backgroundColor: '#f6f6f6', borderRadius: 5, marginBottom: 5}}/>
  </View>
)

const CategoryPlaceholder = props => (
  <View>
    <View style={{height: 20, width: 100, backgroundColor: '#f6f6f6', marginVertical: 5,borderRadius: 5}}/>
  </View>
)

const StarPlaceholder = props => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
    <View style={{height: 10, width: 70, backgroundColor: '#f6f6f6',borderRadius: 5, marginRight: 5}}/>
    <View style={{height: 10, width: 70, backgroundColor: '#f6f6f6',borderRadius: 5}}/>
  </View>
)

const ReviewsAndRatings = props => (
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <View style={{height: 15, width: 80, backgroundColor: '#f6f6f6',borderRadius: 5, marginBottom: 5}}/>
    <View style={{height: 10, width: 100, backgroundColor: '#f6f6f6',borderRadius: 5}}/>
  </View>
)

const DescriptionPlaceholder = props => (
  <View style={styles.descriptionWrapper}>
    <View style={{height: 15, width: 100, backgroundColor: '#f6f6f6', marginBottom: 20, borderRadius: 5}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
    <View style={{height: 10, width: '100%', backgroundColor: '#f6f6f6', borderRadius: 5, marginVertical:3}}/>
  </View>
)

const RelatedProductsPlaceholder = props => (
  <View style={{width: 260, height: 180, backgroundColor: '#f6f6f6', marginLeft: 5}}/>
)

export {
  ProductShowPlaceholders,
  DescriptionPlaceholder,
  TitlePlaceholder,
  CategoryPlaceholder,
  StarPlaceholder,
  ReviewsAndRatings,
  TitleOneLine,
  RelatedProductsPlaceholder
}