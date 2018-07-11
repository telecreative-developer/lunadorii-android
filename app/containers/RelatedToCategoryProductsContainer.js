import React, { Component } from 'react'
import RelatedToCategoryProducts from '../components/RelatedToCategoryProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithCategory } from '../actions/product'

class RelatedToCategoryProductsContainer extends Component{

  async componentDidMount(){
    const data = this.props.navigation.state.params.data
    await this.props.fetchProductWithCategory(data.product_subcategory_id)
  }

  render(){
    return(
      <RelatedToCategoryProducts
        
        name={this.props.navigation.state.params.data.subcategory}
        dataProduct={this.props.receiveProductWithCategory}
        renderProduct={({item}) => (
          <Product
            image={item.thumbnails[0].thumbnail_url}
            title={item.product}
            categories={item.subcategories[0].subcategory}
            price={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            ratings={item.product_rate}
          />
        )}
        image={this.props.navigation.state.params.image}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProductWithCategory: (product_subcategory_id) => dispatch(fetchProductWithCategory(product_subcategory_id)),
  }
}

const mapStateToProps = (state) => {
  return{
    receiveProductWithCategory: state.receiveProductWithCategory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedToCategoryProductsContainer)