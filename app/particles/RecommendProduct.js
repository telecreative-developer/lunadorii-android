import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { width, height } = Dimensions.get('window')

const RecommendProduct = (props) => {
  return(
  <View style={styles.viewRecommend}>
    <TouchableOpacity onPress={props.action}>
      <Image source={{uri: props.image}} style={styles.image}/> 
      <View style={styles.viewWrapper}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text style={styles.txtCategories}>{props.categories}</Text>
        <View style={styles.viewFlexRow}>
          {/* <View style={styles.viewRating}>
          
          </View> */}
          <StarRating
            disabled={true}
            maxStars={5}
            rating={props.star}
            starSize={12}
            // selectedStar={props.onStarRatingPress}
          />
          <View>
            <Text style={styles.txtReviews}>{props.reviews} Reviews</Text>
          </View>
        </View>
        <View style={styles.viewFooterProduct}>
          <View>
            <TouchableOpacity style={styles.touchableOpacity} onPress={props.toggleModalAddToCart}>
              <Text style={styles.txtCart}><MaterialCommunityIcons name='cart' /> Add to cart</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.txtPrice}>Rp. {props.price}</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
  </View>
)}
const styles = StyleSheet.create({
  viewFlexRow:{
    flexDirection: 'row',
    marginTop: 10
  },
  viewRating:{
    paddingTop: 2
  },
  viewRecommend:{
    width: 260, 
    marginRight:5,
    paddingRight: 10, 
    borderWidth: 1, 
    borderColor: '#e2e2e2'
  },
  viewWrapper:{
    padding: 10
  },
  image:{
    width: '100%', 
    height: 150
  },
  txtTitle:{
    fontSize: 16, 
    fontWeight: 'bold'
  },
  txtCategories:{
    fontSize: 14
  },
  txtReviews:{
    fontSize: 12, 
    color: '#f65857', 
    paddingLeft: 10
  },
  txtCart:{
    padding: 10, 
    bottom: 5, 
    fontWeight: 'bold',
    color: '#000'
  },
  txtPrice:{
    fontWeight: 'bold', 
    marginTop: 5
  },
  touchableOpacity:{
    backgroundColor: 'rgba(202, 202, 202, 0.43)', 
    height: 30, 
    borderRadius: 5,
    width: (width - 150) / 2
  },
  viewFooterProduct:{
    justifyContent: 'space-between', 
    flexDirection:'row', 
    marginTop: 10
  }
})


export default RecommendProduct