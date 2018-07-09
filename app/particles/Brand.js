import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'

const Product = (props) => (
  <View style={styles.viewImage}>
    <TouchableHighlight onPress={props.action}>
      <Image source={{uri: props.image}} style={styles.image}/>
    </TouchableHighlight>
  </View>
)
const styles = StyleSheet.create({
  viewImage:{
    borderWidth: 1, 
    borderColor: '#e2e2e2', 
    width: 150, 
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  image:{
    resizeMode: 'contain',
    width: 100, 
    height: 60, 
    padding: 10, 
    justifyContent: 'center', 
    alignSelf: 'center'
  }
})

export default Product
