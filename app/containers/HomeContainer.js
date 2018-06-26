import React, { Component } from 'react'
import { Dimensions, View, Text, Image, StyleSheet } from 'react-native'
import Home from '../components/Home'
import Product from '../particles/Product'
import Brand from '../particles/Brand'
import RecommendProduct from '../particles/RecommendProduct'
import BestCategories from '../particles/BestCategories'
import Categories from '../particles/Categories'

import { connect } from 'react-redux'
import { fetchCategoryProduct } from '../actions/categoryproduct'
import { fetchBrandsProduct } from '../actions/brandsproduct'
import { fetchProduct } from '../actions/product'
import { fetchBanners } from '../actions/banners'
import { fetchProductSubcategories } from '../actions/productsubcategories'

const { width, height } = Dimensions.get('window')

const bannerWidth = Dimensions.get('window').width
const bannerHeight = height / 2.8

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      showMore: false
    };
  }

  toggleShowMore(){
    this.setState({showMore: !this.state.showMore})
  }

  async componentDidMount() {
    
    await this.props.fetchCategoryProduct()
    await this.props.fetchBrandsProduct()
    await this.props.fetchProduct()
    await this.props.fetchBanners()
    await this.props.fetchProductSubcategories()

  }

  renderBanners(banner, index) {
    return (
      <View key={index} style={styles.banner}>
        <Image style={styles.bannerImage} source={{ uri: banner.thumbnail_url }} />
      </View>
    )
  }

  render() {
    const { banners } = this.props
    return (
      <Home
        banners={banners.map((banner, index) => this.renderBanners(banner, index))}

        dataCategoriesButton={this.props.categoryproduct}
        renderCategoriesButton={({ item }) => (
          <Categories title={item.subcategory} icon={item.thumbnail_url}/>
        )}

        dataBrand={this.props.brandsproduct}
        renderBrand={({ item }) => (
          <Brand image={item.logo_url} />
        )}

        dataProduct={this.props.product}
        renderProduct={({ item }) => (
          <Product image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories[0].subcategory} price={item.price} star={item.product_rate} action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
          />
        )}

        dataCategories={this.props.productsubcategories}
        renderCategories={({ item }) => (
          <BestCategories image={item.thumbnail_url} title={item.subcategory} total={item.products.length}
          />
        )}

        dataRecommend={this.props.product}
        renderRecommend={({ item }) => (
          <RecommendProduct image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories[0].subcategory} price={item.price} star={item.product_rate} reviews={item.product_rate} action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
          />
        )}

        showMore={this.state.showMore}
        toggleShowMore={() => this.toggleShowMore()}

        navigateToYourCart={() => this.props.navigation.navigate("YourCartContainer")}
        navigateToProfile={() => this.props.navigation.navigate('ProfileContainer')}
        navigateToSearch={() => this.props.navigation.navigate("SearchContainer")}
      />
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000'
  },
  bannerImage: {
    width: bannerWidth,
    height: bannerHeight,
    opacity: 1
  }
})

const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCategoryProduct: () => dispatch(fetchCategoryProduct()),
    fetchBrandsProduct: () => dispatch(fetchBrandsProduct()),
    fetchProduct: () => dispatch(fetchProduct()),
    fetchBanners: () => dispatch(fetchBanners()),
    fetchProductSubcategories: () => dispatch(fetchProductSubcategories()),
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    categoryproduct: state.categoryproduct,
    brandsproduct: state.brandsproduct,
    product: state.product,
    banners: state.banners,
    productsubcategories: state.productsubcategories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)