import React, {Component} from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Button } from 'native-base'

const AddPhotoProfile = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.wrapper}>
        <View style={{padding: 20, paddingTop: 100 }}>
          <Image source={require('../assets/images/icon/photosluna.png')} style={{height: 150, width: 150}}/>
        </View>
        <View style={{paddingBottom: 60}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>Add Photo Profile</Text>
        </View>
        <Button full style={styles.uploadButton}>
					<Text style={styles.uploadButtonText}>Upload</Text>
				</Button>
      </View>
    </Content>
    <View style={{alignItems: 'center', padding: 30}}>
      <TouchableOpacity>
        <Text style={{color: '#d11e48', fontSize: 16}}>Skip</Text>
      </TouchableOpacity>
    </View>
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
    paddingRight: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoSize:{
    width: 250, 
    height: 65 
  },
  uploadButton:{
    height: 50,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  uploadButtonText:{
    color: '#fff', 
    fontSize: 18 
  },
})