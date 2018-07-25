import React, { Component } from 'react'
import { Text, StyleSheet, Dimensions, StatusBar, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Container, Content, Button, View } from 'native-base'
import NavbarTransparent from '../particles/NavbarTransparent'
import UnderDevelopment from '../particles/UnderDevelopment'
import AddReviewsModal from '../modals/AddReviewsModal'
import ImageViewModal from '../modals/ImageViewModal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
const { height, width } = Dimensions.get('window')

const DetailsOrder = (props) => (

  <Container style={styles.container}>
    <AddReviewsModal
      navbarTitle="Reviews"
      navbarIcon="close"
      modalVisible={props.modalVisibleAddReviews}
      actionIcon={props.toggleModalAddReviews}

      review={props.review}
      onChangeReview={props.onChangeReview}

      ratings={props.ratings}
      onChangeRatings={props.onChangeRatings}

      handleReview={props.handleReview}
    />
    <Content>
      <TouchableHighlight onPress={props.toggleImageViewModal}>
        <ImageBackground source={{ uri: props.image }} style={styles.imageBackgroundStyle}>
          <NavbarTransparent
            navbarTitle=""
            navbarIcon="arrow-back"
            actionIcon={props.goback} />
          <StatusBar
            backgroundColor="#d11e48"
            barStyle="light-content"
          />
          <TouchableOpacity style={styles.touchableOpacity} onPress={props.toggleImageViewModal}>
            <Text style={styles.textPhotos}><FontAwesome name="photo" style={styles.touchableOpacityButtonIcon} /> +{props.amountOfImage} Photos</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableHighlight>
      <ImageViewModal
        modalVisible={props.modalVisibleImageView}
        actionIcon={props.toggleImageViewModal}
        images={props.images}
      />
      <View style={styles.grandWrapper}>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Transaction Code</Text>
            <Text style={{color: '#ccc'}}>{props.billing_code}</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Purchase Transaction Number</Text>
            <Text style={{color: '#ccc'}}>{props.purchase_number}</Text>
            {console.log(props.purchase_number)}
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Shipping Method</Text>
            <Text style={{color: '#ccc'}}>SHIPPING_METHOD</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Status</Text>
            <Text style={{color: '#ccc'}}>{props.status}</Text>
            {console.log(props.status)}
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Payment Successfully Time</Text>
            <Text style={{color: '#ccc'}}>{props.payment_time}</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Delivery Time</Text>
            <Text style={{color: '#ccc'}}>{props.delivery_time}</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Receiptment Time</Text>
            <Text style={{color: '#ccc'}}>{props.receipt_time}</Text>
          </View>
        </View>
        <View style={{borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
          <View style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5, marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold',fontSize: 18}}>Delivery Service</Text>
            <Text style={{color: '#ccc'}}>{props.delivery_service}</Text>
          </View>
        </View>
      </View>
    </Content>
    <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10}}>
      {props.status !== 'delivered'? (
        <Button full style={styles.buttonStyleFotterDisabled} onPress={props.status !== 'delivered' ? props.showToast : props.toggleModalAddReviews}>
          <Text style={styles.textStyleFooterDisabled}>Review</Text>
        </Button>
      ) : (
        <Button full style={styles.buttonStyleFotter} onPress={props.toggleModalAddReviews}>
          <Text style={styles.textStyleFooter}>Review</Text>
        </Button>
      )}
      <Button full style={styles.buttonStyleFotter} onPress={props.navigateToHome}>
        <Text style={styles.textStyleFooter}>Go shop</Text>
      </Button>
    </View>
  </Container>

)

export default DetailsOrder

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff'
  },
  imageBackgroundStyle: {
    height: 250,
    width: '100%'
  },
  textPhotos: {
    padding: 10,
    justifyContent: 'center',
    bottom: 5,
    color: '#000',
    fontWeight: 'bold'
  },
  touchableOpacityButtonIcon: {
    fontSize: 16
  },
  touchableOpacity: {
    backgroundColor: 'rgba(202, 202, 202, 0.73)',
    marginRight: 5,
    width: convertWidthPercentToDP('35%'),
    height: convertHeightPercentToDP('5%'),
    top: 170,
    alignSelf: 'flex-end',
    borderRadius: 8,
    alignItems:'center'
  },
  grandWrapper:{
    width: '100%',
    height: '100%'
  },
  buttonStyleFotter:{
    height: 50,
    width: 160,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  buttonStyleFotterDisabled:{
    height: 50,
    width: 160,
    borderRadius: 10, 
    backgroundColor: '#f6f6f6'
  },
  textStyleFooterDisabled:{
    color: '#ccc', 
    fontSize: 18 
  },
  textStyleFooter:{
    color: '#fff', 
    fontSize: 18 
  },
  buttonStyleFotterDisabled:{
    height: 50,
    width: 160,
    borderRadius: 10, 
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d11e48',
  },
  textStyleFooterDisabled:{
    color: '#d11e48', 
    fontSize: 18 
  }
  // buttonReviewStyleEditProfile: {
  //   margin: 10,
  //   height: 50,
  //   width: 165,
  //   borderRadius: 5,
  //   backgroundColor: '#27ae60',
  //   alignContent: 'center'
  // },
  // buttonReviewTextStyleEditProfile: {
  //   color: '#fff',
  //   fontSize: 18,
  //   textAlign: 'center',
  //   alignSelf: 'center'
  // },
  // buttonBuyStyleEditProfile: {
  //   margin: 10,
  //   height: 50,
  //   width: 165,
  //   borderRadius: 5,
  //   backgroundColor: '#d11e48',
  //   alignContent: 'center'
  // },
  // buttonBuyTextStyleEditProfile: {
  //   color: '#fff',
  //   fontSize: 18,
  //   textAlign: 'center',
  //   alignSelf: 'center'
  // }
})