import React, { Component } from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
import Home from '../components/Home'
import Product from '../particles/Product'
import Brand from '../particles/Brand'
import RecommendProduct from '../particles/RecommendProduct'
import BestCategories from '../particles/BestCategories'


import {connect} from 'react-redux'
import { fetchCategoryProduct } from '../actions/categoryproduct'
import { fetchBrandsProduct } from '../actions/brandsproduct'
import { fetchProduct } from '../actions/product'

const dataBrand = [
  {
    image: 'http://logok.org/wp-content/uploads/2014/07/Olay-Logo-Black.png',
  },
  {
    image: 'http://www.freelarge-images.com/wp-content/uploads/2014/11/Givenchy_logo-3.png',
  },
  {
    image: 'http://www.logomarket.de/images/P/Susanne_004.jpg',
  },
]

const dataProduct = [
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

const dataRecommend = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '120,000',
    star: 3,
    reviews: '2.0'
  },
  {
    image: 'https://www.wanista.com/wp-content/uploads/2013/10/Modbox-Product-Line-Up2.png',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '1.200,000',
    star: 5,
    reviews: '4.8'
  },
  {
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '520,000',
    reviews: '3.6'
  },
]


const dataCategories = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Nails',
    total: '122'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Skincare',
    total: '31'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Makeup',
    total: '80'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Tools & Brushes',
    total: '20'
  },
]

const { width, height } = Dimensions.get('window')
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
    
  }

  render() {
    return (
      <Home
        size={this.state.size}
       
        dataBrand={this.props.brandsproduct}
        renderBrand={({ item }) => (
          <Brand image={item.logo_url} />
        )}
         dataProduct={this.props.product}
-        renderProduct={({ item }) => (
-          <Product image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories.subcategory} price={item.price} star={item.product_rate}
-          />
-        )}
-        dataRecommend={this.props.product}
-        renderRecommend={({ item }) => (
-          <RecommendProduct image={item.thumbnails.thumbnail_url} title={item.product} categories={item.subcategories.subcategory} price={item.price} star={item.product_rate} reviews={item.reviews}
-          />
-        )}
        dataCategories={dataCategories}
        renderCategories={({ item }) => (
          <BestCategories image={item.image} title={item.title} total={item.total}
          />
        )}
        navigateToYourCart={() => this.props.navigation.navigate("YourCartContainer")}
        navigateToProfile={() => this.props.navigation.navigate('ProfileContainer')}
        navigateToSearch={() => this.props.navigation.navigate("SearchContainer")}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCategoryProduct: (accessToken) => dispatch(fetchCategoryProduct(accessToken)),
    fetchBrandsProduct: (accessToken) => dispatch(fetchBrandsProduct(accessToken)),
    fetchProduct: (accessToken) => dispatch(fetchProduct(accessToken)),

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)