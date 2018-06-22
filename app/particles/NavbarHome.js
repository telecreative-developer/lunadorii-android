import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Right, Button } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const NavbarHome = (props) => (
  <Header style={styles.headerTransparent} hasTabs>
    <Left>
      <TouchableOpacity onPress={props.photoProfileAction}>
        <Image source={{ uri: "https://avatars0.githubusercontent.com/u/38149346?s=400&u=7db8195dd7b4436cbf6d0575915ca6b198d116cc&v=4" }} style={styles.image} />
      </TouchableOpacity>
    </Left>
    <Body />
    <Right>
      <Button transparent style={styles.btn} onPress={props.searchIconAction}>
        <Feather name="search" style={styles.icon} />
      </Button>
      <Button transparent style={styles.btn} onPress={props.cartIconAction}>
        <FontAwesome name="shopping-cart" style={styles.icon} />
      </Button>
    </Right>
  </Header>
)

const styles = StyleSheet.create({
  headerTransparent: {
    backgroundColor: 'transparent'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 45 / 2,
    marginTop: 5
  },
  btn: {
    width: 55
  },
  icon: {
    fontSize: 26
  }
})

export default NavbarHome