import React, { Component } from 'react'
import RelatedToBannerProducts from '../components/RelatedToBannerProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithBanner } from '../actions/product'

class RelatedToBannerProductsContainer extends Component{

  async componentDidMount(){
    console.log('Banner :',this.props.navigation.state.params.data )
    const data = this.props.navigation.state.params.data
    await this.props.fetchProductWithBanner(data.banner_id)
  }

  render(){
    console.log('dattaa :' , this.props.receiveProductWithBanner)
    return(
      <RelatedToBannerProducts
        name={this.props.navigation.state.params.data.title}
        dataProduct={this.props.receiveProductWithBanner}
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
    fetchProductWithBanner: (banner_id) => dispatch(fetchProductWithBanner(banner_id)),
  }
}

const mapStateToProps = (state) => {
  return{
    receiveProductWithBanner: state.receiveProductWithBanner
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedToBannerProductsContainer)