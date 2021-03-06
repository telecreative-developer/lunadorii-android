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
import { Text, Container, Content, Spinner } from 'native-base';
import LoginRequiredModal from '../modals/LoginRequiredModal'
import Validations from '../particles/Validations'
import Navbar from '../particles/Navbar';
import AddToCart from '../modals/AddToCart'
import I18n from '../i18n'

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToCategoryProducts = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle={props.name}
      actionIcon={props.goback}
    />
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
      <Content >
        <View style={styles.viewArrivals}>
          <View>
            <View>
              {props.dataProduct.length == 0 ? 
                <Validations
                  title={props.name+I18n.t('empty_rbcb')}
                  message1={I18n.t('empty_rbcb_description1')}
                  message2={props.name}
                  buttonText={I18n.t('button_empty_rbcb')}
                  buttonAction={props.navigateToHome}
                  showIcon={true}
                  icon={props.icon}
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