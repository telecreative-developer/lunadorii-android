import React, { Component } from 'react'
import { Rating } from 'react-native-ratings'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'

const CommentAndRating = (props) => (
  <View style={styles.reviewsWrapper}>
    <Text>{props.reviews}</Text>
    <View style={styles.reviewsSpesifyWrapper}>
      <Text style={styles.reviewerName}>{props.user} - {props.date} min ago</Text>
      <Rating
        type='custom'
        ratingCount={5}
        startingValue={props.rating}
        imageSize={16}
        ratingColor="#000"
        ratingBackgroundColor="#ccc"
        style={styles.rating1} />
    </View>
  </View>
)

export default CommentAndRating

const styles = StyleSheet.create({
  reviewsWrapper: {
    paddingTop: 5, paddingBottom: 5
  },
  reviewsSpesifyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reviewerName: {
    fontWeight: 'bold'
  },
  rating1: {
    marginTop: 5,
    marginBottom: 10
  },
})