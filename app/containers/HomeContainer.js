import React, { Component } from 'react'
import { Dimensions, View, Text, Image, StyleSheet } from 'react-native'
import Home from '../components/Home'
import Product from '../particles/Product'

const dataBrand = [
  {
    image: 'http://logok.org/wp-content/uploads/2014/07/Olay-Logo-Black.png',
  },
  {
    image: 'http://www.freelarge-images.com/wp-content/uploads/2014/11/Givenchy_logo-3.png',
  },
  {
    image: 'http://www.logomarket.de/images/P/Susanne_004.jpg',
  },
]

const dataProduct = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '120,000',
    star: 3
  },
  {
    image: 'https://www.wanista.com/wp-content/uploads/2013/10/Modbox-Product-Line-Up2.png',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '1.200,000',
    star: 5
  },
  {
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '520,000',
    star: 4
  },
]

const { width, height } = Dimensions.get('window')
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
  }
  render() {
    return (
      <Home
      size={this.state.size}
      dataBrand={dataBrand}
      dataProduct={dataProduct}
      renderBrand={({item}) => (
        <View style={styles.viewImage}>
          <Image source={{uri: item.image}} style={styles.image}/>
        </View>
      )}
      renderProduct={({item}) => (
        <Product image={item.image} title={item.title} categories={item.categories} price={item.price} star={item.star}
        />
      )}
      />
    )
  }
}

const styles = StyleSheet.create({
  viewImage:{
    borderWidth: 1, 
    borderColor: '#e2e2e2', 
    width: 150, 
    marginTop: 10, 
    marginRight: 10
  },
  image:{
    width: 100, 
    height: 60, 
    padding: 10, 
    justifyContent: 'center', 
    alignSelf: 'center'
  }
})


export default HomeContainer
