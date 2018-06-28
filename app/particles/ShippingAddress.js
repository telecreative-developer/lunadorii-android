import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const ShippingAddress = (props) => (
  <View style={styles.Card}>
    <View style={styles.contentCard}>
      <View style={styles.wrapLeft}>
        <Text style={styles.txtHeader}>{props.name}</Text>
        <Text>{props.numberPhone}</Text>
        <Text>{props.detail_address}</Text>
      </View>
      <View style={styles.wrapRight}>
        <TouchableOpacity onPress={props.action}>
          <Text style={styles.txtAction}>Edit Address</Text>
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
  txtAction: {
    fontSize: 14,
    color: '#d11e48',
    marginBottom: 5
  }
})

export default ShippingAddress