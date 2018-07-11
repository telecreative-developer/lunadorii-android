import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import { Container, Button, Icon, Content, Tabs, Tab } from 'native-base'
import SVGImage from 'react-native-svg-image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import ImagePurchaseHistory from '../assets/images/icon/purchase-history.png'
import ImageWhislist from '../assets/images/icon/wishlist.png'
import ImageCreditCard from '../assets/images/icon/credit-card.png'
import ImageYourReviews from '../assets/images/icon/your-reviews.png'
import ImageShippingAddress from '../assets/images/icon/shipping-address.png'
import ImageReport from '../assets/images/icon/report.png'
import ImageSettings from '../assets/images/icon/settings.png'
import ImagePrivacyPolicy from '../assets/images/icon/privacy-policy.png'
import EditProfileModal from '../modals/EditProfileModal'
const { height, width } = Dimensions.get('window')

const Profile = (props) => (
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Profile"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <EditProfileModal
      navbarTitle="Edit Profile"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditProfile}
      actionIcon={props.toggleModalEditProfile}

      photoProfile={props.photoProfile}
      imageProfile={props.profile.userData.imageProfile}
      first_name={props.profile.first_name}
      last_name={props.profile.last_name}
      bod={props.profile.bod}

      onChangeFirstName={props.onChangeFirstName}
      onChangeLastName={props.onChangeLastName}
      onChangeBirthDate={props.onChangeBirthDate}
      handleSaveEditProfile={props.handleSaveEditProfile}
      handleOpenCamera={props.handleOpenCamera}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.headerProfile}>
        <View style={styles.subHeaderProfile}>
          <View style={styles.flexDirectionRow}>
            <View>
              <Image source={{ uri: props.profile.userData.avatar_url }} style={styles.imageProfile} />
            </View>
            <View>
              <View style={styles.viewNameProfile}>
                <Text style={styles.txtNameProfile}>Hello, {props.profile.first_name}</Text>
                <Button style={styles.btnProfile}><Text style={styles.txtBtnProfile} onPress={props.toggleModalEditProfile}>
                  <MaterialCommunityIcons name="pencil" size={15} /> Edit Profile</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewRecent}>
        <Text style={styles.txtRecent}>Recent Orders</Text>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.dataRecentOrders}
            renderItem={props.renderRecentOrders}
          />
        </View>
      </View>
      <View>
        <Text style={styles.txtMenuTitle}>Menu</Text>
        <View style={styles.viewMenu}>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToPurchaseHistory}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImagePurchaseHistory} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Purchase History</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToWhishlist}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageWhislist} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Wishlist</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToLocalBank}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageCreditCard} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Credit Card</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToReviews}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageYourReviews} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Your Reviews</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewMenu}>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToShippingAddress}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageShippingAddress} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Shipping Address</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToReports}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageReport} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Report</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToSettings}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageSettings} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Settings</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToPrivacyPolicy}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImagePrivacyPolicy} style={styles.imageIcon} />
                <Text style={styles.txtMenu}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  headerProfile: {
    backgroundColor: '#d11e47'
  },
  subHeaderProfile: {
    padding: 20
  },
  viewNameProfile: {
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 10
  },
  txtNameProfile: {
    fontSize: 16,
    color: '#fff'
  },
  btnProfile: {
    backgroundColor: '#c0c0bf',
    height: 30,
    marginTop: 10
  },
  txtBtnProfile: {
    justifyContent: 'center',
    padding: 20,
    color: '#fff'
  },
  imageProfile: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  viewMenu: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5
  },
  viewBoxMenu: {
    flex: 0.25,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    margin: 5
  },
  viewSubBoxMenu: {
    alignItems: 'center',
    padding: 10
  },
  imageIcon: {
    width: 35,
    height: 35
  },
  txtMenu: {
    textAlign: 'center',
    fontSize: 12,
    color: '#e97e94'
  },
  viewRecent: {
    paddingBottom: 20,
    paddingTop: 20
  },
  txtRecent: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 16
  },
  txtMenuTitle: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 16
  }
})

export default Profile