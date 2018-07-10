import React from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Button, Item, Input, Textarea, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const { height, width } = Dimensions.get('window')

const Reports = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Reports"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.padding}>
        <Text style={styles.label}>Name</Text>
        <Item regular style={styles.item}>
          <Input value={props.name} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeName}/>
        </Item>
        <Text style={styles.label}>Email</Text>
        <Item regular style={styles.item}>
          <Input value={props.email} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeEmail}/>
        </Item>
        <Text style={styles.label}>Subject</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Subject' value={props.subject} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeSubject}/>
        </Item>
        <Text style={styles.label}>Reports</Text>
        <Textarea rowSpan={5} bordered placeholder="Write Here.." value={props.reports} placeholderTextColor="#ccc" style={styles.textarea} onChangeText={props.onChangeReports}/>
      </View>
    </Content>
    <Button full style={styles.btnSend} onPress={props.handleSendReport} disabled={props.buttonReport}>
      {props.buttonReport ? (<Spinner />): (<Text style={styles.txtSend}>Send Reports</Text>)}
    </Button>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  label: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  icon: {
    fontSize: 16,
    paddingRight: 10
  },
  padding: {
    paddingLeft: 10,
    paddingRight: 10
  },
  btnSend: {
    backgroundColor: '#d11e48'
  },
  txtSend: {
    color: "#fff",
    fontSize: 18
  },
  item: {
    marginTop: 10,
    borderRadius: 5,
    height: 40
  },
  textarea: {
    marginTop: 10,
    borderRadius: 5
  }
})

export default Reports