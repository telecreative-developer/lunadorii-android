import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

const CreditCards = (props) => (
  <View style={styles.Card}>
    <View style={styles.contentCard}>
      <View style={styles.viewFlex3}>
        <Image source={require('../assets/images/icon/visa.png')} style={styles.image}/>
      </View>
      <View style={styles.wrapLeft}>
        <Text style={styles.txtHeader}>{props.cardNumber}</Text>
        <Text>EXP: {props.validationDate}</Text>
      </View>
      <View style={styles.wrapRight}>
        <TouchableOpacity onPress={props.action}>
          <Text style={styles.txtAction}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  Card:{
    borderRadius:1,
    borderColor:'#E2E2E2',
    borderWidth:1,
    marginBottom:5
  },
  contentCard:{
    margin:10,
    flexDirection:'row',
    flex:1,
  },
  wrapLeft:{
    flex:1,
  },
  wrapRight:{
    alignItems:'flex-end'
  },
  txtHeader:{
    fontSize:16,
    fontWeight:'bold',
  },
  txtAction:{
    fontSize:14,
    color:'#d11e48',
    marginBottom:5
  },
  viewFlex3:{
    flex: 0.3
  },
  image:{
    width: 50, 
    height: 50
  }
})

export default CreditCards