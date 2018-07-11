import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'
const { height, width } = Dimensions.get('window')

const DetailsOrder = (props) => (

  <Container style={style.container}>
    <Navbar
      navbarTitle="Details Order"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={style.grandWrapper}>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Bill Number</Text>
            <Text style={{color: '#ccc'}}>23942103MSC9234</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Status</Text>
            <Text style={{color: '#ccc'}}>Delivered</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18, marginBottom: 5}}>On Cart</Text>
            <FlatList
              data={props.dataOnCart}
              renderItem={props.renderDataOnCart}
            />
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Total Price</Text>
            <Text style={{color: '#ccc'}}>Rp 120,500</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Payment Method</Text>
            <Text style={{color: '#ccc'}}>Transfer</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#f6f6f6', borderBottomWidth: 1.5}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Address</Text>
            <Text style={{color: '#ccc', textAlign: 'justify'}}>
              Jl.Manggala 3 Perumahan Cipondoh Makmur RT 01 RW 02
              Provinsi Banten Kota Tangerang Kecamatan Cipondoh No. 29
              14250 Nomor telp 089643951073
            </Text>
          </View>
        </View>
      </View>
    </Content>
  </Container>

)

export default DetailsOrder

const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff'
  },
  grandWrapper:{
    width: '100%',
    height: '100%'
  }
})