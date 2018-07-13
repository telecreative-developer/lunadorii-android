import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import {
  Header, Left, Button,
  Body, Right, Icon
} from 'native-base'

const NavbarTransparent = (props) => (
  <Header hasTabs style={styles.header}>
    <Left>
      <Button transparent onPress={props.actionIcon}>
        <Icon name={props.navbarIcon} style={styles.iconColor} />
      </Button>
    </Left>
    <Body>
      <Text style={styles.headerTitle}>{props.navbarTitle}</Text>
    </Body>
    <Right />
  </Header>
)

export default NavbarTransparent

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    height: 45
  },
  iconColor: {
    color: '#000'
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Avenir Next',
    fontSize: 18
  },
  left: {
    flex: 0.1
  },
  body: {
    flex: 0.7
  },
  right: {
    flex: 0.2
  },
  icon: {
    color: '#fff'
  }
})