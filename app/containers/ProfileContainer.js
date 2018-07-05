import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import Profile from '../components/Profile'
import RecentOrders from '../particles/RecentOrders'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import { fetchSingleUser } from '../actions/getSingleUser'
import { editName } from '../actions/editprofile'

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
        this.state.firstName, 
        this.state.lastName, 
        this.state.userData.accessToken)
    await this.setState({modalVisibleEditProfile: false })
    alert("Profile Saved")
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      userData: data,
      firstName: data.first_name,
      lastName : data.last_name,
    })
    await this.props.fetchSingleUser(data.id, data.accessToken)
  }

  render() {
    {console.log(this.props.fetchSingleUser)}
    return (
      <Profile
        dataRecentOrders={dataRecentOrders}
        renderRecentOrders={({ item, key }) => (
          <RecentOrders
            image={item.image}
            categories={item.categories}
            status={item.status}
            total={item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            date={item.date}
            time={item.time} />
        )}

        photoProfile={this.state.photoProfile}
        handleOpenCamera={() => this.handleOpenCamera()}

        toggleModalEditProfile={() => this.toggleModalEditProfile()}
        modalVisibleEditProfile={this.state.modalVisibleEditProfile}

        profile={this.state}
        onChangeFirstName={(firstName) => this.setState({ firstName })}
        onChangeLastName={(lastName) => this.setState({ lastName })}
        onChangeBirthDate={(birthDate) => this.setState({ birthDate })}
        handleSaveEditProfile={() => this.handleSaveEditProfile()}

        navigateToPurchaseHistory={() => this.props.navigation.navigate("PurchaseHistoryContainer")}
        navigateToWhishlist={() => this.props.navigation.navigate("WishlistContainer")}
        navigateToLocalBank={() => this.props.navigation.navigate("LocalBankContainer")}
        navigateToReviews={() => this.props.navigation.navigate("ReviewsContainer")}
        navigateToShippingAddress={() => this.props.navigation.navigate("YourShippingAddressContainer")}
        navigateToReports={() => this.props.navigation.navigate("ReportsContainer")}
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
    editName: (id, firstName, lastName, accessToken) => dispatch(editName(id, firstName, lastName, accessToken))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    getsingleuser: state.getsingleuser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)