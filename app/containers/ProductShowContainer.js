import React, { Component } from 'react'
import ProductShow from '../components/ProductShow'
import Product from '../particles/Product'
import CommentAndRating from '../particles/CommentAndRating'
import { fetchProduct } from '../actions/product'
import { connect } from 'react-redux'


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

class ProductShowContainer extends Component {

  componentDidMount() {
    const data = this.props.navigation.state.params.data
    console.log('data: ', data.thumbnails)
    this.setState({ 
      data,
      image: data.thumbnails[0].thumbnail_url
    })
    this.props.fetchProduct('123')
  }


  state = {
    image: '',
    data: {}
  }

  render() {
    return (
      <ProductShow
        image={this.state.image}
        title={this.state.data.product}
        categories={this.state.data.categories}
        price={this.state.data.price}
        star={this.state.data.product_rate}
        descriptions={this.state.data.description}
        productDetails={this.state.data.detail}
        guide={this.state.data.to_use}

        dateRelatedProducts={this.props.product}
        renderRelatedProducts={({ item }) => (
          <Product image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories.subcategory} price={item.price} star={item.product_rate}
          />
        )}

        dataCommentAndRating={this.state.data.reviews}
        renderCommentAndRating={({ item }) => (
          <CommentAndRating
            user={item.user.first_name}
            reviews={item.comment}
            date={item.updated_at}
            rating={item.review_rate} />
        )}
        goback={() => this.props.navigation.goBack()} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

    fetchProduct: (accessToken) => dispatch(fetchProduct(accessToken))
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    product: state.product
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowContainer)