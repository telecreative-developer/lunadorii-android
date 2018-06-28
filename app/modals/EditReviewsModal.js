import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Icon, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
import Stars from 'react-native-stars-rating'
import ProductReviewed from '../particles/ProductReviewed'

const EditReviewsModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    {console.log('props edit: ', props.star)}
    <NavbarModal
      navbarTitle="Edit Reviews"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <Content style={styles.container}>
      <ProductReviewed
        image={props.image}
        title={props.title}
        price={props.price} />
        <View style={{alignItems: 'center', padding: 10}}>
          <Stars
            isActive={true}
            rateMax={5}
            isHalfStarEnable={false}
            rate={props.star}
            size={18}
          />
        </View>
        <View>
          <Text>star: {props.star}</Text>
        </View>
      <Item regular style={styles.itemsTextarea}>
        <Textarea placeholder="Type your reviews here" placeholderTextColor="#CDCDCD" style={styles.textareaStyle} value={props.comment} onChangeText={props.onChangeComment}/>
      </Item>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile} onPress={props.updateRating}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Update</Text>
    </Button>
  </Modal>
)

export default EditReviewsModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
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