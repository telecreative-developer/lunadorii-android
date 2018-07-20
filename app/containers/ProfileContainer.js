import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid, BackHandler } from 'react-native'
import { RNS3 } from 'react-native-aws3';
import Profile from '../components/Profile'
import RecentOrders from '../particles/RecentOrders'
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'
import {connect} from 'react-redux'
import { fetchSingleUser } from '../actions/getSingleUser'
import { editName, editAvatar } from '../actions/editprofile'
import { fetchProductRecent, fetchProductHistory } from '../actions/product'

class ProfileContainer extends Component {

  state = {
    userData: {},
    stillLoading: true,
    first_name: "",
    last_name:"",
    bod: "",
    email: "",
    photoProfile: '',
    photoName: '',
    photoType: '',
    modalVisibleEditProfile: false,
    imageProfile: 'https://avatars0.githubusercontent.com/u/38149346?s=400&u=7db8195dd7b4436cbf6d0575915ca6b198d116cc&v=4',
  }

  toggleModalEditProfile() {
    this.setState({ modalVisibleEditProfile: !this.state.modalVisibleEditProfile })
  }

  async handleOpenCamera(){
    const session = await AsyncStorage.getItem('session')
    const data = await  JSON.parse(session)
    const options = await {
      storageOptions:{
        stillLoading: true,
        cameraRoll: true,
        path: this.state.imageProfile
      },
      quality: 1,
      maxWidth: 800,
      maxHeight: 800
    }
    await ImagePicker.showImagePicker(options, (responses) => {
      if(responses.didCancel){
        // alert("You've canceled")
        ToastAndroid.showWithGravity("Canceled", ToastAndroid.SHORT, ToastAndroid.CENTER)
      }else if(responses.error){
        // alert("An error occured")
        ToastAndroid.showWithGravity("Error occured", ToastAndroid.SHORT, ToastAndroid.CENTER)
      }else{
        let str = responses.fileName
        let fileExt = str.split(".")

        this.setState({
          stillLoading: true,
          imageProfile: responses.uri,
          photoName: `${Date.now()}.${fileExt[1]}`,
          photoType: `image/${fileExt[1]}`
        })
        this.uploadToS3(data.id, data.accessToken, responses.uri, `${Date.now()}.${fileExt[1]}`, `image/${fileExt[1]}`)
        this.setState({
          stillLoading: false
        })
      }
    })
  }

  uploadToS3(id, accessToken, uri, name, type){
    const file = {
      // `uri` can also be a file system path (i.e. file://)
      uri,
      name,
      type
    }
    
    const options = {
      keyPrefix: "avatars/",
      bucket: "lunadorii-dev",
      region: "ap-southeast-1",
      accessKey: "AKIAIDZ3JEHIHGIIFKDA",
      secretKey: "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",
      successActionStatus: 201,
      awsUrl: "s3.ap-southeast-1.amazonaws.com"
    }
    
    RNS3.put(file, options).progress((e) => console.log(e.loaded / e.total)).then(response => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      this.props.editAvatar(id, response.body.postResponse.location).then(response1 => {
        this.props.fetchSingleUser(id, accessToken)
      })
      /**
       * {
       *   postResponse: {
       *     bucket: "your-bucket",
       *     etag : "9f620878e06d28774406017480a59fd4",
       *     key: "uploads/image.png",
       *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
       *   }
       * }
       */
    }).catch(error => console.log(error));
  }

  async handleSaveEditProfile() {
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.editName(
        this.state.userData.id, 
        this.state.first_name, 
        this.state.last_name,
        this.state.bod, 
        this.state.userData.accessToken)
    await this.props.fetchSingleUser(data.id, data.accessToken)
    await this.setState({modalVisibleEditProfile: false })
    // await alert(this.props.editname.message)
    ToastAndroid.showWithGravity("Edited", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  async componentDidMount(){
    await BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchProductHistory(data.id, data.accessToken)
    await this.props.fetchProductRecent(data.id, data.accessToken)
    if(this.props.fetchSingleUser(data.id, data.accessToken)){
      this.setState({stillLoading: false})
    }
    await this.setState({
      userData: data,
      imageProfile: this.props.getsingleuser.avatar_url,
      first_name: this.props.getsingleuser.first_name,
      last_name : this.props.getsingleuser.last_name,
      bod: this.props.getsingleuser.bod,
      email: this.props.getsingleuser.email
    })
  }

  render() {
    console.log('state :', this.props.getsingleuser)
    return (
      <Profile
        dataRecentOrders={this.props.productrecent}
        renderRecentOrders={({ item, key }) => (
          <RecentOrders
            image={item.list[0].thumbnails[0].thumbnail_url}
            amountOfItem={item.list.length}
            billing_code={item.billing_code}
            status={item.order_status}
            total={item.total == null ? item.total : item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={moment(item.created_at).calendar()}
            action={() => this.props.navigation.navigate("DetailsTransactionContainer", {data:item})}
          />
        )}

        photoProfile={this.props.getsingleuser.avatar_url}
        handleOpenCamera={() => this.handleOpenCamera()}

        toggleModalEditProfile={() => this.toggleModalEditProfile()}
        modalVisibleEditProfile={this.state.modalVisibleEditProfile}

        profile={this.state}
        onChangeFirstName={(first_name) => this.setState({ first_name })}
        onChangeLastName={(last_name) => this.setState({ last_name })}
        onChangeBirthDate={(bod) => this.setState({ bod })}
        handleSaveEditProfile={() => this.handleSaveEditProfile()}

        navigateToHome={() => this.props.navigation.navigate("HomeContainer")}
        navigateToPurchaseHistory={() => this.props.navigation.navigate("PurchaseHistoryContainer")}
        navigateToWhishlist={() => this.props.navigation.navigate("WishlistContainer")}
        navigateToCreditCard={() => this.props.navigation.navigate("CreditCardContainer")}
        navigateToReviews={() => this.props.navigation.navigate("ReviewsContainer")}
        navigateToShippingAddress={() => this.props.navigation.navigate("YourShippingAddressContainer")}
        navigateToReports={() => this.props.navigation.navigate("ReportsContainer", {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email})}
        navigateToSettings={() => this.props.navigation.navigate("SettingsContainer")}
        navigateToPrivacyPolicy={() => this.props.navigation.navigate("PrivacyPolicyContainer")}
        stillLoading={this.state.stillLoading}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleUser: (id, accessToken) => dispatch(fetchSingleUser(id, accessToken)),
    fetchProductRecent: (id, accessToken) => dispatch(fetchProductRecent(id, accessToken)),
    fetchProductHistory: (id, accessToken) => dispatch(fetchProductHistory(id, accessToken)),
    editName: (id, firstName, lastName, bod, accessToken) => dispatch(editName(id, firstName, lastName, bod, accessToken)),
    editAvatar: (id, avatar_url) => dispatch(editAvatar(id, avatar_url))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    getsingleuser: state.getsingleuser,
    editname: state.editname,
    editavatar: state.editavatar,
    productrecent: state.productrecent,
    producthistory: state.producthistory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)