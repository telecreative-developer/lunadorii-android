import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header, Left, Button, Icon, Body, Right } from 'native-base'
import PropTypes from 'prop-types'

const Navbar = (props) => (
  <Header style={{backgroundColor: 'transparent', height: 45}} hasTabs>
    <Left>
      <Button transparent>
        <Icon name={props.navbarIcon} style={{color: '#000'}}/>
      </Button>
    </Left>
    <Body>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>{props.navbarTitle}</Text>
    </Body>
    <Right />
  </Header>  
)

export default Navbar