import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, FlatList, StatusBar } from 'react-native'
import { Container, Content, Card, CardItem, Body, Icon, Button, Item, Radio, Footer, } from 'native-base'
import Navigation from '../particles/Navbar'
import EditQuantityModal from '../modals/EditQuantityModal'
import EditAddressModal from '../modals/EditAddressModal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const YourCart = (props) => (
  <Container style={styles.Container}>
    <Navigation
      navbarTitle="Your Cart"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <EditQuantityModal
      navbarTitle="Edit Quantity"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditQuantity}
      actionIcon={props.toggleModalEditQuantity}

      image={props.singleDataQuantity.image}
      title={props.singleDataQuantity.title}
      categories={props.singleDataQuantity.categories}
      quantity={props.singleDataQuantity.quantity}
      price={props.singleDataQuantity.price}
      onUpdate={props.onUpdateDataQuantity}
    />
    <EditAddressModal
      navbarTitle="Edit Quantity"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditAddress}
      actionIcon={props.toggleModalEditAddress}

      name={props.singleDataShippingAddress.name}
      address={props.singleDataShippingAddress.address}
      province={props.singleDataShippingAddress.province}
      city={props.singleDataShippingAddress.city}
      regency={props.singleDataShippingAddress.regency}
      district={props.singleDataShippingAddress.district}
      numberPhone={props.singleDataShippingAddress.numberPhone}
      onChangeName={props.onChangeName}
      onChangeAddress={props.onChangeAddress}
      onChangeProvince={props.onChangeProvince}
      onChangeCity={props.onChangeCity}
      onChangeRegency={props.onChangeRegency}
      onChangeDistrict={props.onChangeDistrict}
      onChangeNumberPhone={props.onChangeNumberPhone}
      handleSaveDataShippingAddress={props.handleSaveDataShippingAddress}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.body}>
        <Text style={styles.title}>Products</Text>

        <FlatList
          data={props.dataOnCart}
          renderItem={props.renderProducts}
          keyExtractor={(item, index) => JSON.stringify(index)} />

        <Button style={styles.btnAdd} onPress={props.navigateToSearch}>
          <Icon name="add" /><Text style={styles.txtAdd}>Add More Product</Text>
        </Button>
      </View>
      <View style={styles.border}>
        <View style={styles.body}>
          <Text style={styles.title}>Shipping Options</Text>

          <FlatList
            data={props.dataShippingAddress}
            renderItem={props.renderShippingAddress}
            keyExtractor={(item, index) => JSON.stringify(index)} />

          <View style={styles.contentBottom}>
            <Radio />
            <View style={styles.wrapKurir}>
              <Text style={styles.txtkurir}>JNE</Text>
              <Text style={styles.txtdetilkurir}>Barang akan sampai 2 -3 hari</Text>
            </View>
            <Text style={styles.txtpcs}>RP 15,000</Text>
          </View>
          <View style={styles.contentBottom}>
            <Radio />
            <View style={styles.wrapKurir}>
              <Text style={styles.txtkurir}>YES</Text>
              <Text style={styles.txtdetilkurir}>Barang akan sampai 1 hari</Text>
            </View>
            <Text style={styles.txtpcs}>RP 15,000</Text>
          </View>
          <View style={styles.contentBottom}>
            <Radio />
            <View style={styles.wrapKurir}>
              <Text style={styles.txtkurir}>Express</Text>
              <Text style={styles.txtdetilkurir}>Barang akan sampai 2 -3 hari</Text>
            </View>
            <Text style={styles.txtpcs}>RP 15,000</Text>
          </View>

        </View>
      </View>
    </Content>
    <View style={styles.footer}>
      <View style={styles.footerWrapper}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTotalText}>Total</Text>
          <Text style={styles.footerTotalPriceText}>Rp 420,000</Text>
          <Text style={styles.footerTotalInfo}>Termasuk PPN, jika berlaku.</Text>
        </View>
        <View style={styles.footerButton}>
          <TouchableOpacity onPress={props.navigateToPayments}>
            <View style={styles.footerButtonStyling}>
              <FontAwesome name="money" size={20} color="#fff" />
              <Text style={styles.footerButtonTextStyling}>Go to Payment</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Container>
)

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  body: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  border: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
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
  image: {
    width: 75,
    height: 75,
    marginRight: 10
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
  txtAction: {
    fontSize: 14,
    color: '#d11e48',
    marginBottom: 5
  },
  txtpcs: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  btnAdd: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#AEAEAE',
    margin: 5,
    marginBottom: 15
  },
  txtAdd: {
    fontSize: 14,
    paddingRight: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  contentBottom: {
    flexDirection: 'row',
    margin: 10
  },
  wrapKurir: {
    flex: 1
  },
  txtkurir: {
    fontSize: 16,
    marginLeft: 5
  },
  txtdetilkurir: {
    fontSize: 12,
    marginLeft: 5
  },
  footer: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: 75
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerInfo: {
    padding: 5
  },
  footerButton: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingTop: 5
  },
  footerButtonStyling: {
    borderRadius: 5,
    height: 40,
    width: 130,
    backgroundColor: '#2ecc71',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10
  },
  footerButtonTextStyling: {
    fontWeight: 'bold',
    color: '#fff'
  },
  footerTotalText: {
    fontSize: 16
  },
  footerTotalPriceText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  footerTotalInfo: {
    fontSize: 16
  }
})

export default YourCart