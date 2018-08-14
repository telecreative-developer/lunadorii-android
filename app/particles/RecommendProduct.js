import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native'
import StarRating from 'react-native-star-rating'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'
import { responsiveSize as sizes, responsiveFontSize as rfs } from 'react-native-rescomponent'
const { width, height } = Dimensions.get('window')

const RecommendProduct = (props) => {
  return(
    <View style={{
      height: sizes(26),
      width: sizes(25),
      backgroundColor: "#fff",
      borderColor:"#e2e2e2",
      borderWidth: 1,
      marginHorizontal: 10
    }}>
      <TouchableOpacity style={{
        height: sizes(10),
        width: sizes(24.6),
        backgroundColor: "#ccc",
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image source={{uri: props.image}} style={{
          height: sizes(10),
          width: sizes(24.6)
        }}/>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingTop:5, paddingLeft: 10,height: sizes(4),width: sizes(25)}}>
        <Text style={{fontWeight: 'bold', fontSize: rfs(2)}}>{props.title}</Text>
      </TouchableOpacity>
      <View style={{paddingTop:5, paddingLeft: 10,height: sizes(6),width: sizes(25), flexDirection: 'column'}}>
        <Text style={{fontSize:rfs(1.5)}}>{props.categories}</Text>
        <View style={{paddingTop:5,height: sizes(5),width: sizes(15), flexDirection: 'row'}}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={props.star}
            starSize={12}
            fullStarColor={'#ffcc36'}
          />
          <Text style={styles.txtReviews}>{props.reviews} Ratings</Text>
        </View>
      </View>
      <View style={{paddingTop:15, paddingLeft: 10,height: sizes(5),width: sizes(25), flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:rfs(1.5), fontWeight:'bold'}}>{props.price}</Text>
        <TouchableOpacity style={{
          height: sizes(2.5),
          width: sizes(13),
          backgroundColor: 'rgba(202, 202, 202, 0.43)',
          borderRadius:5,
          marginRight:10,
          alignItems:'center',
          justifyContent:'center'
        }} onPress={props.toggleModalAddToCart}>
          <Text style={{padding: Platform.OS === 'android' ? 5 : 0}}><MaterialCommunityIcons name='cart' /> Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// const RecommendProduct = (props) => {
//   return(
//   <View style={styles.viewRecommend}>
//     <TouchableOpacity onPress={props.action} style={styles.imageWrapper}>
//       <Image source={{uri: props.image}} style={styles.image}/> 
//     </TouchableOpacity>
//     <View style={styles.viewWrapper}>
//       <View style={{width: (width - 1000) / 2, height: (height - 530) / 2 }}>
//         <TouchableOpacity onPress={props.action}>
//           <Text style={styles.txtTitle}>{props.title}</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.txtCategories}>{props.categories}</Text>
//       <View style={styles.viewFlexRow}>
//         <StarRating
//           disabled={true}
//           maxStars={5}
//           rating={props.star}
//           starSize={12}
//           fullStarColor={'#ffcc36'}
//         />
//         <View>
//           <Text style={styles.txtReviews}>{props.reviews} Ratings</Text>
//         </View>
//       </View>
//       <View style={styles.viewFooterProduct}>
//         <View>
//           <TouchableOpacity style={styles.touchableOpacity} onPress={props.toggleModalAddToCart}>
//             <Text style={styles.txtCart}><MaterialCommunityIcons name='cart' /> Add to cart</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text style={styles.txtPrice}>Rp. {props.price}</Text>
//         </View>
//       </View>
//     </View>
//   </View>
// )}

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