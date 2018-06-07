import React from 'react'
import { Text } from 'react-native'
import { Header, Left, Button, Icon, Body, Right } from 'native-base'

const Navbar = (props) => (
  <Header style={{ backgroundColor: 'transparent', height: 45 }}>
    <Left>
      <Button transparent onPress={props.actionIcon}>
        <Icon name={props.navbarIcon} style={{ color: '#000' }} />
      </Button>
    </Left>
    <Body>
      <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>{props.navbarTitle}</Text>
    </Body>
    <Right />
  </Header>
)

export default Navbar