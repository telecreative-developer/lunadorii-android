import React from 'react'
import { Text, Dimensions, StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Right } from 'native-base'
const width = Dimensions.get('window').width;

const NavbarModal = (props) => (
  <Header style={styles.headerStyle} hasTabs>
    <Left>
      <Button transparent onPress={props.actionIcon}>
        <Icon name={props.navbarIcon} style={styles.iconColor} />
      </Button>
    </Left>
    <Body>
      <Text style={styles.navbarTitles}>{props.navbarTitle}</Text>
    </Body>
    <Right />
  </Header>
)

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'transparent',
    height: 45,
    width: width,
  },
  navbarTitles: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconColor: {
    color: '#000'
  }
})

export default NavbarModal