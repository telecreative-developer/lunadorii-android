import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import Navbar from '../particles/Navbar'

const EditQuantityModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <Navbar
      navbarTitle="Edit Quantity"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <Content style={styles.container}>
      <View style={styles.Card}>
        <View style={styles.contentCard}>
          <Image source={{ uri: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg' }} style={styles.image} />
          <View style={styles.wrapLeft}>
            <Text style={styles.txtHeader}>Benefit Cosmetics</Text>
            <Text style={styles.txtDetail}>Face Primer Mini</Text>
            <Text style={styles.txtBlank}></Text>
            <Text style={styles.txtDetail}>Quantity: <Text style={styles.txtpcs}>1 pcs</Text></Text>
          </View>
          <View style={styles.wrapRight}>
            <Text style={styles.txtHeader}>Rp 20,000</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10 }}>
        <View style={{ justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => alert("Minus")}>
            <View style={styles.minusButton}>
              <Text style={styles.buttonFontSize}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Item regular style={styles.amountTextInput}>
          <Input value="1" />
        </Item>
        <View style={{ justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => alert("Pluss")}>
            <View style={styles.plussButton}>
              <Text style={styles.buttonFontSize}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
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
    backgroundColor: '#D50039'
  },
  buttonSaveTextStyle: {
    color: '#fff',
    fontSize: 20
  }
})