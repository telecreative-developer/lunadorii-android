import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating';
import moment from 'moment'

const ProductReviews = (props) =>(
  <View style={styles.viewReviews}>
    <View style={styles.viewRow}>
      <View style={styles.flexOnly2}>
        <Image source={{uri: props.image}} style={styles.image}/>  
      </View>
      <View style={styles.flexOnly8}>
        <View style={styles.viewRow}>
          <View style={styles.flexOnly8}>
            <Text style={styles.txtTitle}>{props.title}</Text>
          </View>
          <View style={styles.flexOnly2}>
            <TouchableOpacity onPress={props.action}>
              <Text style={styles.txtEdit}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.deleteReview}>
              <Text style={styles.txtEdit}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style={styles.viewRating}>
          <View style={{flexDirection:'row', paddingTop: 5}}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={props.star}
              starSize={12}
              // selectedStar={props.onStarRatingPress}
            />
          </View>
          <Text style={styles.txtReview}>{props.review}</Text>
          <Text note style={styles.txtDate}>Edited {moment(props.date).startOf('day').fromNow()}</Text>
        </View>
      </View>
    </View>
  </View> 
) 

const styles = StyleSheet.create({
  viewRow:{
    flexDirection: 'row'
  },
  txtDate:{
    fontSize: 12, 
    alignSelf: 'flex-end'
  },
  txtReview:{
    marginTop: 5
  },
  rating:{
    marginTop: 5
  },
  txtEdit:{
    alignSelf: 'flex-end', 
    paddingRight: 10, 
    paddingTop: 10, 
    color: '#f65857'
  },
  image:{
    width: 50, 
    height: 50, 
    margin: 10
  },
  viewReviews:{
    marginTop: 10, 
    borderWidth: 1, 
    borderColor: '#e2e2e2'
  },
  flexOnly8:{
    flex: 0.8
  },
  flexOnly2:{
    flex: 0.2
  },
  txtTitle:{
    fontWeight: 'bold', 
    fontSize: 16, 
    paddingTop: 10
  },
  viewRating:{
    paddingRight: 10, 
    paddingBottom: 10
  }
})

export default ProductReviews