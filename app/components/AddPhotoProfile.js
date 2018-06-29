import React, {Component} from 'react'
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Content, Button } from 'native-base'
const { height, width } = Dimensions.get('window')

const AddPhotoProfile = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={props.handleOpenCamera}>
          <View style={props.photoProfile.length == 0 ? {padding: 20, paddingTop: 100} : {padding: 20, paddingTop: 100, borderRadius: 50}}>
              <Image source={props.photoProfile.length == 0 ? require('../assets/images/icon/photosluna.png') : {uri: props.photoProfile}} style={{height: 150, width: 150, borderRadius: 150/2}}/>    
          </View>
        </TouchableOpacity>
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