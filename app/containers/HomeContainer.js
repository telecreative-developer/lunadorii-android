import React, { Component } from 'react'
import { Dimensions, View, Text, Image, StyleSheet, AsyncStorage, TouchableOpacity, BackHandler } from 'react-native'
import Home from '../components/Home'
import Product from '../particles/Product'
import Brand from '../particles/Brand'
import RecommendProduct from '../particles/RecommendProduct'
import BestCategories from '../particles/BestCategories'
import Categories from '../particles/Categories'

import { connect } from 'react-redux'
import { fetchCategoryProduct } from '../actions/categoryproduct'
import { fetchBrandsProduct } from '../actions/brandsproduct'
import { fetchProduct, fetchProductWithoutId } from '../actions/product'
import { fetchSingleUser } from '../actions/getSingleUser'
import { fetchBanners } from '../actions/banners'
import { fetchProductSubcategories } from '../actions/productsubcategories'
import { addToCart } from '../actions/cart'

const { width, height } = Dimensions.get('window')

const bannerWidth = Dimensions.get('window').width
const bannerHeight = height / 2.8

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stillLoading: true,
      loadingModal: false,
      size: { width, height },
      showMore: false,
      id_user: 0,
      product_id: 0,
      product_name: '',
      qty: 0,
      modalVisibleAddToCart: false
    };
  }

  toggleShowMore(){
    this.setState({showMore: !this.state.showMore})
  }

  closeModal(){    
    this.setState({modalVisibleAddToCart: !this.state.modalVisibleAddToCart})
  }

  async toggleModalAddToCart(item){

    await this.closeModal()
    if(this.state.modalVisibleAddToCart){
      const session = await AsyncStorage.getItem('session')
      const data = await JSON.parse(session)
      await this.setState({
        id_user: data.id,
        product_id: item.product_id,
        product_name: item.product
      }) 
    }else{
      await this.setState({
        id_user: 0,
        product_id: 0,
        qty: 0,
      })
    }
  }

  async handleAddToCart(){
    // console.log('isi state: ', this.state)
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await alert('Berhasil Menambahkan ke Kranjang', this.state.product_name.slice(0,10))
    await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
    await this.closeModal()

  }

  async componentDidMount() {
    // await this.props.fetchProductWithoutId()
    // await this.props.fetchProductWithoutId()
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log(data.accessToken)
    await this.props.fetchBanners()
    await this.props.fetchCategoryProduct()
    await this.props.fetchBrandsProduct()
    await this.props.fetchProduct(data.id)
    await this.props.fetchSingleUser(data.id, data.accessToken)
    if(this.props.fetchProductSubcategories()){
      await this.setState({stillLoading: false})
    }
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  renderBanners(banner, index) {
    return (
      <TouchableOpacity key={index} style={styles.banner} onPress={() => this.props.navigation.navigate("RelatedToBannerProductsContainer", {image: banner.thumbnail_url})}>
        <Image style={styles.bannerImage} source={{ uri: banner.thumbnail_url }} />
      </TouchableOpacity>
    )
  }

  render() {
    const { banners } = this.props
    console.log(this.props.product)
    return (
      <Home
        stillLoading={this.state.stillLoading}
        banners={banners.map((banner, index) => this.renderBanners(banner, index))}

        dataCategoriesButton={this.props.categoryproduct}
        renderCategoriesButton={({ item }) => (
          <Categories 
            title={item.subcategory.length <= 10 ? item.subcategory : this.capitalize(item.subcategory).slice(0,8)+'...'} 
            realTitle={item.subcategory}
            icon={item.thumbnail_url}
            action={() => this.props.navigation.navigate("RelatedToCategoryProductsContainer", {image: item.thumbnail_url})}
          />
        )}

        dataBrand={this.props.brandsproduct}
        renderBrand={({ item }) => (
          <Brand 
            image={item.logo_url} 
            action={() => this.props.navigation.navigate("RelatedToBrandProductsContainer", {image: item.logo_url})}
          />
        )}

        dataProduct={this.props.product}
        renderProduct={({ item }) => (
          <Product 
            image={item.thumbnails[0].thumbnail_url} 
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.subcategories[0].subcategory} 
            price={this.formatPrice(item.price)} 
            star={item.product_rate} 
            action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
            toggleModalAddToCart={() => this.toggleModalAddToCart(item)}
          />
        )}

        dataCategories={this.props.productsubcategories}
        renderCategories={({ item }) => (
          <BestCategories 
            image={item.thumbnail_url} 
            title={this.capitalize(item.subcategory)} 
            total={item.products.length}
          />
        )}

        dataRecommend={this.props.product}
        renderRecommend={({ item }) => {
          return (
          <RecommendProduct
            image={item.thumbnails[0].thumbnail_url} 
            title={this.capitalize(item.product).slice(0,28) + '...'} 
            categories={item.subcategories[0].subcategory} 
            price={this.formatPrice(item.price)} 
            star={item.product_rate} 
            reviews={item.product_rate} 
            action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
            toggleModalAddToCart={() => this.toggleModalAddToCart()}
          />
        )
        }}

        loadingModal={this.state.loadingModal}

        showMore={this.state.showMore}
        toggleShowMore={() => this.toggleShowMore()}

        modalVisibleAddToCart={this.state.modalVisibleAddToCart}
        toggleModalAddToCart={() => this.toggleModalAddToCart()}
        onChangeQty={(qty) => this.setState({qty: parseInt(qty)})}
        handleAddToCart={() => this.handleAddToCart()}

        navigateToYourCart={() => this.props.navigation.navigate("YourCartContainer")}
        navigateToProfile={() => this.props.navigation.navigate('ProfileContainer')}
        navigateToSearch={() => this.props.navigation.navigate("SearchContainer")}
        image={ this.props.getsingleuser}
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
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    // fetchProductWithoutId: () =>dispatch(fetchProductWithoutId()),
    fetchSingleUser:(id, accessToken) => dispatch(fetchSingleUser(id, accessToken)),
    fetchBanners: () => dispatch(fetchBanners()),
    fetchProductSubcategories: () => dispatch(fetchProductSubcategories()),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
    
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
    productwithoutid: state.productwithoutid,
    getsingleuser: state.getsingleuser,
    productsubcategories: state.productsubcategories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)