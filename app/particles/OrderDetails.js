import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

//local-shipping
//payment
//check
//package

const OrderDetails = (props) => (
  <View style={styles.Card}>
    <View style={styles.contentCard}>
      <TouchableOpacity onPress={props.action}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.wrapLeft}>
        <TouchableOpacity onPress={props.action}>
          <Text style={styles.txtHeader}>{props.title}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapRight}>
        <TouchableOpacity onPress={props.action}>
          <Text style={styles.txtHeader}>Rp {props.priceDisc}</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text>Quantity : </Text>
          <TouchableOpacity onPress={props.action}>
            <Text style={styles.txtpcs}>{props.quantity} pcs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={{paddingHorizontal:10, paddingVertical: 5, flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#f6f6f6', alignItems: 'center'}}>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <Feather name="package" size={18} color={props.status === "PACKING" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "PACKING" ? '#d11e48' : ''}}>Packing</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={12} style={{marginLeft: 5, marginTop: 10}}/>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>      
          <MaterialIcons name="local-shipping" size={18} color={props.status === "SHIPPING" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "SHIPPING" ? '#d11e48' : ''}}>Shipping</Text>
        </View>
        <SimpleLineIcons name="arrow-right" size={12} style={{marginLeft: 5, marginTop: 10}}/>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 5}}>
          <MaterialIcons name="check" size={18} color={props.status === "DELIVERED" ? '#d11e48' : ''}/>
          <Text style={{fontSize: 12, color:props.status === "DELIVERED" ? '#d11e48' : ''}}>Delivered</Text>
        </View>
      </View> */}
      <View style={{justifyContent: 'flex-end', paddingHorizontal:5}}>
        <TouchableOpacity onPress={props.action}>
          <Text style={styles.txtMoreDetails}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  Card: {
    borderRadius: 1,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    marginBottom: 5
  },
  contentCard: {
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10
  },
  wrapLeft: {
    flex: 1
  },
  wrapRight: {
    alignItems: 'flex-end'
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5
  },
  txtDetail: {
    fontSize: 14,
  },
  txtMoreDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d11e48'
  },
  txtBlank: {
    marginVertical: 5
  },
  txtpcs: {
    fontSize: 14,
    fontWeight: 'bold'
  },
})

export default OrderDetails