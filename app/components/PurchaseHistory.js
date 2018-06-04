import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import RecentOrders from '../particles/RecentOrders'
import { Container, Content, CheckBox, Item, Title, Subtitle, Button } from 'native-base';

const PurchaseHistory = (props) => (
  <Container>
    <Navbar
      navbarTitle="Purchase History"
      navbarIcon="close"/>
    <Content>
      <View style={styles.viewBrand}>
        <Text style={styles.txtBrand}>Recent Orders</Text>
        <FlatList/>
        <RecentOrders
          categories="Beauty Box, Cream Sunblock, and 3 others"
          status="Packaging"
          total="430,000"
          date="28 mei 2018"
          time="16:00 PM"
          image="https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"/>
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  viewBrand:{
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 20
  },
  txtBrand:{
    fontWeight: 'bold', 
    fontSize: 16,
    paddingBottom: 10
  }
})

export default PurchaseHistory