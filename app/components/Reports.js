import React from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Button, Item, Input, Textarea, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.name ? '#ccc' : '#c0392b'
        }}>
          <Input value={props.name} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeName}/>
          <Ionicons name={props.name ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.label}>Email</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.email ? '#ccc' : '#c0392b'
        }}>
          <Input value={props.email} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeEmail}/>
          <Ionicons name={props.email ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.label}>Subject</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.subject ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder='Subject' value={props.subject} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeSubject}/>
          <Ionicons name={props.subject ? 'md-checkmark' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.label}>Reports</Text>
        <Textarea rowSpan={5} bordered placeholder="Write Here.." value={props.reports} placeholderTextColor="#ccc" style={{marginTop: 10, marginBottom: 10, borderRadius: 5,borderColor: props.reports ? '#ccc' : '#c0392b'}} onChangeText={props.onChangeReports}/>
      </View>
    </Content>
    {props.name && props.email && props.subject && props.reports ? (
      <Button full style={styles.btnSend} onPress={props.handleSendReport} disabled={props.buttonReport}>
        {props.buttonReport ? (<Spinner color="#fff"/>): (<Text style={styles.txtSend}>Send Reports</Text>)}
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} onPress={props.handleSendReport} disabled>
        <Text style={styles.buttonSaveTextStyleDisabled}>Send Reports</Text>
      </Button>
    )}
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
  },
  buttonSaveStyleDisabled: {
    height: 50,
    backgroundColor: '#f6f6f6'
  },
  buttonSaveTextStyleDisabled: {
    color: '#ccc',
    fontSize: 18
  },
})

export default Reports