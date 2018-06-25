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
    };
  }

  async componentDidMount() {
    
    await this.props.fetchCategoryProduct('123')
    await this.props.fetchBrandsProduct('123')
    await this.props.fetchProduct('123')
    await this.props.fetchBanners('123')
    await this.props.fetchProductSubcategories('123')

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
        size={this.state.size}

        banners={banners.map((banner, index) => this.renderBanners(banner, index))}

        dataBrand={this.props.brandsproduct}
        renderBrand={({ item }) => (
          <Brand image={item.logo_url} />
        )}

        dataCategoriesButton={this.props.categoryproduct}
        renderCategoriesButton={({ item }) => (
          
          <Categories title={item.subcategory} icon={item.thumbnail_url} />
        )}

        dataRecommend={this.props.product}
        renderRecommend={({ item }) => (
          <RecommendProduct image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories[0].subcategory} price={item.price, 2, 3, '.', ','} star={item.product_rate} reviews={item.product_rate} action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
          />
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
  item: {
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: height / 6
  },
  itemText: {
    fontSize: 10,
    textAlign: 'center'
  },
  bannerImage: {
    width: bannerWidth,
    height: bannerHeight,
    opacity: 0.6
  },
  menuBoxIcon: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  icon: {
    fontSize: 14,
    color: '#2f2f4f',
    marginRight: 0
  }
})

const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCategoryProduct: (accessToken) => dispatch(fetchCategoryProduct(accessToken)),
    fetchBrandsProduct: (accessToken) => dispatch(fetchBrandsProduct(accessToken)),
    fetchProduct: (accessToken) => dispatch(fetchProduct(accessToken)),
    fetchBanners: (accessToken) => dispatch(fetchBanners(accessToken)),
    fetchProductSubcategories: (accessToken) => dispatch(fetchProductSubcategories(accessToken)),
    
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