import React, { Component } from 'react'
import { StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
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
      toggleModalAddLocalBank={props.toggleModalAddLocalBank}
      actionIcon={props.toggleModalAddLocalBank}

      onChangeBankName={props.onChangeBankName}
      bankName={props.bankName}
      dataBankName={props.dataBankName}
      renderDataBankName={props.renderDataBankName}
      visibleBankNamePicker={props.visibleBankNamePicker}

      buttonSave={props.buttonSave}
      onChangeName={props.onChangeName}
      onChangeBill={props.onChangeBill}
      onChangePassword={props.onChangePassword}
      handleSave={props.handleAddBank}
    />
    <EditLocalBankModal
      modalVisible={props.modalVisibleEditLocalBank}
      toggleModalEditLocalBank={props.toggleModalEditLocalBank}
      actionIcon={props.toggleModalEditLocalBank}
      
      onChangeBankName={props.onChangeBankName}
      bankName={props.bankName}
      dataBankName={props.dataBankName}
      name={props.name}
      bill={props.bill}
      renderDataBankName={props.renderDataBankName}
      visibleBankNamePicker={props.visibleBankNamePicker}

      buttonSave={props.buttonSave}
      onChangeName={props.onChangeName}
      onChangeBill={props.onChangeBill}
      onChangePassword={props.onChangePassword}
      handleEdit={props.handleEditBank}
    />
    <Content>
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
  txtLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 5
  },
  viewBrand: {
    paddingHorizontal: 5,
    paddingVertical: 10
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