import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import Validations from '../particles/Validations'
import ImagePurchaseHistory from '../assets/images/icon/purchase-history.png'
import { Container, Content, CheckBox, Item, Title, Subtitle, Button } from 'native-base';
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const PurchaseHistory = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle={I18n.t('purchase_history_title')}
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content>
      {props.dataRecentOrders.length == 0 && props.dataHistoryOrders.length == 0 ? 
        <Validations
          showImportedImage={true}
          image={ImagePurchaseHistory}
          title={"Recent order is Empty"}
          message1={"Buy some product and it will"}
          message2={"be here as history orders"}
          buttonText={"Buy some product"}
          buttonAction={props.navigateToHome}
        />:
        <View>
          <View style={styles.viewBrand}>
            <Text style={styles.txtBrand}>{I18n.t('purchase_history_recent_order')}</Text>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.dataRecentOrders}
                renderItem={props.renderRecentOrders}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            </View>
          </View>
          <View style={styles.viewBrandHistory}>
            <Text style={styles.txtBrand}>{I18n.t('purchase_history_history')}</Text>
            <View>
              <FlatList
                data={props.dataHistoryOrders}
                renderItem={props.renderHistoryOrders}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            </View>
          </View>
        </View>
      }
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewBrand: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5
  },
  viewBrandHistory: {
    paddingLeft: 5,
    padding: 10
  },
  txtBrand: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10
  }
})

export default PurchaseHistory