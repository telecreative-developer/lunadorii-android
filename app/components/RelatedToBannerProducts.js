import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  ImageBackground
} from 'react-native';
import { Text, Container, Content, Spinner } from 'native-base';
import NavbarTransparent from '../particles/NavbarTransparent';
import Navbar from '../particles/Navbar';
import Validations from '../particles/Validations'
import AddToCart from '../modals/AddToCart'
import LoginRequiredModal from '../modals/LoginRequiredModal'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToBannerProducts = (props) => (
  <Container style={styles.container}>
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
      <Content contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
        <Navbar
          navbarIcon="arrow-back"
          navbarTitle={props.title}
          actionIcon={props.goback}
        />
        <View stryle={styles.style}>
          <Spinner color="#d11e48"/>
        </View>
      </Content>
    ) : ( 
      props.dataProduct.length == 0 ? 
        <Content>
          <Navbar
            navbarIcon="arrow-back"
            navbarTitle={props.title}
            actionIcon={props.goback}
          />
          <StatusBar
            backgroundColor="#d11e48"
            barStyle="light-content"
          />
          <Validations
            title={props.title+" Doesn't has products"}
            message1={"Please be patient for new products"}
            message2={props.name}
            buttonText={"Continue shoping"}
            buttonAction={props.navigateToHome}
          />
        </Content>
      :
        <Content style={{width: convertWidthPercentToDP('100%'), height: convertHeightPercentToDP('100%')}}>
          <ImageBackground source={{ uri: props.image }} style={styles.imageBackgroundStyle}>
            <NavbarTransparent
              navbarTitle={props.title}
              navbarIcon="arrow-back"
              iconColor
              actionIcon={props.goback} />
            <StatusBar
              backgroundColor="#d11e48"
              barStyle="light-content"
            />
          </ImageBackground>
          <View style={styles.viewArrivals}>
            <View>
              <View>
                <View>
                  <View>
                    <Text style={{fontWeight: 'bold',fontSize: 18, paddingVertical: 5}}>{props.title}</Text>
                    <FlatList
                      numColumns={2}
                      data={props.dataProduct}
                      renderItem={props.renderProduct}
                      keyExtractor={(item, index) => JSON.stringify(index)}
                    />
                  </View>
                </View>
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
  scrollViewContent: {
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 10,
    padding: 10,
    alignItems:'center'
  },
  viewArrivals:{
    paddingLeft: 10
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
  imageBackgroundStyle: {
    height: 250,
    width: '100%'
  },
  style: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
})

export default RelatedToBannerProducts