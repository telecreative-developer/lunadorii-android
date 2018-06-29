import React, { Component } from 'react'
import { StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import EditCreditCardModal from '../modals/EditCreditCardModal'
import AddCreditCardModal from '../modals/AddCreditCardModal'
const { height, width } = Dimensions.get('window')

const CreditCard = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Credit Card"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <EditCreditCardModal
      navbarTitle="Edit Credit Card"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditCreditCard}
      actionIcon={props.toggleModalEditCreditCard} 
      handleUpdateCreditCard={props.handleUpdateCreditCard}
      
      cardNumber={props.cardNumber}
      validationDate={props.validationDate}
      cvv={props.cvv}
      cardHolderName={props.cardHolderName}

      onChangeCardNumber={props.onChangeCardNumber}
      onChangeValidationDate={props.onChangeValidationDate}
      onChangeCVV={props.onChangeCVV}
      onChangeCardHolder={props.onChangeCardHolder}/>
    <AddCreditCardModal
      navbarTitle="Add Credit Card"
      navbarIcon="close"
      modalVisible={props.modalVisibleAddCreditCard}
      actionIcon={props.toggleModalAddCreditCard} 
      handleSaveCreditCard={props.handleSaveCreditCard}

      cardNumber={props.cardNumber}
      validationDate={props.validationDate}
      cvv={props.cvv}
      cardHolderName={props.cardHolderName}

      onChangeCardNumber={props.onChangeCardNumber}
      onChangeValidationDate={props.onChangeValidationDate}
      onChangeCVV={props.onChangeCVV}
      onChangeCardHolder={props.onChangeCardHolder}/>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.viewBrand}>
        <Text style={styles.txtLabel}>Your Credit Card</Text>
        <FlatList
          data={props.dataCreditCards}
          renderItem={props.renderCreditCards}
          keyExtractor={(item, index) => JSON.stringify(index)} />
      </View>
      <Button style={styles.btnAdd} onPress={props.toggleModalAddCreditCard}>
        <Icon name="add" /><Text style={styles.txtAdd}>Add Another Card</Text>
      </Button>
    </Content>
  </Container>
)

export default CreditCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  content: {
    padding: 10
  },
  txtLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 5
  },
  viewBrand: {
    paddingBottom: 5,
    paddingLeft: 5
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
  }
})