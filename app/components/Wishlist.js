import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'
const { height, width } = Dimensions.get('window')

const Wishlist = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle="Wishlist"
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.viewArrivals}>
        <Text style={styles.yourWhisListTextTitle}>Your Wishlist</Text>
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
  yourWhisListTextTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  }
})

export default Wishlist