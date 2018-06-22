import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native'
import { Container, Content, Icon, Button, Footer, Form, Label, Item, Input } from 'native-base'
import PropTypes from 'prop-types'

const Login = (props) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content" />
    <Content style={{ backgroundColor: '#fff' }}>
      <View style={{ padding: 20 }}>
        <View style={styles.footerImage}>
          <Image source={require('../assets/images/icon/LogoLD.png')} style={{ width: 250, height: 65 }} />
        </View>
        <View>
          <Form>
            <Label style={styles.txtLabel}>First name</Label>
            <Item regular style={styles.item}>
              <Input placeholder="Your first name" placeholderTextColor="#ccc" />
            </Item>
            <Label style={styles.txtLabel}>Last name</Label>
            <Item regular style={styles.item}>
              <Input placeholder="Your last name" placeholderTextColor="#ccc" />
            </Item>
            <Label style={styles.txtLabel}>Email</Label>
            <Item regular style={styles.item}>
              <Input placeholder="You email address" placeholderTextColor="#ccc" />
            </Item>
            <Label style={styles.txtLabel}>Password</Label>
            <Item regular style={styles.item}>
              <Input placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />
            </Item>
          </Form>
          <View style={{ paddingTop: 5, paddingBottom: 10 }}>
            <Button full style={{ borderRadius: 5, backgroundColor: '#d11e48' }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>Register</Text>
            </Button>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center' }}>Doesn't have account?</Text>
            <TouchableOpacity style={{ alignSelf: 'center' }}>
              <Text style={{ color: '#d11e48' }}> Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Content>
  </Container>
)

export default Login

const styles = StyleSheet.create({
  footerImage: {
    marginTop: 20,
    marginBottom: 50,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  item: {
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
})