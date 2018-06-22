import React, { Component } from 'react'
import ProductShow from '../components/ProductShow'
import Product from '../particles/Product'
import CommentAndRating from '../particles/CommentAndRating'

const dateRelatedProducts = [
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

export default class ProductShowContainer extends Component {

  componentDidMount() {
    const data = this.props.navigation.state.params.data
    console.log('data: ', data)
    this.setState({ data })
  }


  state = {
    data: {}
  }

  render() {
    return (
      <ProductShow
        image={this.state.data.image}
        title={this.state.data.product}
        categories={this.state.data.categories}
        price={this.state.data.price}
        star={this.state.data.product_rate}
        descriptions={this.state.data.description}
        productDetails={this.state.data.detail}
        guide={this.state.data.guide}

        dateRelatedProducts={dateRelatedProducts}
        renderRelatedProducts={({ item }) => (
          <Product image={item.image} title={item.title} categories={item.categories} price={item.price} star={item.star}
          />
        )}

        dataCommentAndRating={this.state.data.reviews}
        renderCommentAndRating={({ item }) => (
          <CommentAndRating
            user={item.user}
            reviews={item.comment}
            date={item.updated_at}
            rating={item.review_rate} />
        )}
        goback={() => this.props.navigation.goBack()} />
    )
  }
}