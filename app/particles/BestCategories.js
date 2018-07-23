import React from 'react'
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import imageSkinCare from '../assets/images/icon/skincare.png'
const { width, height } = Dimensions.get('window')

const BestCategories = (props) => (
  <TouchableOpacity onPress={props.action}>
    <View style={styles.viewCategories}>
      <View style={styles.viewFlexRow}>
        <View style={styles.viewFlex2}>
          <Image source={{uri: props.icon}} style={styles.image}/>
        </View>
        <View style={styles.viewFlex8}>
          <View style={styles.viewWrapper}>
            <Text style={styles.txtTitle}>{props.title}</Text>
            <Text>{props.total} Product</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  viewCategories:{
    borderWidth: 1, 
    borderColor: '#e2e2e2', 
    width: ( width - 30 ) / 2, 
    marginRight: 10, 
    marginBottom: 10, 
    padding: 10 
  },
  viewFlexRow:{
    flexDirection: 'row'
  },
  viewFlex2:{
    flex: 0.2
  },
  viewFlex8:{
    flex: 0.8
  },
  image:{
    width: 35, 
    height: 35, 
    alignSelf: 'center'
  },
  txtTitle:{
    fontWeight: 'bold', 
    color: '#f65857'
  },
  viewWrapper:{
    marginLeft: 10
  }
})

export default BestCategories