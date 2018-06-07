import React, { Component } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, View, Text, Icon, Item, Input } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Navbar from '../particles/Navbar'

const Search = (props) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Navbar
      navbarTitle="Search"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Item regular style={{ borderRadius: 5 }}>
        <Input />
        <Feather name="search" style={{ fontSize: 26, paddingRight: 10 }} />
      </Item>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
        <TouchableOpacity onPress={() => alert("Filter modal appears")}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#F7009A' }}>More Filters</Text>
        </TouchableOpacity>
      </View>
    </Content>
  </Container>
)

export default Search

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  }
})