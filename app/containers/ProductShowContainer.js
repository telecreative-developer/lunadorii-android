import React, { Component } from 'react'
import ProductShow from '../components/ProductShow'
import Product from '../particles/Product'
import CommentAndRating from '../particles/CommentAndRating'
import { fetchProduct } from '../actions/product'
import { connect } from 'react-redux'

class ProductShowContainer extends Component {

  constructor(){
    super()
    this.state = {
      image: '',
      data: {},
      subcategories: '',
      qty: 1, 
      totalPrice: 0,
    }
  }

  componentDidMount() {
    const data = this.props.navigation.state.params.data
    console.log('dataimage: ', data.thumbnails)
    this.setState({ 
      data,
      image: data.thumbnails[0].thumbnail_url,
      subcategories: data.subcategories[0].subcategory,
      totalPrice: data.price      
    })
    console.log('datacategories: ', data.subcategories[0].subcategory)
    this.props.fetchProduct('123')
  }

  async addQty(){
    await this.setState({
      qty: this.state.qty + 1
    })
    await this.setState({
      totalPrice: this.state.totalPrice * this.state.qty
    })
  }

  async minQty(){
    if(this.state.qty <= 1){

    }else {
      await this.setState({
        qty: this.state.qty - 1
      })
      await this.setState({
        totalPrice: this.state.totalPrice * this.state.qty
      })
    }
  }

  render() {
    return (
      <ProductShow
        image={this.state.image}
        title={this.state.data.product}
        categories={this.state.subcategories}
        price={this.state.data.price}
        star={this.state.data.product_rate}
        descriptions={this.state.data.description}
        productDetails={this.state.data.detail}
        guide={this.state.data.to_use}
        qty={this.state.qty}
        totalPrice={this.state.totalPrice}

        onChangeQty={(qty) => this.setState({ qty })}
        addQty={() => this.addQty()}
        minQty={() => this.minQty()}

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