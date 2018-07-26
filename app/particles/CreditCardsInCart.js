import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

const RegexVisa = /^4\d{12}(\d{3})?$/
const RegexMasterCard = /^(5[1-5]\d{4}|677189)\d{10}$/

const CreditCardsInCard = (props) => (
  <View style={{
    borderRadius:1,
    borderColor: props.card_default ? '#d11e48' : '#E2E2E2',
    borderWidth:1,
    marginBottom:5
  }}>
    <View style={styles.contentCard}>
      <View style={styles.viewFlex3}>
        <Image source={
          RegexVisa.test(props.cardNumber) ? require('../assets/images/icon/visa.png') 
          : RegexMasterCard.test(props.cardNumber) ? require('../assets/images/icon/mastercard.png')
            : require('../assets/images/icon/unknowncard.png')
        } style={styles.image}/>
      </View>
      <View style={styles.wrapLeft}>
        <Text style={styles.txtHeader}>{props.card_name}</Text>
        <Text style={styles.txtHeader}>{props.cardNumberFormated}</Text>
        <Text>EXP: {props.mm} / {props.yyyy}</Text>
      </View>
      <View style={styles.wrapRight}>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
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

export default CreditCardsInCard