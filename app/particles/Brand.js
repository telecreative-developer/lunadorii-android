import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Product = (props) => (
  <View style={styles.viewImage}>
    <Image source={{uri: props.image}} style={styles.image}/>
  </View>
)
const styles = StyleSheet.create({
  viewImage:{
    borderWidth: 1, 
    borderColor: '#e2e2e2', 
    width: 150, 
    marginRight:20
  },
  image:{
    width: 100, 
    height: 60, 
    padding: 10, 
    justifyContent: 'center', 
    alignSelf: 'center'
  }
})

export default Product
