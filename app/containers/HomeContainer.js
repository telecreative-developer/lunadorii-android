import React, { Component } from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
import Home from '../components/Home'
import Product from '../particles/Product'
import Brand from '../particles/Brand'
import RecommendProduct from '../particles/RecommendProduct'
import BestCategories from '../particles/BestCategories'
import Categories from '../particles/Categories'

import imageSkinCare from '../assets/images/icon/skincare.png'
import imageMakeUp from '../assets/images/icon/makeup.png'
import imageNails from '../assets/images/icon/nails.png'
import imageToolBrushes from '../assets/images/icon/tools-brushes.png'
import imageMore from '../assets/images/icon/more.png'

import { connect } from 'react-redux'
import { fetchCategoryProduct } from '../actions/categoryproduct'
import { fetchBrandsProduct } from '../actions/brandsproduct'
import { fetchProduct } from '../actions/product'
import { fetchBanners } from '../actions/banners'
import { fetchProductSubcategories } from '../actions/productsubcategories'

const categories = [
  {
    title: 'Skincare',
    icon: imageSkinCare
  },
  {
    title: 'Makeup',
    icon: imageMakeUp
  },
  {
    title: 'Nails',
    icon: imageNails
  },
  {
    title: 'Tool & Brushes',
    icon: imageToolBrushes
  },
  {
    title: 'More',
    icon: imageMore
  },
]

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
    index: 0,
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Paket tools',
    categories: 'Tools & Brushes',
    price: '150000',
    star: 3,
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum. Nulla et velit at quam elementum sodales. Donec iaculis, urnavel lobortis auctor, nisl elit viverra quam, eget imperdiet metus lacus quis nisl.",
    productDetails: "Tools & Brushes sangat berkualitas",
    guide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum.",
    reviews: [
      {
        user: 'Riska Octaviani',
        reviews: 'Brush nya lembut saya suka',
        date: '5',
        rating: 4
      },
      {
        user: 'Tri Adinda Lestari',
        reviews: 'Gak rugi beli product ini :D',
        date: '2',
        rating: 4
      },
      {
        user: 'Rina Lee',
        reviews: 'Pesanan lama sampai :(',
        date: '5',
        rating: 3
      },
    ]
  },
  {
    index: 1,
    image: 'https://www.wanista.com/wp-content/uploads/2013/10/Modbox-Product-Line-Up2.png',
    title: 'Paket Modbox',
    categories: 'Skincare',
    price: '1200000',
    star: 5,
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum. Nulla et velit at quam elementum sodales. Donec iaculis, urnavel lobortis auctor, nisl elit viverra quam, eget imperdiet metus lacus quis nisl.",
    productDetails: "Skincare sangat berkualitas",
    guide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum.",
    reviews: [
      {
        user: 'Lena Margaretha',
        reviews: 'Skincare nya nyaman untuk wajah',
        date: '1',
        rating: 5
      },
      {
        user: 'Regina Sari',
        reviews: 'Baru pertama kali saya beli di sini, Ternyata bagus',
        date: '6',
        rating: 4
      },
    ]
  },
  {
    index: 2,
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '520,009',
    star: 4
  },
]

const dataRecommend = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '120000',
    star: 3,
    reviews: '2.0'
  },
  {
    image: 'https://www.wanista.com/wp-content/uploads/2013/10/Modbox-Product-Line-Up2.png',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '1200000',
    star: 5,
    reviews: '4.8'
  },
  {
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Benefiets Cosmetics',
    categories: 'Benefiets Cosmetics, and others',
    price: '520,001',
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
    await this.props.fetchBanners('123')
    await this.props.fetchProductSubcategories('123')

  }

  render() {
    return (
      <Home
        size={this.state.size}

        dataBanners={this.props.banners}
       
        dataBrand={this.props.brandsproduct}
        renderBrand={({ item }) => (
          <Brand image={item.logo_url} />
        )}

        dataCategoriesButton={this.props.categoryproduct}
        renderCategoriesButton={({ item }) => (
          
          <Categories title={item.category} icon={item.subcategories[0].thumbnail_url} />
        )}

        dataRecommend={this.props.product}
        renderRecommend={({ item }) => (
          <RecommendProduct image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories.subcategory} price={item.price} star={item.product_rate} reviews={item.product_rate}
          />
        )}

        dataProduct={this.props.product}
        renderProduct={({ item }) => (
          <Product image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories.subcategory} price={item.price} star={item.product_rate}
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