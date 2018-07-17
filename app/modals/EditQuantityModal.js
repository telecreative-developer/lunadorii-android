import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'

const EditQuantityModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Edit Quantity"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <Content style={styles.container}>
      <View style={styles.Card}>
        <View style={styles.contentCard}>
          <Image source={{ uri: props.image }} style={styles.image} />
          <View style={styles.wrapLeft}>
            <Text style={styles.txtHeader}>{props.title}</Text>
            <Text style={styles.txtDetail}>{props.categories}</Text>
            <Text style={styles.txtBlank}></Text>
            <Text style={styles.txtDetail}>Quantity: <Text style={styles.txtpcs}>{props.quantity} pcs</Text></Text>
          </View>
          <View style={styles.wrapRight}>
            <Text style={styles.txtHeader}>Rp {props.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.quantityAmountControl}>
        <View style={styles.flexEnd}>
          <TouchableOpacity onPress={props.addQty}>
            <View style={styles.minusButton}>
              <Text style={styles.buttonFontSize}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Item regular style={styles.amountTextInput}>
          <Input value={String(props.quantity)} onChangeText={props.onChangeQuantity} keyboardType={'numeric'} maxLength={100}/>
        </Item>
        <View style={styles.flexEnd}>
          <TouchableOpacity onPress={props.minQty}>
            <View style={styles.plussButton}>
              <Text style={styles.buttonFontSize}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyle} onPress={props.onUpdate}>
      <Text style={styles.buttonSaveTextStyle}>Update</Text>
    </Button>
  </Modal>
)

export default EditQuantityModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10
  },
  amountTextInput: {
    borderRadius: 10,
    width: 50,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  quantityAmountControl: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  minusButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 80
  },
  plussButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 80
  },
  buttonFontSize: {
    fontSize: 26
  },
  wrapLeft: {
    flex: 1,
  },
  wrapRight: {
    alignItems: 'flex-end'
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtDetail: {
    fontSize: 14,
  },
  txtBlank: {
    marginVertical: 5
  },
  txtpcs: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10
  },
  Card: {
    borderRadius: 1,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    marginBottom: 5
  },
  contentCard: {
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  buttonSaveStyle: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyle: {
    color: '#fff',
    fontSize: 18
  }
})