import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import EditReviewsModal from '../modals/EditReviewsModal'
import ImageYourReviews from '../assets/images/icon/your-reviews.png'
import Validations from '../particles/Validations'
import I18n from '../i18n'
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
      navbarTitle={I18n.t('review_title')}
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
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    {props.stillLoading ? (
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
    ) : (
      <Content>
        {props.dataReviews <= 0 ? (
          <Validations 
            showImportedImage={true}
            image={ImageYourReviews}
            title={I18n.t('review_message')}
            message1={I18n.t('reviews_description1')}
            message2={I18n.t('reviews_description2')}
            buttonText={I18n.t('reviews_button')}
            buttonAction={props.navigateToProfile}
          />
        ) : (
          <View style={styles.viewReviews}>
            <Text style={styles.txtReviews}>{I18n.t('reviews_your_reviews')}</Text>
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