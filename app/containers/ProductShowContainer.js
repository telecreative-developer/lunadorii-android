import React, { Component } from 'react'
import { ToastAndroid, AsyncStorage } from 'react-native'
import ProductShow from '../components/ProductShow'
import RecommendProduct from '../particles/RecommendProduct'
import CommentAndRating from '../particles/CommentAndRating'
import { 
  fetchProduct, 
  fetchSingleProductWithId,
  fetchRelatedProduct
  } from '../actions/product'
import {addToCart} from '../actions/cart'
import { connect } from 'react-redux'
import { fetchwishlist, addWishlist, deleteWishlistInHome } from '../actions/wishlist';

class ProductShowContainer extends Component {

  constructor(){
    super()
    this.state = {
      stillLoading: true,
      isReviewsExist: true,
      seeMoreDetails: false,
      seeMoreReviews: false,
      modalVisibleImageView: false,
      isDiscount: false,
      title: '',
      image: '',
      images:[],
      data: {},
      reviews:[],
      wishlist:{},
      dataSession:{},
      subcategories: '',
      qty: 1, 
      brand:'',
      price: 0,
      discount:0,
      totalPrice: 0,
      idUser:0,
      idProduct:0,
      accessToken:'',
      amountOfImage: 0,
      starCount: 0,
      wishlisted:'',
      clickWishlist:false,
      clickCart: false,
      modalVisibleAddToCart: false,
      id_user: 0,
      product_id: 0,
      product_name: ''
    }
  }

  

  toggleImageViewModal(){
    this.setState({ modalVisibleImageView: !this.state.modalVisibleImageView })
  }

  toggleMoreDetails(){
    this.setState({ seeMoreDetails: !this.state.seeMoreDetails })
  }

  // checkReviewers(){
  //   if(this.state.data.reviews.length != 0){
  //     this.setState({isReviewsExist: true})
  //   }else{
  //     this.setState({isReviewsExist: false})
  //   }
  // }

  toggleMoreReviews(){
    this.setState({ seeMoreReviews: !this.state.seeMoreReviews})
  }

  async addToCart(){
    this.setState({clickCart: true})
    ToastAndroid.showWithGravity("Added to cart.", ToastAndroid.SHORT, ToastAndroid.CENTER)
    const dataProduct = this.props.navigation.state.params.data
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      product_id: dataProduct.product_id
    })
    await this.props.addToCart(data.id, this.state.product_id, this.state.qty, data.accessToken)
    this.setState({clickCart: false})
  }

  async deleteState(){
    await this.setState({})
    await this.props.navigation.navigate('HomeContainer')
  }

  async componentDidMount() {
    const session = await AsyncStorage.getItem('session')
    const dataSession = await JSON.parse(session)
    const data = this.props.navigation.state.params.data
    await this.setState({ 
      data,
      reviews: data.reviews,
      accessToken:data.accessToken,
      image: data.thumbnails[0].thumbnail_url,
      title: data.product,
      images: data.thumbnails.map(data => ({source:{uri: data.thumbnail_url}})),
      subcategories: data.subcategories[0].subcategory,
      price: data.price,
      brand: data.brands[0].brand,
      amountOfImage: data.thumbnails.length,
      starCount: data.product_rate,
      discount: data.discount_percentage,
      isDiscount: data.discount_percentage <= 0 ? false : true,
      totalPrice: this.discountPrice(data.price, data.discount_percentage)
    })
    await this.props.fetchSingleProductWithId(dataSession.id, data.product_id)
    if(this.props.fetchRelatedProduct(data.product_id)){
      await this.setState({stillLoading: false})
    }
    if(this.state.data.reviews.length){
      await this.setState({isReviewsExist: true})
    }else{
      await this.setState({isReviewsExist: false})
    }
    
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

  async handleAddToCartModal(){
    // console.log('isi state: ', this.state)
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    // await alert('Berhasil Menambahkan ke Kranjang', this.state.product_name.slice(0,10))
    ToastAndroid.showWithGravity("Success add to cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
    await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
    await this.closeModal()

  }

  async addQty(){
    await this.setState({
      qty: this.state.qty + 1
    })
    await this.setState({
      totalPrice: this.discountPrice(this.state.price, this.state.discount) * this.state.qty
    })
  }

  async minQty(){
    if(this.state.qty <= 1){

    }else {
      await this.setState({
        qty: this.state.qty - 1
      })
      await this.setState({
        totalPrice: this.discountPrice(this.state.price, this.state.discount) * this.state.qty
      })
    }
  }

  async AddWishlist(){
    this.setState({clickWishlist:!this.state.clickWishlist})
    ToastAndroid.showWithGravity("Added to wishlist.", ToastAndroid.SHORT, ToastAndroid.CENTER)
    const dataProduct = this.props.navigation.state.params.data
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      product_id: dataProduct.product_id
    })
    this.props.fetchProduct(data.id)
    this.props.fetchwishlist(data.accessToken, data.id)
    await this.props.addWishlist(data.accessToken, data.id, this.state.product_id)
  }

  async deleteWishlistInHome(){
    this.setState({clickWishlist:!this.state.clickWishlist})
    ToastAndroid.showWithGravity("Delete wishlist.", ToastAndroid.SHORT, ToastAndroid.CENTER)
    const dataProduct = this.props.navigation.state.params.data
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      product_id: dataProduct.product_id
    })
    this.props.fetchProduct(data.id)
    await this.props.deleteWishlistInHome(data.accessToken, data.id, this.state.product_id)
    await this.reload()
    
  }

  async reload(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      id:data.id,
      accessToken: data.accessToken
    })
    await this.props.fetchwishlist(data.accessToken, data.id)
    if(this.props.wishlist.length != 0){
      await this.setState({isEmpty: false})
    }else{
      await this.setState({isEmpty: true})
    }
    this.navigation.goback()
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    return DiscountPrice
  }

  render() {
    console.log('dis',this.discountPrice(this.state.price, this.state.discount))
    console.log('asyu',this.state.totalPrice)
    return (
      <ProductShow
        image={this.state.image}
        images={this.state.images}
        title={this.capitalize(this.state.title)}
        categories={this.state.brand}
        normalPrice={this.formatPrice(this.state.price)}
        price={this.formatPrice(this.discountPrice(this.state.price, this.state.discount))}
        star={this.state.starCount}
        descriptions={this.state.data.description}
        productDetails={this.state.data.detail}
        guide={this.state.data.to_use}
        isDiscount={this.state.isDiscount}
        qty={this.state.qty}
        totalPrice={this.formatPrice(this.state.totalPrice)}
        amountOfImage={this.state.amountOfImage}
        wishlisted={this.props.receiveSingleProductWithId.map(data => data.wishlisted)}
        images={this.state.images}
        clickWishlist={this.state.clickWishlist}

        modalVisibleAddToCart={this.state.modalVisibleAddToCart}
        toggleModalAddToCart={() => this.toggleModalAddToCart()}
        handleAddToCartModal={() => this.handleAddToCartModal()}

        onChangeQty={(qty) => this.setState({ qty })}
        addQty={() => this.addQty()}
        minQty={() => this.minQty()}
        AddWishlist={()=> this.AddWishlist()}
        deleteWishlistInHome={()=> this.deleteWishlistInHome()}

        dateRelatedProducts={this.props.relatedProduct}
        renderRelatedProducts={({ item }) => (
          <RecommendProduct 
            image={item.thumbnails[0].thumbnail_url} 
            title={this.capitalize(item.product)} 
            categories={item.brands[0].brand} 
            price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
            star={item.product_rate} 
            reviews={item.product_rate} 
            action={() => 
            // this.props.navigation.navigate("ProductShowContainer", { data: item })
            this.props.navigation.navigate({
              routeName: 'ProductShowContainer',
              params: { 
                data: item,
              },
              key: Math.random () * 10000
            })}
            toggleModalAddToCart={() => this.toggleModalAddToCart(item)}
          />
        )}

        dataCommentAndRating={this.state.seeMoreReviews ? this.state.reviews : this.state.reviews.slice(0,1)}
        renderCommentAndRating={({ item }) => (
          <CommentAndRating
            user={item.user.first_name}
            reviews={item.comment}
            date={item.updated_at}
            rating={item.review_rate} />
        )}

        stillLoading={this.state.stillLoading}

        modalVisibleImageView={this.state.modalVisibleImageView}
        toggleImageViewModal={() => this.toggleImageViewModal()}

        toggleMoreDetails={() => this.toggleMoreDetails()}
        seeMoreDetails={this.state.seeMoreDetails}

        toggleMoreReviews={() => this.toggleMoreReviews()}
        seeMoreReviews={this.state.seeMoreReviews}

        isReviewsExist={this.state.isReviewsExist}

        handleAddToCartModal={() => this.handleAddToCartModal()}
        addToCart={() => this.addToCart()}
        clickCart={this.state.clickCart}
        goback={() => this.deleteState()} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleProductWithId: (id, product_id) => dispatch(fetchSingleProductWithId(id, product_id)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addWishlist: (accessToken, id, idProduct) => dispatch(addWishlist(accessToken, id, idProduct)),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
    deleteWishlistInHome: (accessToken, id, idProduct) => dispatch(deleteWishlistInHome(accessToken, id, idProduct)),
    fetchwishlist:(accessToken, id) => dispatch(fetchwishlist(accessToken, id)),
    fetchRelatedProduct:(product_id) => dispatch(fetchRelatedProduct(product_id))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    product: state.product,
    wishlist: state.wishlist,
    receiveSingleProductWithId: state.receiveSingleProductWithId,
    relatedProduct: state.relatedProduct
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowContainer)