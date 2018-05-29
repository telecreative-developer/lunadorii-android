import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Navbar from '../particles/Navbar'


const Wishlist = (props) => (
  <Container style={styles.container}>
    <Navbar
    navbarIcon = "arrow-back"
    navbarTitle = "Wishlist"
    />
    <View style={styles.viewArrivals}>
      <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Your Wishlist</Text>
      <FlatList
        numColumns={2}
        data={props.dataProduct}
        renderItem={props.renderProduct}
        keyExtractor={(item, index) => JSON.stringify(index)}
      />
    </View>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  viewArrivals:{
    paddingLeft: 20,
    marginTop: 10
  }
})

export default Wishlist