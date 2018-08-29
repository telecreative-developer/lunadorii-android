import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native'
import I18n from '../i18n'

const ShippingAddress = (props) => (
  <View style={{
    borderRadius: 1.5,
    borderColor: props.address_default ? '#d11e48' : '#E2E2E2',
    borderWidth: 1,
    marginBottom: props.address_default ? 15 : 5
  }}>
    <View style={styles.contentCard}>
      <View style={styles.wrapLeft}>
        <Text style={styles.txtHeader}>{props.name}</Text>
        <Text>{props.numberPhone}</Text>
        <Text>{props.detail_address}</Text>
      </View>
      <View style={styles.wrapRight}>
        {props.address_default ? (
          <View/>
        ) : (
          <TouchableOpacity onPress={props.actionSetdefault}>
            <Text style={styles.txtAction}>{I18n.t('shipping_address_address_particle_setdefault')}</Text>
          </TouchableOpacity>
          
        )}
        <TouchableOpacity onPress={props.actionEdit}>
          <Text style={styles.txtAction}>{I18n.t('shipping_address_address_particle_edit_address')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.actionDelete}>
          <Text style={styles.txtAction}>{I18n.t('shipping_address_address_particle_remove')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
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