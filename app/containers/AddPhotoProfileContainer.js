import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker'
import AddPhotoProfile from '../components/AddPhotoProfile'

export default class AddPhotoProfileContainer extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      photoProfile: ''
    }
  }

  async handleOpenCamera(){
    const options = await {
      storageOptions:{
        cameraRoll: true,
        path: this.state.photoProfile
      }
    }
    await ImagePicker.showImagePicker(options, (responses) => {
      if(responses.didCancel){
        alert("You've canceled")
      }else if(responses.error){
        alert("An error occured")
      }else{
        this.setState({
          photoProfile: responses.uri
        })
      }
    })
  }

  render(){
    return(
      <AddPhotoProfile
        photoProfile={this.state.photoProfile}
        handleOpenCamera={() => this.handleOpenCamera()}/>
    )
  }
}