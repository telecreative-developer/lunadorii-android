import React, { Component } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity, Text, FlatList } from 'react-native'
import { Container, Content, View, Icon, Item, Input } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Navbar from '../particles/Navbar'
import FiltersModal from '../modals/FiltersModal'
import ResultNotFound from '../particles/ResultNotFound'

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
      handleCategory={props.handleCategory}
      handleBrand={props.handleBrand}
      handleMinPrice={props.handleMinPrice}
      handleMaxPrice={props.handleMaxPrice}
      handleFilterSearch={props.handleFilterSearch}
      actionIcon={props.toggleModalFilters} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Item regular style={styles.items}>
        <Input placeholder="Search product, brand name, etc.," returnKeyType="search" placeholderTextColor="#ccc" onChangeText={props.onChangeSearchTitle} onSubmitEditing={props.handleSearch} />
        <Feather name="search" style={styles.searchIcon} />
      </Item>
      <View style={styles.moreFilters}>
        <TouchableOpacity onPress={props.toggleModalFilters}>
          <Text style={styles.moreFiltersText}>More Filters</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingLeft: 5, paddingTop: 15 }}>
        {
          props.dateRelatedProducts.length != 0  ?
            props.searchTitle.length == 0 ?
              <View />
              :
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5 }}>Result by filter</Text>
                <View>
                  <FlatList
                    numColumns={2}
                    data={props.dateRelatedProducts}
                    renderItem={props.renderRelatedProducts}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                  />
                </View>
              </View>
            :
            <ResultNotFound amount={props.amount} searchTitle={props.searchTitle} />
        }
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
    borderRadius: 5,
    height: 40
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