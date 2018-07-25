import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
const { width, height } = Dimensions.get('window')

const RecommendProduct = (props) => {
  return(
  <View style={styles.viewRecommend}>
    <TouchableOpacity onPress={props.action} style={styles.imageWrapper}>
      <Image source={{uri: props.image}} style={styles.image}/> 
    </TouchableOpacity>
    <View style={styles.viewWrapper}>
      <View style={{width: (width - 1000) / 2, height: (height - 530) / 2 }}>
        <TouchableOpacity onPress={props.action}>
          <Text style={styles.txtTitle}>{props.title}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txtCategories}>{props.categories}</Text>
      <View style={styles.viewFlexRow}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={props.star}
          starSize={12}
        />
        <View>
          <Text style={styles.txtReviews}>{props.reviews} Ratings</Text>
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
  </View>
)}
const styles = StyleSheet.create({
  viewFlexRow:{
    flexDirection: 'row',
    marginTop: 10,
  },
  viewRating:{
    paddingTop: 2
  },
  viewRecommend:{
    width: convertWidthPercentToDP('70%'), 
    marginRight:10,
    marginLeft: 10,
    paddingRight: 5, 
    borderWidth: 1, 
    borderColor: '#e2e2e2'
  },
  viewWrapper:{
    padding: 10
  },
  imageWrapper:{
    width: 258, 
    height: 150
  },
  image:{
    width: convertWidthPercentToDP('70%'), 
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
    color: '#d11e48', 
    paddingLeft: 10
  },
  txtCart:{
    padding: 10, 
    bottom: 5, 
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center'
  },
  txtPrice:{
    fontWeight: 'bold', 
    marginTop: 5
  },
  touchableOpacity:{
    backgroundColor: 'rgba(202, 202, 202, 0.43)', 
    height: 30, 
    borderRadius: 5,
    width: (width - 115) / 2
  },
  viewFooterProduct:{
    justifyContent: 'space-between', 
    flexDirection:'row', 
    marginTop: 10
  }
})


export default RecommendProduct