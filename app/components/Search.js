import React, { Component } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, View, Text, Icon, Item, Input } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Navbar from '../particles/Navbar'
import FiltersModal from '../modals/FiltersModal'

const Search = (props) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Navbar
      navbarTitle="Search"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <FiltersModal
      navbarTitle="Filters"
      navbarIcon="close"
      modalVisible={props.modalVisibleFilters}
      actionIcon={props.toggleModalFilters} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Item regular style={styles.items}>
        <Input />
        <Feather name="search" style={styles.searchIcon} />
      </Item>
      <View style={styles.moreFilters}>
        <TouchableOpacity onPress={props.toggleModalFilters}>
          <Text style={styles.moreFiltersText}>More Filters</Text>
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
  },
  items: {
    borderRadius: 5
  },
  searchIcon: {
    fontSize: 26,
    paddingRight: 10
  },
  moreFilters: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  moreFiltersText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F7009A'
  }
})