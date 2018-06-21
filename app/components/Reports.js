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
        <Text style={styles.label}>Input your report below here</Text>
        <Item regular onPress={props.toggleModalCategory} style={styles.item}>
          <Input placeholder='Problem Category' placeholderTextColor="#ccc" placeholderTextSize={12} disabled />
          <FontAwesome name='sort-down' style={styles.icon} />
        </Item>
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
    fontWeight: 'bold',
    fontSize: 16
  },
  icon: {
    fontSize: 16,
    paddingRight: 10
  },
  padding: {
    padding: 10,
    paddingTop: 15
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