import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import Profile from '../components/Profile'
import RecentOrders from '../particles/RecentOrders'
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'
import {connect} from 'react-redux'
import { fetchSingleUser } from '../actions/getSingleUser'
import { editName } from '../actions/editprofile'
import { fetchProductRecent, fetchProductHistory } from '../actions/product'

const dataRecentOrders = [
  {
    image: 'https://ssli.ebayimg.com/images/g/Dp8AAOSwPc9WuaVh/s-l640.jpg',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total: 650000
  },
  {
    image: 'https://i5.walmartimages.ca/images/Large/1c0/_en/999999-00770103148748_a1c0_en.jpg?odnBound=460',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Non - Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total: 450000
  },
  {
    image: 'https://image.afcdn.com/expertclub/20150420/279261_w300h300.jpg',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total: 750000
  },
]

class ProfileContainer extends Component {

  state = {
    userData: {},
    first_name: "",
    last_name:"",
    bod: "",
    email: "",
    photoProfile: '',
    modalVisibleEditProfile: false,
    imageProfile: 'https://avatars0.githubusercontent.com/u/38149346?s=400&u=7db8195dd7b4436cbf6d0575915ca6b198d116cc&v=4',
  }

  toggleModalEditProfile() {
    this.setState({ modalVisibleEditProfile: !this.state.modalVisibleEditProfile })
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

  async handleSaveEditProfile() {
    await this.props.editName(
        this.state.userData.id, 
        this.state.first_name, 
        this.state.last_name,
        this.state.bod, 
        this.state.userData.accessToken)
    await this.setState({modalVisibleEditProfile: false })
    await alert(this.props.editname.message)
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchSingleUser(data.id, data.accessToken)
    await this.props.fetchProductHistory(data.id)
    await this.props.fetchProductRecent(data.id)
    await this.setState({
      userData: data,
      first_name: this.props.getsingleuser.first_name,
      last_name : this.props.getsingleuser.last_name,
      bod: this.props.getsingleuser.bod,
      email: this.props.getsingleuser.email
    })
  }

  render() {
    console.log(this.props.productrecent)
    return (
      <Profile
        dataRecentOrders={this.props.productrecent}
        renderRecentOrders={({ item, key }) => (
          <RecentOrders
            image={item.image}
            categories={item.category}
            status={item.status}
            total={item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={moment(item.Tanggal).calendar()}/>
        )}

        photoProfile={this.state.photoProfile}
        handleOpenCamera={() => this.handleOpenCamera()}

        toggleModalEditProfile={() => this.toggleModalEditProfile()}
        modalVisibleEditProfile={this.state.modalVisibleEditProfile}

        profile={this.state}
        onChangeFirstName={(first_name) => this.setState({ first_name })}
        onChangeLastName={(last_name) => this.setState({ last_name })}
        onChangeBirthDate={(bod) => this.setState({ bod })}
        handleSaveEditProfile={() => this.handleSaveEditProfile()}

        navigateToPurchaseHistory={() => this.props.navigation.navigate("PurchaseHistoryContainer")}
        navigateToWhishlist={() => this.props.navigation.navigate("WishlistContainer")}
        navigateToLocalBank={() => this.props.navigation.navigate("LocalBankContainer")}
        navigateToReviews={() => this.props.navigation.navigate("ReviewsContainer")}
        navigateToShippingAddress={() => this.props.navigation.navigate("YourShippingAddressContainer")}
        navigateToReports={() => this.props.navigation.navigate("ReportsContainer", {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email})}
        navigateToSettings={() => this.props.navigation.navigate("SettingsContainer")}
        navigateToPrivacyPolicy={() => this.props.navigation.navigate("PrivacyPolicyContainer")}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleUser: (id, accessToken) => dispatch(fetchSingleUser(id, accessToken)),
    fetchProductRecent: (id) => dispatch(fetchProductRecent(id)),
    fetchProductHistory: (id) => dispatch(fetchProductHistory(id)),
    editName: (id, firstName, lastName, bod, accessToken) => dispatch(editName(id, firstName, lastName, bod, accessToken))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    getsingleuser: state.getsingleuser,
    editname: state.editname,
    productrecent: state.productrecent,
    producthistory: state.producthistory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)