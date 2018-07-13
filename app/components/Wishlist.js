import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import Validations from '../particles/Validations'
const { height, width } = Dimensions.get('window')

const Wishlist = (props) => (
  <Container style={styles.container}>
    {console.log(props.isEmpty)}
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle="Wishlist"
      actionIcon={props.goback}
    />
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
        {props.isEmpty ? (
          <Validations title="Your Wishlist is empty" message1="Go shop to find what you need " message2="and add it to wishlist" navigateToProfile={props.navigateToProfile}/>
        ) : (
          props.stillLoading ? (
            <View style={styles.viewArrivals}>
              <View style={{backgroundColor: '#f6f6f6',height: 20, width: 100, marginBottom: 10}}/>
              <FlatList
                numColumns={2}
                data={[1,2,3,4,5]}
                renderItem={({item}) => (
                  <View style={{width: (width - 35) / 2, height: 200, backgroundColor: '#f6f6f6',marginRight: 10,marginBottom: 10}}/>
                )}
              />
            </View>
          ) : (
            <View style={styles.viewArrivals}>
              <Text style={styles.yourWhisListTextTitle}>Your Wishlist</Text>
              <FlatList
                numColumns={2}
                data={props.dataProduct}
                renderItem={props.renderProduct}
                keyExtractor={(item, index) => JSON.stringify(index)}
                handleRemove={() => alert('hai')}
              />
            </View>
          )
        )}
      </Content>
    )}
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
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default Wishlist