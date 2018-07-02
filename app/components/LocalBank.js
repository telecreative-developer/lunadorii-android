import React, { Component } from 'react'
import { StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import LocalBanks from '../particles/LocalBanks'
import AddLocalBankModal from '../modals/AddLocalBankModal';
import EditLocalBankModal from '../modals/EditLocalBankModal';
const { height, width } = Dimensions.get('window')

const LocalBank = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Local Bank"
      navbarIcon="arrow-back"
      actionIcon={props.goback} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <AddLocalBankModal
      modalVisible={props.modalVisibleAddLocalBank}
      actionIcon={props.toggleModalAddLocalBank}
      toggleModalAddLocalBank={props.toggleModalAddLocalBank}
      onChangeBankName={props.onChangeBankName}
      onChangeName={props.onChangeName}
      onChangeBill={props.onChangeBill}
      handleSave={props.handleSave}
    />
    <EditLocalBankModal
      modalVisible={props.modalVisibleEditLocalBank}
      actionIcon={props.toggleModalEditLocalBank}
      toggleModalEditLocalBank={props.toggleModalEditLocalBank}

      bankName={props.bankName}
      name={props.name}
      bill={props.bill}

      onChangeBankName={props.onChangeBankName}
      onChangeName={props.onChangeName}
      onChangeBill={props.onChangeBill}
      handleEdit={props.handleEdit}
    />
    <Content style={styles.content}>
      <View style={styles.viewBrand}>
        <Text style={styles.txtLabel}>Your Local Bank</Text>
        <FlatList
          data={props.dataLocalBank}
          renderItem={props.renderLocalBanks}
          keyExtractor={(item, index) => JSON.stringify(index)} />
      </View>
      <Button style={styles.btnAdd} onPress={props.toggleModalAddLocalBank}>
        <Icon name="add" /><Text style={styles.txtAdd}>Add Another Bank</Text>
      </Button>
    </Content>
  </Container>
)

export default LocalBank

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