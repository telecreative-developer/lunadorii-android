import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

const OrderDetails = (props) => (
  <View style={styles.Card}>
    <View style={styles.contentCard}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.wrapLeft}>
        <Text style={styles.txtHeader}>{props.title}</Text>
        <Text style={styles.txtDetail}>{props.categories}</Text>
        <Text style={styles.txtBlank}></Text>
      </View>
      <View style={styles.wrapRight}>
        <Text style={styles.txtHeader}>Rp {props.price}</Text>
        <Text style={styles.txtDetail}>Quantity: <Text style={styles.txtpcs}>{props.quantity} pcs</Text></Text>
      </View>
    </View>
    <View style={{paddingHorizontal: 10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'flex-start'}}>
      <View style={{width: 60, backgroundColor: props.status === "DELIVERED" ? '#d11e48' : '#e2e2e2', borderRadius: 5, alignItems: 'center', marginHorizontal: 5}}>
        <Text style={{color: '#fff'}}>Delivered</Text>
      </View>
      <View style={{width: 60, backgroundColor: props.status === "PACKING" ? '#d11e48' : '#e2e2e2', borderRadius: 5, alignItems: 'center', marginHorizontal: 5}}>
        <Text style={{color: '#fff'}}>Packing</Text>
      </View>
      <View style={{width: 60, backgroundColor: props.status === "CHECKOUT" ? '#d11e48' : '#e2e2e2', borderRadius: 5, alignItems: 'center', marginHorizontal: 5}}>
        <Text style={{color: '#fff'}}>Checkout</Text>
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
    flex: 1,
  },
  wrapRight: {
    alignItems: 'flex-end'
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtDetail: {
    fontSize: 14,
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