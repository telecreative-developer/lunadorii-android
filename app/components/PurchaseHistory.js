import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import { Container, Content, CheckBox, Item, Title, Subtitle, Button } from 'native-base';

const PurchaseHistory = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Purchase History"
      navbarIcon="arrow-back"
      actionIcon={props.goback}/>
    <Content>
      <View style={styles.viewBrand}>
        <Text style={styles.txtBrand}>Recent Orders</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={props.dataRecentOrders}
          renderItem={props.renderRecentOrders}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
      <View style={styles.viewBrandHistory}>
        <Text style={styles.txtBrand}>History</Text>
        <FlatList
          data={props.dataHistoryOrders}
          renderItem={props.renderHistoryOrders}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  viewBrand:{
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 5
  },
  viewBrandHistory:{
    paddingLeft: 5,
    padding: 10
  },
  txtBrand:{
    fontWeight: 'bold', 
    fontSize: 16,
    padding: 10
  }
})

export default PurchaseHistory