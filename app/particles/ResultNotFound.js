import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import I18n from '../i18n'

const ResultNotFound = (props) => (
  <View>
    {/* <View>
      {
        props.amount == 0 || props.amount == 1 ?
          <Text style={styles.title}>Result {props.amount} product by "{props.searchTitle}"</Text>
          :
          <Text style={styles.title}>Results {props.amount} product by "{props.searchTitle}"</Text>
      }
    </View> */}
    <View style={styles.responseWrapper}>
      <Image source={require("../assets/images/icon/sad.png")} style={styles.images} />
      <Text style={styles.responseMessages}>{I18n.t('result_notfound_filter')}</Text>
    </View>
  </View>
)

export default ResultNotFound

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  responseWrapper: {
    alignItems: 'center',
    paddingTop: 20
  },
  images: {
    height: 50,
    width: 50
  },
  responseMessages: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ccc',
    paddingTop: 10
  }
})