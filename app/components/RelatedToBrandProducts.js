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
import LoginRequiredModal from '../modals/LoginRequiredModal'
import Navbar from '../particles/Navbar';
import Validations from '../particles/Validations'
import AddToCart from '../modals/AddToCart'

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToBrandProducts = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle={"Product " + props.name}
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <AddToCart
      quantityValue={props.quantityValue}
      modalVisible={props.modalVisibleAddToCart}
      toggleModalAddToCart={props.toggleModalAddToCart}
      onChangeQty={props.onChangeQty}
      handleAddToCart={props.handleAddToCart}      
    />
    <LoginRequiredModal 
      modalVisibleLogin={props.modalVisibleLogin}
      closeModal={props.closeModal}
      loginAction={props.loginAction}
    />
    {props.stillLoading ? (
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
    ) : (
      <Content>
        <View style={styles.viewArrivals}>
          <View>
            <View>
              {props.dataProduct.length == 0 ?
              <Validations
                title={props.name+" Doesn't has products"}
                message1={"Please be patient for new products"}
                message2={props.name}
                buttonText={"Continue shoping"}
                buttonAction={props.navigateToHome}
              />
              :
              <View>
                <Text style={{fontWeight: 'bold',fontSize: 18, paddingVertical: 5}}>{props.name}</Text>
                <FlatList
                  numColumns={2}
                  data={props.dataProduct}
                  renderItem={props.renderProduct}
                  keyExtractor={(item, index) => JSON.stringify(index)}
                />
              </View>
              }
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
    paddingLeft: 10
  },
  yourWhisListTextTitle: {
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

export default RelatedToBrandProducts