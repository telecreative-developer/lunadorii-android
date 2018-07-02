import React, { Component } from 'react'
import { ToastAndroid, AsyncStorage } from 'react-native'
import ProductShow from '../components/ProductShow'
import RecommendProduct from '../particles/RecommendProduct'
import CommentAndRating from '../particles/CommentAndRating'
import { fetchProduct } from '../actions/product'
import { connect } from 'react-redux'
import { fetchwishlist, addWishlist } from '../actions/wishlist';

class ProductShowContainer extends Component {

  constructor(){
    super()
    this.state = {
      modalVisibleImageView: false,
      title: '',
      image: '',
      images:[],
      data: {},
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

  addToCart(){
    ToastAndroid.showWithGravity("Added to cart.", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  async componentDidMount() {
    const data = this.props.navigation.state.params.data
    await this.setState({ 
      data,
      accessToken:data.accessToken,
      image: data.thumbnails[0].thumbnail_url,
      title: data.product,
      images: data.thumbnails.map(data => ({url: data.thumbnail_url})),
      subcategories: data.subcategories[0].subcategory,
      totalPrice: data.price,
      price: data.price,
      amountOfImage: data.thumbnails.length,
      starCount: data.product_rate,
      wishlisted: data.wishlisted
    })
    await this.props.fetchProduct('123')
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
    const dataProduct = this.props.navigation.state.params.data
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      product_id: dataProduct.product_id
    })
    await this.props.addWishlist(data.accessToken, data.id, this.state.product_id)
    this.setState({clickWishlist:true})
    ToastAndroid.showWithGravity("Added to wishlist.", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <ProductShow
        image={this.state.image}
        title={this.capitalize(this.state.title).slice(0,20 ) + '...'}
        categories={this.state.subcategories}
        price={this.state.data.price}
        star={this.state.starCount}
        descriptions={this.state.data.description}
        productDetails={this.state.data.detail}
        guide={this.state.data.to_use}
        qty={this.state.qty}
        totalPrice={this.state.totalPrice}
        amountOfImage={this.state.amountOfImage}
        wishlisted={this.state.wishlisted}
        clickWishlist={this.state.clickWishlist}

        onChangeQty={(qty) => this.setState({ qty })}
        addQty={() => this.addQty()}
        minQty={() => this.minQty()}
        AddWishlist={()=> this.AddWishlist()}

        dateRelatedProducts={this.props.product}
        renderRelatedProducts={({ item }) => (
          <RecommendProduct image={item.thumbnails[0].thumbnail_url} title={this.capitalize(item.product)} categories={item.subcategories[0].subcategory} price={item.price} star={item.product_rate} reviews={item.product_rate} action={() => 
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

        dataCommentAndRating={this.state.data.reviews}
        renderCommentAndRating={({ item }) => (
          <CommentAndRating
            user={item.user.first_name}
            reviews={item.comment}
            date={item.updated_at}
            rating={item.review_rate} />
        )}

        modalVisibleImageView={this.state.modalVisibleImageView}
        toggleImageViewModal={() => this.toggleImageViewModal()}
        images={this.state.images}

        addToCart={() => this.addToCart()}
        goback={() => this.props.navigation.goBack()} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

    fetchProduct: (accessToken) => dispatch(fetchProduct(accessToken)),
    addWishlist: (accessToken, id, idProduct) => dispatch(addWishlist(accessToken, id, idProduct)),
    fetchwishlist:(accessToken, id) => dispatch(fetchwishlist(accessToken, id))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    product: state.product,
    wishlist: state.wishlist
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowContainer)