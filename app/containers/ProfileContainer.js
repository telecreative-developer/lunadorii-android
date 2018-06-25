import React, { Component } from 'react'
import Profile from '../components/Profile'
import RecentOrders from '../particles/RecentOrders'
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
    total: '250.000'
  },
  {
    image: 'https://i5.walmartimages.ca/images/Large/1c0/_en/999999-00770103148748_a1c0_en.jpg?odnBound=460',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Non - Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total: '250.000'
  },
  {
    image: 'https://image.afcdn.com/expertclub/20150420/279261_w300h300.jpg',
    categories: 'Beuty Box, Cream Sunblock, and 3 others',
    status: 'Packing',
    date: '20 Mei',
    time: '12:00 AM',
    total: '250.000'
  },
]

class ProfileContainer extends Component {

  state = {
    modalVisibleEditProfile: false,
    imageProfile: 'https://avatars0.githubusercontent.com/u/38149346?s=400&u=7db8195dd7b4436cbf6d0575915ca6b198d116cc&v=4',
    firstName: '',
    lastName: '',
    email: 'hyperspace018@gmail.com',
    birthDate: '17/11/1999'
  }

  toggleModalEditProfile() {
    this.setState({ modalVisibleEditProfile: !this.state.modalVisibleEditProfile })
  }

  handleSaveEditProfile() {
    this.props.editName(6, this.state.firstName, this.state.lastName, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InVzZXIiLCJpYXQiOjE1Mjk2NTUyODMsImV4cCI6MTUzMDI2MDA4MywiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL2tldmluaGVybWF3YW4iLCJzdWIiOiJsdW5hZG9yaWkifQ.DIQ6yH4qU_8oUAo7263CYkDklsCer2I2WLbaF_xHzAs')
    this.props.navigation.goBack()
    alert("Profile Saved")
  }

  async componentDidMount(){
    await this.props.fetchSingleUser(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InVzZXIiLCJpYXQiOjE1Mjk2NTUyODMsImV4cCI6MTUzMDI2MDA4MywiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL2tldmluaGVybWF3YW4iLCJzdWIiOiJsdW5hZG9yaWkifQ.DIQ6yH4qU_8oUAo7263CYkDklsCer2I2WLbaF_xHzAs')
    await this.setState({
      firstName: this.props.getsingleuser.first_name,
      lastName : this.props.getsingleuser.last_name,      
    })
  }

  render() {
    console.log('state',this.state.firstName)
    console.log('prop', this.props.getsingleuser.first_name)
    return (
      <Profile
        dataRecentOrders={dataRecentOrders}
        renderRecentOrders={({ item, key }) => (
          <RecentOrders
            image={item.image}
            categories={item.categories}
            status={item.status}
            total={item.total}
            date={item.date}
            time={item.time} />
        )}

        toggleModalEditProfile={() => this.toggleModalEditProfile()}
        modalVisibleEditProfile={this.state.modalVisibleEditProfile}

        profile={this.state}
        onChangeFirstName={(firstName) => this.setState({ firstName })}
        onChangeLastName={(lastName) => this.setState({ lastName })}
        onChangeBirthDate={(birthDate) => this.setState({ birthDate })}
        handleSaveEditProfile={() => this.handleSaveEditProfile()}

        navigateToPurchaseHistory={() => this.props.navigation.navigate("PurchaseHistoryContainer")}
        navigateToWhishlist={() => this.props.navigation.navigate("WishlistContainer")}
        navigateToCreditCard={() => this.props.navigation.navigate("CreditCardContainer")}
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