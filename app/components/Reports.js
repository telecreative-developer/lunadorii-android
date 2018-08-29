import React from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Button, Item, Input, Textarea, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const Reports = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle={I18n.t('report_title')}
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.padding}>
        <Text style={styles.label}>{I18n.t('report_label_name')}</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.name ? '#ccc' : '#c0392b'
        }}>
          <Input value={props.name} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeName} placeholder={I18n.t('report_label_name_placeholder')}/>
          <Ionicons name={props.name ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.label}>{I18n.t('report_label_email')}</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.email ? '#ccc' : '#c0392b'
        }}>
          <Input value={props.email} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeEmail} placeholder={I18n.t('report_label_email_placeholder')}/>
          <Ionicons name={props.email ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.label}>{I18n.t('report_label_subject')}</Text>
        <Item regular style={{
          marginBottom: 10,
          borderRadius: 5,
          height: 40,
          borderColor: props.subject ? '#ccc' : '#c0392b'
        }}>
          <Input placeholder={I18n.t('report_label_subject_placeholder')} value={props.subject} placeholderTextColor="#ccc" placeholderTextSize={12} onChangeText={props.onChangeSubject}/>
          <Ionicons name={props.subject ? '' : 'ios-alert-outline' } size={18} style={{padding: 10}}/>
        </Item>
        <Text style={styles.label}>{I18n.t('report_label_report')}</Text>
        <Textarea rowSpan={5} bordered placeholder={I18n.t('report_label_report_placeholder')} value={props.reports} placeholderTextColor="#ccc" style={{marginTop: 10, marginBottom: 10, borderRadius: 5,borderColor: props.reports ? '#ccc' : '#c0392b'}} onChangeText={props.onChangeReports}/>
      </View>
    </Content>
    {props.name && props.email && props.subject && props.reports ? (
      <Button full style={styles.btnSend} onPress={props.handleSendReport} disabled={props.buttonReport}>
        {props.buttonReport ? (<Spinner color="#fff"/>): (<Text style={styles.txtSend}>{I18n.t('report_button')}</Text>)}
      </Button>
    ) : (
      <Button full style={styles.buttonSaveStyleDisabled} onPress={props.handleSendReport} disabled>
        <Text style={styles.buttonSaveTextStyleDisabled}>{I18n.t('report_button')}</Text>
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