import React, { Component } from 'react'
import Stars from 'react-native-stars-rating'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import moment from 'moment'

const CommentAndRating = (props) => (
  <View style={styles.reviewsWrapper}>
    <Text>{props.reviews}</Text>
    <View style={styles.reviewsSpesifyWrapper}>
      <Text style={styles.reviewerName}>{props.user} - {moment(props.date).startOf('day').fromNow()}</Text>
      <Stars
        isActive={false}
        rateMax={5}
        isHalfStarEnable={false}
        rate={props.star}
        size={12}
      />
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