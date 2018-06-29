import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker'
import AddPhotoProfile from '../components/AddPhotoProfile'

import { connect } from 'react-redux'
import { saveUpdateImage } from '../actions/addimage'

class AddPhotoProfileContainer extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      email: '',
      password: '',
      avatar_url: ''
    }
  }

  componentDidMount(){
    const {user, id} = this.props.navigation.state.params
    this.setState({
      id: id,
      email: user.email,
      password: user.password
    })
    console.log('state id from register: ', id)
  }

  async handleOpenCamera(){
    const options = await {
      storageOptions:{
        cameraRoll: true,
        path: this.state.avatar_url
      }
    }
    await ImagePicker.showImagePicker(options, (responses) => {
      if(responses.didCancel){
        alert("You've canceled")
      }else if(responses.error){
        alert("An error occured")
      }else{
        this.setState({
          avatar_url: responses.uri
        })
      }
    })
  }

  async handleActionUpload(){
    await this.props.saveUpdateImage(this.state.id, this.state.email, this.state.password, this.state)
    await this.props.navigation.navigate('HomeContainer')
  }

  render(){
    return(
      <AddPhotoProfile
        photoProfile={this.state.avatar_url}
        handleOpenCamera={() => this.handleOpenCamera()}
        handleActionUpload={() => this.handleActionUpload()}/>
    )
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    saveUpdateImage: (id, email, password, items) => dispatch(saveUpdateImage(id, email, password, items)),
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhotoProfileContainer)