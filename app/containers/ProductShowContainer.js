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
import { connect } from 'react-redux'
import { fetchwishlist, addWishlist, deleteWishlistInHome } from '../actions/wishlist';

class ProductShowContainer extends Component {

  constructor(){
    super()
    this.state = {
      isReviewsExist: false,
      seeMoreDetails: false,
      seeMoreReviews: false,
      modalVisibleImageView: false,
      title: '',
      image: '',
      images:[],
      data: {},
      reviews:[],
      wishlist:{},
      dataSession:{},
      subcategories: '',
      qty: 1, 
      price: 0,
      totalPrice: 0,
      idUser:0,
      idProduct:0,
      accessToken:'',
      amountOfImage: 0,
      starCount: 0,
      wishlisted:'',
      clickWishlist:false
    }
  }

  toggleImageViewModal(){
    this.setState({ modalVisibleImageView: !this.state.modalVisibleImageView })
  }

  toggleMoreDetails(){
    this.setState({ seeMoreDetails: !this.state.seeMoreDetails })
  }

  checkReviewers(){
    if(this.state.data.reviews.length != 0){
      this.setState({isReviewsExist: true})
    }else{
      this.setState({isReviewsExist: false})
    }
  }

  toggleMoreReviews(){
    this.setState({ seeMoreReviews: !this.state.seeMoreReviews})
  }

  addToCart(){
    ToastAndroid.showWithGravity("Added to cart.", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  async componentDidMount() {
    const session = await AsyncStorage.getItem('session')
    const dataSession = await JSON.parse(session)
    const data = this.props.navigation.state.params.data
    console.log('data :' , data)
    await this.setState({ 
      data,
      reviews: data.reviews,
      accessToken:data.accessToken,
      image: data.thumbnails[0].thumbnail_url,
      title: data.product,
      images: data.thumbnails.map(data => ({url: data.thumbnail_url})),
      totalPrice: data.price,
      amountOfImage: data.thumbnails.length,
    })
    await this.props.fetchProduct(dataSession.id)
    await this.props.fetchSingleProductWithId(dataSession.id, data.product_id)
    await this.props.fetchRelatedProduct(data.product_id)
    await this.checkReviewers()
  }

  async addQty(){
    await this.setState({
      qty: this.state.qty + 1
    })
    await this.setState({
      totalPrice: this.state.price * this.state.qty
    })
  }

  async minQty(){
    if(this.state.qty <= 1){

    }else {
      await this.setState({
        qty: this.state.qty - 1
      })
      await this.setState({
        totalPrice: this.state.price * this.state.qty
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
    ToastAndroid.showWithGravity("Delete to wishlist.", ToastAndroid.SHORT, ToastAndroid.CENTER)
    const dataProduct = this.props.navigation.state.params.data
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      product_id: dataProduct.product_id
    })
    this.props.fetchProduct(data.id)
    await this.props.deleteWishlistInHome(data.accessToken, data.id, this.state.product_id)
    
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

  render() {
    {console.log('isi single :', this.props.receiveSingleProductWithId)}
    return (
      <ProductShow
        image={this.state.image}
        images={this.state.images}
        title={this.props.receiveSingleProductWithId.map( data => data.product)}
        categories={this.props.receiveSingleProductWithId.map(data => (data.subcategories[0].subcategory))}
        price={this.props.receiveSingleProductWithId.map(data => (data.price))}
        star={this.props.receiveSingleProductWithId.map(data => (data.product_rate))}
        descriptions={this.props.receiveSingleProductWithId.map(data => data.description)}
        productDetails={this.props.receiveSingleProductWithId.map(data => data.detail)}
        guide={this.props.receiveSingleProductWithId.map( data => data.to_use)}
        qty={this.state.qty}
        totalPrice={this.formatPrice(this.state.totalPrice)}
        amountOfImage={this.state.amountOfImage}
        wishlisted={this.props.receiveSingleProductWithId.map(data => data.wishlisted)}
        clickWishlist={this.state.clickWishlist}

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
            categories={item.subcategories[0].subcategory} 
            price={this.formatPrice(item.price)} 
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
          />
        )}

        dataCommentAndRating={this.state.seeMoreReviews ? this.state.reviews : this.state.reviews.slice(0,1)}
        renderCommentAndRating={({ item }) => (
          <CommentAndRating
            // user={item.user.first_name}
            reviews={item.comment}
            date={item.updated_at}
            rating={item.review_rate} />
        )}

        modalVisibleImageView={this.state.modalVisibleImageView}
        toggleImageViewModal={() => this.toggleImageViewModal()}

        toggleMoreDetails={() => this.toggleMoreDetails()}
        seeMoreDetails={this.state.seeMoreDetails}

        toggleMoreReviews={() => this.toggleMoreReviews()}
        seeMoreReviews={this.state.seeMoreReviews}

        isReviewsExist={this.state.isReviewsExist}

        addToCart={() => this.addToCart()}
        goback={() => this.props.navigation.navigate("HomeContainer")} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSingleProductWithId: (id, product_id) => dispatch(fetchSingleProductWithId(id, product_id)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addWishlist: (accessToken, id, idProduct) => dispatch(addWishlist(accessToken, id, idProduct)),
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