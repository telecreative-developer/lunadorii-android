import React, { Component } from 'react'
import { StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View, Button, Icon, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import LoadingModal from '../modals/LoadingModal'
import EditCreditCardModal from '../modals/EditCreditCardModal'
import AddCreditCardModal from '../modals/AddCreditCardModal'
import Validations from '../particles/Validations'
const { height, width } = Dimensions.get('window')

const CreditCard = (props) => (
  <Container style={styles.container}>
    <LoadingModal 
      modalVisibleLoading={props.setDefaultLoading}
    />
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
      buttonSave={props.buttonSave}
      
      cardNumber={props.cardNumber}
      mm={props.mm}
      yyyy={props.yyyy}
      cvv={props.cvv}
      cardHolderName={props.cardHolderName}
      country={props.country}
      postalCode={props.postalCode}
      password={props.password}

      onChangeCardNumber={props.onChangeCardNumber}
      onChangemm={props.onChangemm}
      onChangeyyyy={props.onChangeyyyy}
      onChangeCVV={props.onChangeCVV}
      onChangeCardHolder={props.onChangeCardHolder}
      onChangeCountry={props.onChangeCountry}
      onChangePostalCode={props.onChangePostalCode}
      onChangePassword={props.onChangePassword}/>
    <AddCreditCardModal
      navbarTitle="Add Credit Card"
      navbarIcon="close"
      modalVisible={props.modalVisibleAddCreditCard}
      actionIcon={props.toggleModalAddCreditCard} 
      handleSaveCreditCard={props.handleSaveCreditCard}
      buttonSave={props.buttonSave}

      cardNumber={props.cardNumber}
      mm={props.mm}
      yyyy={props.yyyy}
      cvv={props.cvv}
      cardHolderName={props.cardHolderName}
      country={props.country}
      postalCode={props.postalCode}
      password={props.password}

      onChangeCardNumber={props.onChangeCardNumber}
      onChangemm={props.onChangemm}
      onChangeyyyy={props.onChangeyyyy}
      onChangeCVV={props.onChangeCVV}
      onChangeCardHolder={props.onChangeCardHolder}
      onChangeCountry={props.onChangeCountry}
      onChangePostalCode={props.onChangePostalCode}
      onChangePassword={props.onChangePassword}/>
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    {props.stillLoading ? 
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>:
      props.dataCreditCards != 0 ?
      <Content style={styles.content}>
        <View>
          <View style={styles.viewBrand}>
            <Text style={styles.txtLabel}>Your Credit Card</Text>
            <FlatList
              data={props.dataCreditCardsDefault}
              renderItem={props.renderCreditCards}
              keyExtractor={(item, index) => JSON.stringify(index)} />
            <FlatList
              data={props.dataCreditCards}
              renderItem={props.renderCreditCards}
              keyExtractor={(item, index) => JSON.stringify(index)} />
          </View>
          <Button style={styles.btnAdd} onPress={props.toggleModalAddCreditCard}>
            <Icon name="add" /><Text style={styles.txtAdd}>Add Another Card</Text>
          </Button>
        </View>
      </Content>:
      <Validations 
        title="No Credit Card" 
        message1="Please set your credit card" 
        message2="credential to shop with credit card" 
        buttonText="Add Credit Card"
        buttonAction={props.toggleModalAddCreditCard}
      />
    }
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
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txtLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10
  },
  viewBrand: {
    paddingBottom: 5,
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