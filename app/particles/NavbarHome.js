import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Header, Left, Body, Right, Button } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const NavbarHome = (props) =>(
  <Header style={{backgroundColor: 'transparent'}} hasTabs>
    <Left>
      <Image source={{uri: "https://avatars0.githubusercontent.com/u/20592984?s=460&v=4"}} style={styles.image}/>
    </Left>
    <Body />
    <Right>
      <Button transparent style={styles.btn}>
        <Feather name="search" style={styles.icon}/>
      </Button>
      <Button transparent style={styles.btn}>
        <FontAwesome name="shopping-cart" style={styles.icon}/>
      </Button>
    </Right>
  </Header> 
)

const styles = StyleSheet.create({
  image:{
    width: 45, 
    height: 45, 
    borderRadius: 45 / 2, 
    marginTop: 5
  },
  btn:{
    width: 55
  },
  icon:{
    fontSize: 26
  }
})

export default NavbarHome