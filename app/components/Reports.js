import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Button, Item, Input, Textarea } from 'native-base'
import { ModalCategory } from '../particles/Modal'
import Navbar from '../particles/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Reports = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Reports"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <ModalCategory 
      navbarTitle= "Selected Category"
      navbarIcon="close"
      actionIcon={props.actionIcon}
      modalVisible={props.modalVisible}
      actionIcon = {props.closeModal}
    />
    <Content>
      <View style={{padding: 20}}>
        <Text style={styles.label}>Input your report below here</Text>  
        <Item regular onPress={props.openModal} style={styles.item}>
          <Input placeholder='Problem Category' placeholderTextColor="#ccc" placeholderTextSize={12} disabled/>
          <FontAwesome name='sort-down' style={styles.icon}/>
        </Item>
        <Textarea rowSpan={5} bordered placeholder="Write Here.." placeholderTextColor="#ccc" style={styles.textarea}/>
      </View>
    </Content>
    <Button full style={styles.btnSend}><Text style={styles.txtSend}>Send Reports</Text></Button>  
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  label:{
    fontWeight: 'bold', 
    fontSize: 16
  },
  icon:{
    fontSize: 16, 
    paddingRight: 10
  },
  btnSend:{
    backgroundColor: '#f65857'
  },
  txtSend:{
    color: "#fff", 
    fontSize: 16
  },
  item:{
    marginTop: 10,
    borderRadius: 5
  },
  textarea:{
    marginTop: 10,
    borderRadius: 5
  }
})

export default Reports