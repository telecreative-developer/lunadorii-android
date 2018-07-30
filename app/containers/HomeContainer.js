import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, AsyncStorage, TouchableOpacity, BackHandler, ToastAndroid, Alert, NetInfo, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Toast } from 'native-base'
import Home from '../components/Home'
import Product from '../particles/Product'
import Brand from '../particles/Brand'
import RecommendProduct from '../particles/RecommendProduct'
import BestCategories from '../particles/BestCategories'
import Categories from '../particles/Categories'
import { fetchCategoryProduct } from '../actions/categoryproduct'
import { fetchBrandsProduct } from '../actions/brandsproduct'
import { fetchProduct, fetchProductWithoutId, fetchProductBestSeller } from '../actions/product'
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
      showToast: false,
      stillLoading: true,
      isConnected: true,
      loadingModal: false,
      size: { width, height },
      showMore: false,
      id_user: 0,
      product_id: 0,
      product_name: '',
      qty: 1,
      uri:'',
      modalVisibleAddToCart: false,
      modalVisibleLogin: false,
      bannersOffline: [],
      brandsOffline: [],
      categoriesOffline: []
    };
  }

  handleConnectivityChange = async isConnected => {
    if (isConnected) {
      this.setState({ isConnected: true ,stillLoading: true})
      const session = await AsyncStorage.getItem('session')
      const data = await JSON.parse(session)
      if(data == null){
        await this.props.fetchProductWithoutId()
      }else{
        await this.props.fetchSingleUser(data.id, data.accessToken)
        await this.props.fetchProduct(data.id)
      }
      await this.props.fetchBanners()
      await this.props.fetchCategoryProduct()
      await this.props.fetchBrandsProduct()
      await this.props.fetchProductBestSeller()
      await this.person()
      if(this.props.fetchProductSubcategories()){
        await this.setState({stillLoading: false})
      }
    } else {
      this.setState({ isConnected: false ,stillLoading: true});
      await this.person()
      await this.bannerOffline()
      await this.categoryOffline()
      await this.brandOffline()
      await this.setState({stillLoading: false})
    }
  };

  toggleShowMore(){
    this.setState({showMore: !this.state.showMore})
  }

  closeModal(){    
    this.setState({modalVisibleAddToCart: !this.state.modalVisibleAddToCart})
  }

  async toggleModalAddToCart(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if( data ==  null ){
      this.setState({modalVisibleLogin: true})
    }else{
      await this.closeModal()
      if(this.state.modalVisibleAddToCart){
        
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
  }

  async handleAddToCart(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if( data == null ){
      await this.closeModal()
      this.setState({modalVisibleLogin: true})
    }else{
      await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
        if(Platform.OS === 'android'){
          ToastAndroid.showWithGravity("Success add to cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
          await this.closeModal()
        }else{
          await this.closeModal()
        }
    }
  }

  async componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(this.state.isConnected){
      if(data == null){
        await this.props.fetchProductWithoutId()
      }else{
        await this.props.fetchSingleUser(data.id, data.accessToken)
        await this.props.fetchProduct(data.id)
      }
      await this.props.fetchBanners()
      await this.props.fetchCategoryProduct()
      await this.props.fetchBrandsProduct()
      await this.props.fetchProductBestSeller()
      await this.person()
      if(this.props.fetchProductSubcategories()){
        await this.setState({stillLoading: false})
      }
    }else{
      await this.person()
      await this.bannerOffline()
      await this.categoryOffline()
      await this.brandOffline()
      await this.setState({stillLoading: false})
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  async handleRefresh(){
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(this.state.isConnected){
      if(data == null){
        await this.props.fetchProductWithoutId()
      }else{
        await this.props.fetchSingleUser(data.id, data.accessToken)
        await this.props.fetchProduct(data.id)
      }
      await this.props.fetchBanners()
      await this.props.fetchCategoryProduct()
      await this.props.fetchBrandsProduct()
      await this.props.fetchProductBestSeller()
      await this.person()
      if(this.props.fetchProductSubcategories()){
        await this.setState({stillLoading: false})
      }
    }else{
      await this.person()
      await this.bannerOffline()
      await this.categoryOffline()
      await this.brandOffline()
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
      <TouchableOpacity key={index} style={styles.banner} onPress={() => this.state.isConnected ? this.props.navigation.navigate("RelatedToBannerProductsContainer", {data: banner}) : null }>
        <Image style={styles.bannerImage} source={{ uri: banner.thumbnail_url }} />
      </TouchableOpacity>
    )
  }

  async toCart(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(this.state.isConnected){
      if( data == null ){
        this.setState({modalVisibleLogin: true})
      }else{
        this.props.navigation.navigate('YourCartContainer')
      }
    }
  }

  async toProfile(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(this.state.isConnected){
      if( data == null ){
        this.setState({modalVisibleLogin: true})
      }else{
        this.props.navigation.navigate('ProfileContainer', {person: this.person.bind(this)})
      }
    }
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    // const reducer = (accumulator, currentValue) => accumulator + currentValue
    return DiscountPrice
  }

  async person(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    const dataPerson = await this.props.getsingleuser.avatar_url
    const uri = await 'https://s3.us-east-2.amazonaws.com/lunadorii/avatar.png'
    if (this.state.isConnected) {
      if( data == null ){
        this.setState({uri:uri})
      }else{
        this.setState({uri:dataPerson})
      }
    }else{
      this.setState({uri:uri})
    }
  }

  async bannerOffline(){
    const bannersOffline = await AsyncStorage.getItem('banners')
    const data = await JSON.parse(bannersOffline)
    this.setState({
      bannersOffline: data
    })
  }

  async categoryOffline(){
    const categoriesOffline = await AsyncStorage.getItem('categories')
    const data = await JSON.parse(categoriesOffline)
    this.setState({
      categoriesOffline: data
    })
  }

  async brandOffline(){
    const brandsOffline = await AsyncStorage.getItem('brands')
    const data = await JSON.parse(brandsOffline)
    this.setState({
      brandsOffline: data
    })
  }

  toLogin(){
    this.props.navigation.navigate("LoginContainer")
    this.setState({ modalVisibleLogin: false })
  }

  render() {
    const { banners } = this.props
    return (
      <Home
        stillLoading={this.state.stillLoading}
        banners={this.state.isConnected ? banners.map((banner, index) => this.renderBanners(banner, index)) : this.state.bannersOffline.map((banner, index) => this.renderBanners(banner, index))}

        increaseQty={() => this.setState({qty: this.state.qty + 1})}
        decreaseQty={() => this.setState({qty: this.state.qty - 1})}
        quantityValue={this.state.qty}

        dataCategoriesButton={this.state.isConnected ? this.props.categoryproduct : this.state.categoriesOffline}
        renderCategoriesButton={({ item }) => (
          <Categories 
            title={item.subcategory.length <= 10 ? item.subcategory : this.capitalize(item.subcategory).slice(0,8)+'...'} 
            realTitle={item.subcategory}
            icon={item.thumbnail_url}
            action={() => this.state.isConnected ? this.props.navigation.navigate("RelatedToCategoryProductsContainer", {data: item}) : null}
          />
        )}

        dataBrand={this.state.isConnected ? this.props.brandsproduct : this.state.brandsOffline}
        renderBrand={({ item }) => (
          <Brand 
            image={item.logo_url} 
            action={() => this.state.isConnected ? this.props.navigation.navigate("RelatedToBrandProductsContainer", {data: item}): null}
          />
        )}

        dataProduct={ this.props.product }
        renderProduct={({ item }) => (
          <Product 
            image={item.thumbnails[0].thumbnail_url} 
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.brands[0].brand} 
            price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
            star={item.product_rate} 
            action={() => this.state.isConnected ? this.props.navigation.navigate("ProductShowContainer", { data: item }): null}
            toggleModalAddToCart={() => this.toggleModalAddToCart(item)}
          />
        )}

        dataCategories={this.props.productsubcategories}
        renderCategories={({ item }) => (
          <BestCategories 
            icon={item.thumbnails_url} 
            title={this.capitalize(item.subcategory)} 
            total={item.products.length}
            action={() => this.state.isConnected ? this.props.navigation.navigate("RelatedToCategoryProductsContainer", {data: item}) : null}
          />
        )}

        dataBigCard={this.props.productbestseller.slice(0,5)}
        dataBestSeller={this.props.productbestseller.slice(5, this.props.productbestseller.length)}

        dataRecommend={this.props.product}
        renderRecommend={({ item }) => {
          return (
          <RecommendProduct
            image={item.thumbnails[0].thumbnail_url} 
            title={this.capitalize(item.product).slice(0,Platform.OS==="android"?28:100) + '...'} 
            categories={item.brands[0].brand} 
            price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
            star={item.product_rate} 
            reviews={item.product_rate} 
            action={() => this.state.isConnected ? this.props.navigation.navigate("ProductShowContainer", { data: item }) : null}
            toggleModalAddToCart={() => this.toggleModalAddToCart()}
          />
        )
        }}

        loadingModal={this.state.loadingModal}

        showMore={this.state.showMore}
        toggleShowMore={() => this.toggleShowMore()}

        modalVisibleAddToCart={this.state.modalVisibleAddToCart}
        toggleModalAddToCart={() => this.toggleModalAddToCart()}
        toggleModalLogin={() => this.toggleModalLogin()}
        handleAddToCart={() => this.handleAddToCart()}

        navigateToYourCart={() => this.toCart()}
        navigateToProfile={() => this.toProfile()}
        navigateToSearch={() => this.state.isConnected ? this.props.navigation.navigate("SearchContainer") : null}
        isConnected={this.state.isConnected}
        closeModal={ () => this.setState({modalVisibleLogin: false})}
        modalVisibleLogin={this.state.modalVisibleLogin}
        loginAction={ () => this.toLogin() }
        handleRefresh={() => this.handleRefresh()}
        image={ this.state.uri }
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
    fetchProductBestSeller: () =>dispatch(fetchProductBestSeller()),
    fetchProductWithoutId: () =>dispatch(fetchProductWithoutId()),
    fetchSingleUser:(id, accessToken) => dispatch(fetchSingleUser(id, accessToken)),
    fetchBanners: () => dispatch(fetchBanners()),
    fetchProductSubcategories: () => dispatch(fetchProductSubcategories()),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
    
  }
}

const mapStateToProps = (state) => {
  return{
    logged: state.logged,
    loading: state.loading,
    success: state.success,
    sessionPersistance: state.sessionPersistance,
    failed: state.failed,
    categoryproduct: state.categoryproduct,
    brandsproduct: state.brandsproduct,
    product: state.product,
    productbestseller: state.productbestseller,
    banners: state.banners,
    productWithoutId: state.productwithoutid,
    getsingleuser: state.getsingleuser,
    productsubcategories: state.productsubcategories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)