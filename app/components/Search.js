import React, { Component } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import { Container, Content, View, Icon, Item, Input, Spinner } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Navbar from '../particles/Navbar'
import FiltersModal from '../modals/FiltersModal'
import ResultNotFound from '../particles/ResultNotFound'
import AddToCart from '../modals/AddToCart'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const Search = (props) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Navbar
      navbarTitle={I18n.t('search_title')}
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <FiltersModal
      clearCategory={props.clearCategory}
      clearBrand={props.clearBrand}

      dataButtonCategory1st={props.dataButtonCategory1st}
      buttonCategory1st={props.buttonCategory1st}

      dataButtonSelectedCategory={props.dataButtonSelectedCategory}      
      buttonSelectedCategory={props.buttonSelectedCategory}

      selectedBrand={props.selectedBrand}
      dataButtonBrands={props.dataButtonBrands}
      buttonBrads={props.buttonBrads}

      navbarTitle="Filters"
      navbarIcon="close"
      modalVisible={props.modalVisibleFilters}
      handleCategory={props.handleCategory}
      handleBrand={props.handleBrand}
      handleMinPrice={props.handleMinPrice}
      minValue={props.minValue}
      handleMaxPrice={props.handleMaxPrice}
      maxValue={props.maxValue}
      handleFilterSearch={props.handleFilterSearch}
      actionIcon={props.toggleModalFilters} 
      modalVisibleBrandChooser={props.modalVisibleBrandChooser}
      toggleModalBrandChooser={props.toggleModalBrandChooser}/>
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <AddToCart
      increaseQty={props.increaseQty}
      decreaseQty={props.decreaseQty}
      quantityValue={props.quantityValue}
      modalVisible={props.modalVisibleAddToCart}
      toggleModalAddToCart={props.toggleModalAddToCart}
      onChangeQty={props.onChangeQty}
      handleAddToCart={props.handleAddToCart}      
    />
    <Content style={styles.container}>
      <Item regular style={styles.items}>
        <Input placeholder={I18n.t('placeholder_search')} value={props.searchTitle} returnKeyType="search" placeholderTextColor="#ccc" onChangeText={props.onChangeSearchTitle} onSubmitEditing={props.handleSearch}/>
        <TouchableOpacity onPress={props.clearSearchBar}>
          <EvilIcons name="close" style={styles.searchIcon} />
        </TouchableOpacity>
      </Item>
      <View style={styles.moreFilters}>
        <TouchableOpacity onPress={props.toggleModalFilters}>
          <Text style={styles.moreFiltersText}>{I18n.t('filter')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
      {console.log('alo',props.lastSearchTitle)}
        {
          props.loading ? <Spinner color="#d11e48"/> :
          props.dateRelatedProducts !== "not yet search"  ?
            props.dateRelatedProducts.data.length != 0 ?
              <View style={{height: '100%', width: '100%'}}>
                {/* <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5 }}>Result Product for "{props.lastSearchTitle}{props.lastFillter}"</Text> */}
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