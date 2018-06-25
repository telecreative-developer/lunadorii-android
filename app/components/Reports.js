import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Container, Content, Button, Item, Input, Textarea } from 'native-base'
import Navbar from '../particles/Navbar'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CategoryModal from '../modals/CategoryModal'

const Reports = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Reports"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <CategoryModal
      navbarTitle="Selected Category"
      navbarIcon="close"
      actionIcon={props.actionIcon}
      modalVisible={props.modalVisibleCategory}
      actionIcon={props.toggleModalCategory}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.padding}>
        <Text style={styles.label}>Name</Text>
        <Item regular style={styles.item} onPress={props.toggleModalCategory}>
          <Input placeholder='Your name as reporter' placeholderTextColor="#ccc" placeholderTextSize={12} />
        </Item>
        <Text style={styles.label}>Email</Text>
        <Item regular style={styles.item} onPress={props.toggleModalCategory}>
          <Input placeholder='Your email' placeholderTextColor="#ccc" placeholderTextSize={12} />
        </Item>
        <Text style={styles.label}>Subject</Text>
        <Item regular style={styles.item} onPress={props.toggleModalCategory}>
          <Input placeholder='Subject' placeholderTextColor="#ccc" placeholderTextSize={12} />
        </Item>
        <Text style={styles.label}>Reports</Text>
        <Textarea rowSpan={5} bordered placeholder="Write Here.." placeholderTextColor="#ccc" style={styles.textarea} />
      </View>
    </Content>
    <Button full style={styles.btnSend}><Text style={styles.txtSend}>Send Reports</Text></Button>
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