import React, {Component} from 'react'
import { View, StyleSheet, StatusBar, Text } from 'react-native'
import { Container, Content, Image, Button } from 'native-base'

const AddPhotoProfile = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.wrapper}>
        <Button full style={styles.buttons}>
					<Text style={styles.buttonsText}>Login</Text>
				</Button>
      </View>
    </Content>
  </Container >
)

export default AddPhotoProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  content:{
    backgroundColor: '#fff'
  },
  wrapper:{
    paddingLeft: 45,
    paddingRight: 45
  },
  logoSize:{
    width: 250, 
    height: 65 
  },
  buttons:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonsText:{
    color: '#fff', 
    fontSize: 18 
  },
})