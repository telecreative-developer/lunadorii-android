import React, { Component } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import { Container, Content, View, Icon, Item, Input, Spinner } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Navbar from '../particles/Navbar'
import FiltersModal from '../modals/FiltersModal'
import ResultNotFound from '../particles/ResultNotFound'
const { height, width } = Dimensions.get('window')

const Search = (props) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Navbar
      navbarTitle="Search"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <FiltersModal
      clearCategory={props.clearCategory}
            
      dataButtonCategory1st={props.dataButtonCategory1st}
      buttonCategory1st={props.buttonCategory1st}

      dataButtonSelectedCategory={props.dataButtonSelectedCategory}      
      buttonSelectedCategory={props.buttonSelectedCategory}

      navbarTitle="Filters"
      navbarIcon="close"
      modalVisible={props.modalVisibleFilters}
      handleCategory={props.handleCategory}
      handleBrand={props.handleBrand}
      handleMinPrice={props.handleMinPrice}
      handleMaxPrice={props.handleMaxPrice}
      handleFilterSearch={props.handleFilterSearch}
      actionIcon={props.toggleModalFilters} 
      modalVisibleBrandChooser={props.modalVisibleBrandChooser}
      toggleModalBrandChooser={props.toggleModalBrandChooser}/>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Item regular style={styles.items}>
        <Input placeholder="Search product, brand name, etc.," value={props.searchTitle} returnKeyType="search" placeholderTextColor="#ccc" onChangeText={props.onChangeSearchTitle} onSubmitEditing={props.handleSearch}/>
        <TouchableOpacity onPress={props.clearSearchBar}>
          <EvilIcons name="close" style={styles.searchIcon} />
        </TouchableOpacity>
      </Item>
      <View style={styles.moreFilters}>
        <TouchableOpacity onPress={props.toggleModalFilters}>
          <Text style={styles.moreFiltersText}>More Filters</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
      {console.log('alo',props.lastSearchTitle)}
        {
          props.loading ? <Spinner color="#d11e48"/> :
          props.dateRelatedProducts !== "not yet search"  ?
            props.dateRelatedProducts.data.length != 0 ?
              <View style={{height: '100%', width: '100%'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5 }}>Result Product for "{props.lastSearchTitle}{props.lastFillter}"</Text>
                <View>
                  <FlatList
                    numColumns={2}
                    data={props.dateRelatedProducts.data}
                    renderItem={props.renderRelatedProducts}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                  />
                </View>
              </View>
            :
            <ResultNotFound amount="0" searchTitle={props.lastSearchTitle}/>
            :
            <View />
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