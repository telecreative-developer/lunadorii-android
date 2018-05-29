import React, { Component } from 'react'
import Wishlist from '../components/Wishlist'
import Product from '../particles/Product'

const dataProduct = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '120,000',
    star: 3,
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

export default class WishlistContainer extends Component{
  render(){
    return(
      <Wishlist
      dataProduct={dataProduct}
      renderProduct={({item}) => (
        <Product image={item.image} title={item.title} categories={item.categories} price={item.price} star={item.star}
        />
      )}
      />
    )
  }
}