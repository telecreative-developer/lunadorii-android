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
      <View style={{flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: '#e2e2e2', borderBottomWidth: 1}}>
        <View>
          <View style={{width: convertWidthPercentToDP('100%'),padding: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.brandTitle}</Text>
            <Text style={{fontSize: 18, paddingBottom: 10}}>{props.category}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Rp {props.price}</Text>
                <Text style={{textDecorationLine:'line-through', paddingLeft: 5}}>Rp {props.price}</Text>
              </View>
              <Text>Qty {props.qty}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.borderedSparator}>
        <View style={styles.borderedSparatorFirst}>
          <Text style={styles.borderedSparatorFirstTitle}>Description</Text>
          <View style={{width: (width - 20) / 1 }}>
            <Text style={styles.borderedSparatorFirstContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ut turpis 
              ac pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
              per inceptos himenaeos. Phasellus euismod metus sapien, ac condimentum augue feugiat 
              vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
      </View>
      <ImageViewModal
        modalVisible={props.modalVisibleImageView}
        actionIcon={props.toggleImageViewModal}
        images={props.images}
      />
      <View style={styles.grandWrapper}>
        
      </View>
    </Content>
    <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10}}>
      {props.status !== 'Delivered'? (
        <Button full style={styles.buttonStyleFotterDisabled} onPress={props.status !== 'Delivered' ? props.showToast : props.toggleModalAddReviews}>
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
  borderedSparator: {
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  borderedSparatorFirst: {
    // padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  borderedSparatorFirstTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 10
  },
  borderedSparatorFirstContent: {
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 10,
    color: '#848484',
    textAlign: 'justify'
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