import React, { Component } from 'react'
import RelatedToCategoryProducts from '../components/RelatedToCategoryProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithCategory } from '../actions/product'

class RelatedToCategoryProductsContainer extends Component{

  state={
    stillLoading:true
  }
  
  async componentDidMount(){
    const data = this.props.navigation.state.params.data
    if(this.props.fetchProductWithCategory(data.product_subcategory_id)){
      await this.setState({stillLoading: false})
    }
    console.log('data :', data.product_subcategory_id)
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  render(){
    return(
      <RelatedToCategoryProducts    
        stillLoading={this.state.stillLoading}
        name={this.props.navigation.state.params.data.subcategory}
        dataProduct={this.props.receiveProductWithCategory}
        renderProduct={({item}) => (
          <Product
            image={item.thumbnails[0].thumbnail_url}
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.subcategories[0].subcategory}
            price={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            ratings={item.product_rate}
          />
        )}
        image={this.props.navigation.state.params.data.thumbnail_url}
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