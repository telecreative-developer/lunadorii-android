import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { Container, Button, Icon } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'

const Profile = (props) => (
  <Container style={{backgroundColor: '#fff'}}>
    <Navbar 
    navbarTitle="Profile"
    navbarIcon="arrow-back"
    />
    <View style={{backgroundColor: '#d11e47'}}>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={{uri: "https://telecreativenow.com/images/team/Rendi.png"}} style={{width: 80, height: 80, borderRadius: 50}}/>
          </View>
          <View>
            <View style={{flexDirection: 'column', marginLeft: 20, marginTop: 10}}>
              <Text style={{fontSize: 16, color: '#fff'}}>Hello, Rendi Simamora</Text>
              <Button style={{backgroundColor: '#c0c0bf', height: 30, marginTop: 10}}><Text style={{justifyContent: 'center', padding: 20, color: '#fff'}}><MaterialCommunityIcons name="pencil" size={15}/> Edit Profile</Text></Button>
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={{padding: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Recent Orders</Text>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.dataRecentOrders}
        renderItem={props.renderRecentOrders}
        keyExtractor={props.key}
        style={styles.flatList}
      />
    </View>
  </Container>
)

const styles = StyleSheet.create({
  
})

export default Profile