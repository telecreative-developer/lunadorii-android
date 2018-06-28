import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const ProductReviewed = (props) =>(
  <View style={styles.viewReviews}>
    <View style={styles.viewRow}>
      <View style={styles.flexOnly2}>
        <Image source={{uri: props.image}} style={styles.image}/>  
      </View>
      <View style={styles.flexOnly8}>
        <View style={styles.viewRow}>
          <View style={styles.flexOnly8}>
            <Text style={styles.txtTitle}>{props.title}</Text>
          </View>
        </View> 
        <View style={styles.viewPrice}>
          <Text style={styles.txtPrice}>Rp {props.price}</Text>
        </View>
      </View>
    </View>
  </View> 
) 

export default ProductReviewed

const styles = StyleSheet.create({
  viewRow:{
    flexDirection: 'row'
  },
  txtPrice:{
    marginTop: 5
  },
  rating:{
    marginTop: 5
  },
  txtEdit:{
    alignSelf: 'flex-end', 
    paddingRight: 10, 
    paddingTop: 10, 
    color: '#f65857'
  },
  image:{
    width: 50, 
    height: 50, 
    margin: 10
  },
  viewReviews:{
    marginTop: 10, 
    borderWidth: 1, 
    borderColor: '#e2e2e2'
  },
  flexOnly8:{
    flex: 0.8
  },
  flexOnly2:{
    flex: 0.2
  },
  txtTitle:{
    fontWeight: 'bold', 
    fontSize: 16, 
    paddingTop: 10
  },
  viewPrice:{
    paddingRight: 10, 
    paddingBottom: 10
  }
})