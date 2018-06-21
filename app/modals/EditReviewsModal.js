import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Icon, Button, Form, Textarea } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
import { Rating } from 'react-native-ratings'
import ProductReviewed from '../particles/ProductReviewed'

const EditReviewsModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Edit Reviews"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <Content style={styles.container}>
      <ProductReviewed
        image="https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg"
        title="Sabrina Lipgloss"
        price="120,000" />
      <Rating
        type='custom'
        ratingCount={5}
        startingValue={3}
        imageSize={30}
        ratingColor="#000"
        ratingBackgroundColor="#ccc"
        style={styles.rating} />
      <Item regular style={styles.itemsTextarea}>
        <Textarea placeholder="Type your reviews here" placeholderTextColor="#CDCDCD" style={styles.textareaStyle} />
      </Item>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile}>
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