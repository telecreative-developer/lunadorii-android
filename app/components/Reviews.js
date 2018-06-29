import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'
import EditReviewsModal from '../modals/EditReviewsModal'
const { height, width } = Dimensions.get('window')

const Reviews = (props) => {
  console.log('reviews: ', props)
  return(
  <Container style={styles.container}>
    <Navbar
      navbarTitle="Reviews"
      navbarIcon="arrow-back"
      actionIcon={props.goback}
    />
    <EditReviewsModal
      navbarTitle="Edit Reviews"
      navbarIcon="close"
      modalVisible={props.modalVisibleEditReviews}
      actionIcon={props.toggleModalEditReviews}
      image={props.image}
      title={props.title}
      star={props.star}
      comment={props.comment}
      price={props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      onChangeComment={props.onChangeComment}
      updateRating={props.updateRating} 
      onChangeStar={props.onChangeStar}
    />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Content>
      <View style={styles.viewReviews}>
        <Text style={styles.txtReviews}>Your Reviews</Text>
        <FlatList
          data={props.dataReviews}
          renderItem={props.renderReviews}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
    </Content>
  </Container>
)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewReviews: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  txtReviews: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Reviews