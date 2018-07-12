import React, { Component } from 'react'
import RelatedToBannerProducts from '../components/RelatedToBannerProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithBanner } from '../actions/product'

class RelatedToBannerProductsContainer extends Component{

  state={
    image:'',
    stillLoading:true
  }

  async componentDidMount(){
    console.log('Banner :',this.props.navigation.state.params.data )
    const data = this.props.navigation.state.params.data
    if(this.props.fetchProductWithBanner(data.banner_id)){
      await this.setState({stillLoading: false})
      await this.setState({image: data.thumbnail_url})
    }
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  render(){
    console.log('dattaa :' , this.props.receiveProductWithBanner)
    return(
      <RelatedToBannerProducts
        stillLoading={this.state.stillLoading}
        dataProduct={this.props.receiveProductWithBanner}
        image = {this.state.image}
        title = {this.props.navigation.state.params.data.title}
        renderProduct={({item}) => (
          <Product
            image={item.thumbnails[0].thumbnail_url}
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.subcategories[0].subcategory}
            price={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            ratings={item.product_rate}
          />
        )}
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