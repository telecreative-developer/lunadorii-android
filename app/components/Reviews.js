import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import EditReviewsModal from '../modals/EditReviewsModal'
import Validations from '../particles/Validations'
const { height, width } = Dimensions.get('window')

const Reviews = (props) => {
  // console.log('reviews: ', props)
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
    {props.stillLoading ? (
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
    ) : (
      <Content>
        {props.isEmpty ? (
          <Validations title="Your Review is empty" message1="Please review your product" message2="have purchased" navigateToProfile={props.navigateToProfile}/>
        ) : (
          <View style={styles.viewReviews}>
            <Text style={styles.txtReviews}>Your Reviews</Text>
            <FlatList
              data={props.dataReviews}
              renderItem={props.renderReviews}
              keyExtractor={(item, index) => JSON.stringify(index)}
            />
          </View>
        )}
      </Content>
    )}
  </Container>
)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewReviews: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  txtReviews: {
    fontWeight: 'bold',
    fontSize: 16
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})

export default Reviews