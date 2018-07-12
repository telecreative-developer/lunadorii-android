import React, { Component } from 'react'
import RelatedToBrandProducts from '../components/RelatedToBrandProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithBrand } from '../actions/product'

class RelatedToBrandProductsContainer extends Component{

  state={
    title: '',
    stillLoading:true
  }

  async componentDidMount(){
    console.log('datttaaaaa ::::' , this.props.navigation.state.params.data.brand)
    const data = this.props.navigation.state.params.data
    if(this.props.fetchProductWithBrand(data.product_brand_id)){
      await this.setState({stillLoading: false})
    }
    await this.setState({title: data.title})
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  render(){
    console.log('dattaa :' , this.props.receiveProductWithBrand)
    return(
      <RelatedToBrandProducts
        stillLoading={this.state.stillLoading}
        dataProduct={this.props.receiveProductWithBrand}
        name={this.props.navigation.state.params.data.brand}
        title={this.state.title}
        renderProduct={({item}) => (
          <Product
            image={item.thumbnails[0].thumbnail_url}
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
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
    fetchProductWithBrand: (product_brand_id) => dispatch(fetchProductWithBrand(product_brand_id)),
  }
}

const mapStateToProps = (state) => {
  return{
    receiveProductWithBrand: state.receiveProductWithBrand
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedToBrandProductsContainer)