import React, { Component } from 'react'
import Reviews from '../components/Reviews'
import ProductReviews from '../particles/ProductReviews'

const dataReviews = [
  {
    image: 'https://aws-dist.brta.in/2016-08/original_700/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Pemutih wajah',
    star: 5,
    date: '21 Juni 2018',
    review: "Keren banget produknya, jadi gak mau pindah ke tempat lain"
  },
  {
    image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2013/03/11/162175/670x335/cara-mengenali-produk-kecantikan-yang-039eco-friendly039.jpg',
    title: 'Sabrina Skin Care',
    star: 4,
    date: '21 Juni 2018',
    review: "Keren banget produknya, jadi gak mau pindah ke tempat lain"
  },
  {
    image: 'https://i0.wp.com/www.tabitaonline.com/wp-content/uploads/2016/07/produk-kecantikan-tabita-skin-care.jpg?resize=600%2C539',
    title: 'Produk Kecantikan Tabita Skin Care',
    star: 5,
    date: '28 Juni 2018',
    review: "Keren banget produknya, jadi gak mau pindah ke tempat lain"
  },
]

export default class ReviewsContainer extends Component{

  state = {
    modalVisibleEditReviews: false
  }

  toggleModalEditReviews(){
    this.setState({modalVisibleEditReviews: !this.state.modalVisibleEditReviews})
  }

  render(){
    return(
      <Reviews
      goback={() => this.props.navigation.goBack()}
      modalVisibleEditReviews={this.state.modalVisibleEditReviews}
      toggleModalEditReviews={() => this.toggleModalEditReviews()}
      dataReviews={dataReviews}
      renderReviews={({item}) => (
        <ProductReviews 
          image={item.image} 
          title={item.title} 
          star={item.star} 
          date={item.date} 
          review={item.review}
          action={() => this.toggleModalEditReviews()}
        />
      )}
      />
    )
  }
}