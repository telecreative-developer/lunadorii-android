import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Icon, Button, Radio,  } from 'native-base'
import Navigation from '../particles/Navbar'
const { height, width } = Dimensions.get('window')

const YourCart = (props) => (
  <Container style={styles.Container}>
    <Navigation 
       navbarTitle="Your Cart"
       navbarIcon="arrow-back"
       actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content" />
    <Content>
      <View style={styles.body}>
        <Text style={styles.title}>Products</Text>
        <FlatList
          data={props.onCartProduct}
          renderItem={props.renderOnCartProduct}
        />
        <Button style={styles.btnAdd} onPress={props.navigateToHome}>
          <Icon name="add"/><Text style={styles.txtAdd}>Add More Product</Text>
        </Button>
      </View>
      <View style={styles.border}>
        <View style={styles.body}>
         <Text style={styles.title}>Shipping Options</Text>
          <FlatList
            data={props.onCartShippingAddress}
            renderItem={props.renderOnCartShippingAddress}
          />
          <View style={styles.contentBottom}>
           <Radio/>
           <View style={styles.wrapKurir}>
             <Text style={styles.txtkurir}>JNE</Text>
             <Text style={styles.txtdetilkurir}>Barang akan sampai 2 -3 hari</Text>
           </View>
           <Text style={styles.txtpcs}>RP 15,000</Text>
          </View>
          <View style={styles.contentBottom}>
           <Radio/>
           <View style={styles.wrapKurir}>
             <Text style={styles.txtkurir}>YES</Text>
             <Text style={styles.txtdetilkurir}>Barang akan sampai 1 hari</Text>
           </View>
           <Text style={styles.txtpcs}>RP 15,000</Text>
          </View>
          <View style={styles.contentBottom}>
           <Radio/>
           <View style={styles.wrapKurir}>
             <Text style={styles.txtkurir}>Express</Text>
             <Text style={styles.txtdetilkurir}>Barang akan sampai 2 -3 hari</Text>
           </View>
           <Text style={styles.txtpcs}>RP 15,000</Text>
          </View> 
        </View>
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'#fff'
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5
  },
  body:{
    marginHorizontal:20,
    marginTop:10,
  },
  border:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#e2e2e2'
  },
  Card:{
    borderRadius:1,
    borderColor:'#E2E2E2',
    borderWidth:1,
    marginBottom:5
  },
  contentCard:{
    margin:10,
    flexDirection:'row',
    flex:1,
  },
  image:{
    width:75,
    height:75,
    marginRight:10
  },
  wrapLeft:{
    flex:1,
  },
  wrapRight:{
    alignItems:'flex-end'
  },
  txtHeader:{
    fontSize:16,
    fontWeight:'bold',
  },
  txtDetail:{
    fontSize:14,
  },
  txtBlank:{
    marginVertical:5
  },
  txtAction:{
    fontSize:14,
    color:'#d11e48',
    marginBottom:5
  },
  txtpcs:{
    fontSize:14,
    fontWeight:'bold'
  },
  btnAdd:{
    borderRadius:5,
    alignSelf:'center',
    backgroundColor:'#AEAEAE',
    margin:5,
    marginBottom:15
  },
  txtAdd:{
    fontSize:14,
    paddingRight:10,
    color:'#fff',
    fontWeight:'bold'
  },
  contentBottom:{
    flexDirection:'row',
    margin:10
  },
  wrapKurir:{
    flex:1
  },
  txtkurir:{
    fontSize:16,
    marginLeft:5
  },
  txtdetilkurir:{
    fontSize:12,
    marginLeft:5
  }
})

export default YourCart