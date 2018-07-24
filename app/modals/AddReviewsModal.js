import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Content, Item, Button, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
import StarRating from 'react-native-star-rating'
import ProductReviewed from '../particles/ProductReviewed'

const AddReviewsModal = (props) => {

  return(
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Reviews"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <View style={{ alignSelf: 'center', paddingVertical: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight:'bold'}}>Let's review</Text>
          <Text style={{fontSize: 18}}>Tell you first impression</Text>
          <Text style={{fontSize: 18}}>about this product</Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Item regular style={styles.itemsTextarea}>
          <Textarea placeholder="Type your reviews here" placeholderTextColor="#CDCDCD" style={styles.textareaStyle} value={props.review} onChangeText={props.onChangeReview}/>
        </Item>
      </View>
      <View style={{ alignSelf: 'center', paddingVertical: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight:'bold'}}>Now let's give ratings</Text>
          <Text style={{fontSize: 18}}>Give ratings for this product</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', padding: 10}}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={props.ratings}
          selectedStar={props.onChangeRatings}
        />
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile} onPress={props.handleReview}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Reviews</Text>
    </Button>
  </Modal>
)}

export default AddReviewsModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  rating: {
    marginTop: 30,
    alignSelf: 'center'
  },
  buttonSaveStyleEditProfile: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18
  },
  itemsTextarea: {
    marginTop: 15,
    borderRadius: 5,
    height: 100
  },
  textareaStyle: {
    height: 100,
    width: 300
  }
})