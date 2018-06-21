import React from 'react'
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { Button } from 'native-base'
import { Rating } from 'react-native-ratings'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')
const Product = (props) => (
  <View style={styles.viewProduct}>
    <TouchableOpacity onPress={props.action}>
      <ImageBackground source={{ uri: props.image }} style={styles.ImageBackground}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.txtAddCart}><MaterialCommunityIcons name="cart" /> Add to Cart</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.viewContent}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text style={styles.txtCategories}>{props.categories}</Text>
        <View style={{ marginTop: 10 }}>
          <Rating
            type='custom'
            ratingCount={5}
            startingValue={props.star}
            imageSize={12}
            ratingColor="#000"
            ratingBackgroundColor="#ccc"
          />
          <Text style={styles.txtPrice}>Rp. {props.price}</Text>
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
    fontSize: 16
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
    fontWeight: 'bold'
  },
  txtPrice: {
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  touchableOpacity: {
    height: 30,
    backgroundColor: 'rgba(202, 202, 202, 0.73)',
    marginRight: 5,
    width: 100,
    left: 20,
    bottom: 15,
    alignSelf: 'flex-end',
    borderRadius: 8
  }
})

export default Product
