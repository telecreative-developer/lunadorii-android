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

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToBannerProducts = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    {props.stillLoading ? (
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
    ) : (
      <Content>
        <ImageBackground source={{ uri: props.image }} style={styles.imageBackgroundStyle}>
          <NavbarTransparent
            navbarTitle={props.title}
            navbarIcon="arrow-back"
            iconColor
            actionIcon={props.goback} />
          <StatusBar
            backgroundColor="#f65857"
            barStyle="light-content"
          />
        </ImageBackground>
        <View style={styles.viewArrivals}>
          <View style={{padding: 10}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>{props.title}</Text>
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
  imageBackgroundStyle: {
    height: 250,
    width: '100%'
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default RelatedToBannerProducts