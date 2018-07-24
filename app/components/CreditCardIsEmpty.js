import React from 'react'
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native'
import { Container, Icon, Button } from 'native-base'
import AddLocalBankModal from '../modals/AddLocalBankModal';
const { height, width } = Dimensions.get('window')

const CreditCardIsEmpty = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <AddLocalBankModal
      bankNames={props.bankNames}
      modalVisible={props.modalVisibleAddLocalBank}
      actionIcon={props.toggleModalAddLocalBank}
      toggleModalAddLocalBank={props.toggleModalAddLocalBank}
      selectedBank={props.selectedBank}
      onChangeBankName={props.onChangeBankName}
      onChangeName={props.onChangeName}
      onChangeBill={props.onChangeBill}
      handleSave={props.handleSave}
    />
    <View 
      style={{
        padding: 10, 
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 24, color: '#000'}}>You don't have Creditcard</Text>
      </View>
      <Text style={{fontSize: 20, color: '#ccc'}}>Input your creditcard</Text>
      <Text style={{fontSize: 20, color: '#ccc'}}>number by pressing this</Text>
      <Text style={{fontSize: 20, color: '#ccc'}}>button below</Text>
      <Button full style={styles.backToMart} onPress={props.toggleModalAddLocalBank}>
				<Text style={styles.backToMartText}>+ Add Card</Text>
			</Button>
    </View>
  </Container>
)

export default CreditCardIsEmpty

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  content:{
    backgroundColor: '#fff'
  },
  backToMart:{
    marginLeft:30,
    marginRight:30,
    marginTop: 60,
    height: 60,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  backToMartText:{
    color: '#fff', 
    fontSize: 18 
  },
})
