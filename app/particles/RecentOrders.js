import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

const RecentOrders = (props) => (
  <View style={styles.viewBox}>
    <View style={styles.viewOnlyRow}>
      <View style={styles.viewFlex3}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.viewFlex7}>
        <TouchableOpacity onPress={props.action}>
          <View style={styles.viewOnlyColumn}>
            <Text style={styles.txtTitle}>{props.date}</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.viewOnlyRow2}>
            <FontAwesome name="shopping-cart" size={12} style={{paddingRight: 5}} />
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{props.amountOfItem} items On Cart</Text>
          </View>
          <View style={styles.viewOnlyColumn}>
            <Text style={{fontSize: 12}}>{props.billing_code}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.viewFooter}>
      <View style={{flexDirection: 'row'}}>
        <Text>Status : </Text>
        <TouchableOpacity onPress={() => alert('Alert')}>
          <Text style={{fontWeight: 'bold', color: '#d11e47' }}>{props.status}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Total : <Text style={styles.txtBold}>Rp. {props.total}</Text></Text>
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
    padding: 10,
    width: 280
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
