import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  RefreshControl,
  FlatList
} from 'react-native';
import { Icon, Text, Container, Content, Spinner } from 'native-base';
import RelatedToCategoryProductsContainer from '../containers/RelatedToCategoryProductsContainer';
import Navbar from '../particles/Navbar';
import AddToCart from '../modals/AddToCart'

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToCategoryProducts = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle={"Product Category " + props.name}
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <AddToCart
      modalVisible={props.modalVisibleAddToCart}
      toggleModalAddToCart={props.toggleModalAddToCart}
      onChangeQty={props.onChangeQty}
      handleAddToCart={props.handleAddToCart}      
    />
    {props.stillLoading ? (
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
    ) : (
      <Content>
        <View style={styles.viewArrivals}>
          <View style={{padding: 10}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>{props.name}</Text>
            <View style={{paddingTop: 5}}>
              <FlatList
                numColumns={2}
                data={props.dataProduct}
                renderItem={props.renderProduct}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            </View>
          </View>
        </View>
      </Content>
    )}
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewArrivals: {

  },
  scrollViewContent: {
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 10,
    padding: 10,
    alignItems:'center'
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: '#fff',
    height: 45,
    width: "100%",
  },
  navbarTitles: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default RelatedToCategoryProducts