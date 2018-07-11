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
import RelatedToCategoryProductsContainer from '../containers/RelatedToBrandProductsContainer';
import Navbar from '../particles/Navbar';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RelatedToBrandProducts = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle="Product Brand "
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.viewArrivals}>
        <Text style={styles.yourWhisListTextTitle}>{props.name} Brand</Text>
        <FlatList
          numColumns={2}
          data={props.dataProduct}
          renderItem={props.renderProduct}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
        {/* <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
        >
          {this._renderScrollViewContent(this.props.dataProduct, this.props.renderProduct)}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={{uri: this.props.image}}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <View style={{flexDirection: 'row'}}>
            <Icon name='arrow-back' style={{paddingHorizontal: 10,paddingVertical: 10}} onPress={this.props.goback}/>
            {/* <Text style={{fontSize: 18, fontWeight: 'bold',paddingHorizontal: 20,paddingVertical: 13}}>Related to brand</Text> */}
          {/* </View> */}
        {/* </Animated.View> */} */}
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
  yourWhisListTextTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  }
})

export default RelatedToBrandProducts