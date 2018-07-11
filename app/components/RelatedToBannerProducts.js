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
import { Icon, Text, Container, Content } from 'native-base';
import Navbar from '../particles/Navbar';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToBannerProducts = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle="Product Banner "
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.viewArrivals}>
        <Text style={styles.yourWhisListTextTitle}>{props.name} Banner</Text>
        <FlatList
          numColumns={2}
          data={props.dataProduct}
          renderItem={props.renderProduct}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewArrivals: {
    paddingLeft: 10,
    paddingTop: 10
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
  }
})

export default RelatedToBannerProducts