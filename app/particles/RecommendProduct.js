import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Rating } from 'react-native-ratings' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const RecommendProduct = (props) => {
  console.log('props recomend: ', props)
  return(
  <View style={styles.viewRecommend}>
    <TouchableOpacity onPress={props.action}>
      <Image source={{uri: props.image}} style={styles.image}/> 
      <View style={styles.viewWrapper}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text style={styles.txtCategories}>{props.categories}</Text>
        <View style={styles.viewFlexRow}>
          <View style={styles.viewRating}>
            <Rating
              type='custom'
              ratingCount={5}
              startingValue={props.star}
              imageSize={12}
              ratingColor="#000"
              ratingBackgroundColor="#ccc"
            />
          </View>
          <View>
            <Text style={styles.txtReviews}>{props.reviews} Reviews</Text>
          </View>
        </View>
        <View style={styles.viewFooterProduct}>
          <View>
            <TouchableOpacity style={styles.touchableOpacity}>
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
    marginRight: 20, 
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
    fontWeight: 'bold'
  },
  txtPrice:{
    fontWeight: 'bold', 
    marginTop: 5
  },
  touchableOpacity:{
    backgroundColor: 'rgba(202, 202, 202, 0.43)', 
    height: 30, 
    borderRadius: 5
  },
  viewFooterProduct:{
    justifyContent: 'space-between', 
    flexDirection:'row', 
    marginTop: 10
  }
})


export default RecommendProduct