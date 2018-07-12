import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const HistoryOrders = (props) => (
  <View style={styles.viewBox}>
    <View style={styles.viewOnlyRow}>
      <View style={styles.viewFlex3}>
        <Image source={{uri: props.image}} style={styles.image}/>
      </View>
      <View style={styles.viewFlex7}>
        <View style={styles.viewOnlyColumn}>
          <Text style={styles.txtTitle}>{props.date}</Text>
          <Text>{props.billing_code}</Text>
        </View>
      </View>
    </View>
    <View style={styles.viewFooter}>
      <View>
        <Text>Status: <Text style={styles.txtBold}>{props.status}</Text></Text>
      </View>
      <View>
        <Text>Total : <Text style={styles.txtBold}>Rp. {props.total}</Text></Text>
      </View>
    </View>
  </View>
)
const styles = StyleSheet.create({
  viewBox:{
    borderWidth: 1, 
    borderColor: '#e2e2e2', 
    padding: 10, 
    marginLeft: 10,
    marginBottom: 10
  },
  viewOnlyRow:{
    flexDirection: 'row'
  },
  viewOnlyColumn:{
    flexDirection: 'column'
  },
  viewFlex3:{
    flex: 0.3
  },
  viewFlex7:{
    flex: 0.7
  },
  txtBold:{
    fontWeight: 'bold'
  },
  txtTitle:{
    fontWeight: 'bold', 
    fontSize: 16
  },
  image:{
    width: 70, 
    height: 70
  },
  viewFooter:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
})

export default HistoryOrders
