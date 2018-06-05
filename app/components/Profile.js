import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { Container, Button, Icon, Content } from 'native-base'
import SVGImage from 'react-native-svg-image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import ImageCalendar from '../assets/images/icon/calendar.png'
import EditProfileModal from '../modals/EditProfileModal'

const Profile = (props) => (
  <Container style={styles.container}>
    <Navbar 
      navbarTitle="Profile"
      navbarIcon="arrow-back"
    />
    <EditProfileModal
      navbarTitle="Edit Profile"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditProfile}
      actionIcon={props.toggleModalEditProfile}
    />
    <Content>
      <View style={styles.headerProfile}>
        <View style={styles.subHeaderProfile}>
          <View style={styles.flexDirectionRow}>
            <View>
              <Image source={{uri: "https://telecreativenow.com/images/team/Rendi.png"}} style={styles.imageProfile}/>
            </View>
            <View>
              <View style={styles.viewNameProfile}>
                <Text style={styles.txtNameProfile}>Hello, Rendi Simamora</Text>
                <Button style={styles.btnProfile}><Text style={styles.txtBtnProfile} onPress={props.toggleModalEditProfile}>
                  <MaterialCommunityIcons name="pencil" size={15}/> Edit Profile</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewRecent}>
        <Text style={styles.txtRecent}>Recent Orders</Text>
        <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={props.dataRecentOrders}
          renderItem={props.renderRecentOrders}
          keyExtractor={(item, index) => JSON.stringify(index)}
          style={styles.flatList}
        />
      </View>
      <View>
        <View style={styles.viewMenu}> 
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToPurchaseHistory}>
              <View style={styles.viewSubBoxMenu}>              
                  <Image source={ImageCalendar} style={styles.imageIcon}/>
                  <Text style={styles.txtMenu}>Purchase History</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToWhishlist}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageCalendar} style={styles.imageIcon}/>
                <Text style={styles.txtMenu}>Whishlist</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToCreditCard}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageCalendar} style={styles.imageIcon}/>
                <Text style={styles.txtMenu}>Credit Card</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToReviews}> 
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageCalendar} style={styles.imageIcon}/>
                <Text style={styles.txtMenu}>Your Reviews</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewMenu}> 
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToShippingAddress}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageCalendar} style={styles.imageIcon}/>
                <Text style={styles.txtMenu}>Shipping Address</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <TouchableOpacity onPress={props.navigateToReports}>
              <View style={styles.viewSubBoxMenu}>
                <Image source={ImageCalendar} style={styles.imageIcon}/>
                <Text style={styles.txtMenu}>Report</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBoxMenu}>
            <View style={styles.viewSubBoxMenu}>
              <Image source={ImageCalendar} style={styles.imageIcon}/>
              <Text style={styles.txtMenu}>Settings</Text>
            </View>
          </View>
          <View style={styles.viewBoxMenu}>
            <View style={styles.viewSubBoxMenu}>
              <Image source={ImageCalendar} style={styles.imageIcon}/>
              <Text style={styles.txtMenu}>Privacy Policy</Text>
            </View>
          </View>
        </View>
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  headerProfile:{
    backgroundColor: '#d11e47'
  },
  subHeaderProfile:{
    padding: 20
  },
  viewNameProfile:{
    flexDirection: 'column', 
    marginLeft: 20, 
    marginTop: 10
  },
  txtNameProfile:{
    fontSize: 16, 
    color: '#fff'
  },
  btnProfile:{
    backgroundColor: '#c0c0bf', 
    height: 30, 
    marginTop: 10
  },
  txtBtnProfile:{
    justifyContent: 'center', 
    padding: 20, 
    color: '#fff'
  },
  imageProfile:{
    width: 80, 
    height: 80, 
    borderRadius: 40
  },
  flexDirectionRow:{
    flexDirection: 'row'
  },
  viewMenu:{
    flexDirection: 'row',
    paddingLeft: 15, 
    paddingRight: 15
  },
  viewBoxMenu:{
    flex: 0.25, 
    borderWidth: 1, 
    borderColor: '#e2e2e2',
    margin: 5
  },
  viewSubBoxMenu:{
    alignItems: 'center', 
    padding: 10
  },
  imageIcon:{
    width: 30, 
    height: 30
  },
  txtMenu:{
    textAlign: 'center', 
    fontSize: 12, 
    color: '#e97e94'
  },
  viewRecent:{
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20 
  },
  txtRecent:{
    fontWeight: 'bold', 
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 16
  }
})

export default Profile