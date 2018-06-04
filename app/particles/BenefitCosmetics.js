import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native'
import { ModalEditQuantity } from '../particles/Modal'

const BenefitCosmetics = (props) => (
  <View style={styles.Card}>
     <View style={styles.contentCard}>
       <Image source={{uri: props.image}} style={styles.image}/>
       <View style={styles.wrapLeft}>
         <Text style={styles.txtHeader}>Benefit Cosmetics</Text>
         <Text style={styles.txtDetail}>{props.title}</Text>
         <Text style={styles.txtBlank}></Text>
         <Text style={styles.txtDetail}>Quantity: <Text style={styles.txtpcs}>{props.quantity} pcs</Text></Text>
       </View>
       <View style={styles.wrapRight}>
         <Text style={styles.txtHeader}>Rp {props.price}</Text>
         <TouchableOpacity onPress={props.openModalEditQuantity}>
           <Text style={styles.txtAction}>Edit Quantity</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.txtAction}>Remove</Text>
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
  image:{
    width:75,
    height:75,
    marginRight:10
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
  txtDetail:{
    fontSize:14,
  },
  txtBlank:{
    marginVertical:5
  },
  txtAction:{
    fontSize:14,
    color:'#d11e48',
    marginBottom:5
  },
  txtpcs:{
    fontSize:14,
    fontWeight:'bold'
  },
})

export default BenefitCosmetics