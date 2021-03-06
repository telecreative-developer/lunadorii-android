import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import {change} from '../lib/StatusChanger'
import I18n from '../i18n'

const RecentOrders = (props) => (
  <View style={styles.viewBox}>
    <View style={styles.viewOnlyRow}>
      <View style={styles.viewFlex3}>
        <TouchableOpacity onPress={props.action}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewFlex7}>
        <TouchableOpacity onPress={props.action}>
          <View style={styles.viewOnlyColumn}>
            <Text style={styles.txtTitle}>{props.date}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.action}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.viewOnlyRow2}>
              <FontAwesome name="shopping-cart" size={12} style={{paddingRight: 5}} />
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.amountOfItem} {I18n.t('items_on_cart')}</Text>
            </View>
            <View style={styles.viewOnlyColumn}>
              <Text style={{fontSize: 12}}>{props.billing_code}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.viewFooter}>
      <View style={{flexDirection: 'row'}}>
        <Text>{I18n.t('status_order')} : </Text>
        <TouchableOpacity onPress={props.action}>
        {/* {props.paid_method === "credit_card" ? 
          <Text style={{fontWeight: 'bold', color: '#d11e47' }}> Success</Text>:
          <Text style={{fontWeight: 'bold', color: '#d11e47' }}>{props.status == null || props.status == '' ? change(props.status) : change(props.status)}</Text>
        } */}
          <Text style={{fontWeight: 'bold', color: '#d11e47' }}>{props.status == null || props.status == '' ? change(props.status) : change(props.status)}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Total : </Text>
        <TouchableOpacity onPress={props.action}>
          <Text style={{fontWeight: 'bold'}}>Rp. {props.total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
const styles = StyleSheet.create({
  viewBox: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 5,
    padding: 10,
    width: convertWidthPercentToDP('90%')
  },
  viewOnlyRow: {
    flexDirection: 'row'
  },
  viewOnlyRow2: {
    flexDirection: 'row',
  },
  viewOnlyColumn: {
    flexDirection: 'column'
  },
  viewFlex3: {
    flex: 0.3
  },
  viewFlex7: {
    flex: 0.7
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  image: {
    width: 70,
    height: 70
  },
  viewFooter: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})

export default RecentOrders
