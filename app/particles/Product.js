import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')
const Product = (props) => (
  <View style={styles.viewProduct}>
    <TouchableOpacity onPress={props.action}>
      <ImageBackground source={{ uri: props.image }} style={styles.ImageBackground}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={props.toggleModalAddToCart}>
          <Text style={styles.txtAddCart}><MaterialCommunityIcons name="cart" size={12}/> Add to Cart</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.viewContent}>
        <View>
          <Text style={styles.txtTitle}>{props.title}</Text>
        </View>
        <Text style={styles.txtCategories}>{props.categories}</Text>
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={props.star}
            starSize={12}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.txtPrice}>Rp. {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
)
const styles = StyleSheet.create({
  viewProduct: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginRight: 10,
    marginBottom: 10
  },
  viewContent: {
    padding: 10
  },
  ImageBackground: {
    width: (width - 50) / 2,
    height: 100,
    padding: 20
  },
  txtCategories: {
    fontSize: 14,
    maxWidth: width / 2.8
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: width / 2.6
  },
  txtAddCart: {
    padding: 10,
    justifyContent: 'center',
    bottom: 5,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12
  },
  txtPrice: {
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  touchableOpacity: {
    height: 25,
    backgroundColor: 'rgba(202, 202, 202, 0.73)',
    marginRight: 5,
    width: 90,
    left: 20,
    bottom: 15,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 8
  }
})

export default Product
