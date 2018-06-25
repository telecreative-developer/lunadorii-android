import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
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
      image: '',
      data: {},
      subcategories: '',
      qty: 1, 
      totalPrice: 0,
      idUser:0,
      idProduct:0,
      accessToken:''
    }
  }

  componentDidMount() {
    const data = this.props.navigation.state.params.data
    console.log('Data Product Show :' , data)
    this.setState({ 
      data,
      image: data.thumbnails[0].thumbnail_url,
      subcategories: data.subcategories[0].subcategory,
      totalPrice: data.price      
    })
    this.props.fetchProduct('123')
  }

  async addQty(){
    await this.setState({
      qty: this.state.qty + 1
    })
    await this.setState({
      totalPrice: this.state.totalPrice * this.state.qty
    })
  }

  async minQty(){
    if(this.state.qty <= 1){

    }else {
      await this.setState({
        qty: this.state.qty - 1
      })
      await this.setState({
        totalPrice: this.state.totalPrice * this.state.qty
      })
    }
  }

  async AddWishlist(){
    const dataProduct = this.props.navigation.state.params.data
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log('add wishlist' , data.id)
    await this.setState({
      product_id: dataProduct.product_id
    })
    await this.props.addWishlist(data.accessToken, data.id, this.state.product_id)
  }

  render() {
    return (
      <ProductShow
        image={this.state.image}
        title={this.state.data.product}
        categories={this.state.subcategories}
        price={this.state.data.price}
        star={this.state.data.product_rate}
        descriptions={this.state.data.description}
        productDetails={this.state.data.detail}
        guide={this.state.data.to_use}
        qty={this.state.qty}
        totalPrice={this.state.totalPrice}

        onChangeQty={(qty) => this.setState({ qty })}
        addQty={() => this.addQty()}
        minQty={() => this.minQty()}
        AddWishlist={()=> this.AddWishlist()}

        dateRelatedProducts={this.props.product}
        renderRelatedProducts={({ item }) => (
          <RecommendProduct image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories[0].subcategory} price={item.price} star={item.product_rate} action={() => 
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
        goback={() => this.props.navigation.goBack()} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

    fetchProduct: (accessToken) => dispatch(fetchProduct(accessToken)),
    addWishlist: (accessToken, id, idProduct) => dispatch(addWishlist(accessToken, id, idProduct))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    product: state.product
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowContainer)