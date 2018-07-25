import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import RelatedToBrandProducts from '../components/RelatedToBrandProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithBrand } from '../actions/product'
import { addToCart } from '../actions/cart'

class RelatedToBrandProductsContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      image: '',
      stillLoading: true,
      loadingModal: false,
      title: '',
      showMore: false,
      id_user: 0,
      product_id: 0,
      product_name: '',
      qty: 0,
      modalVisibleAddToCart: false,
      modalVisibleLogin: false
    };
  }

  closeModal(){    
    this.setState({modalVisibleAddToCart: !this.state.modalVisibleAddToCart})
  }

  async toggleModalAddToCart(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if( data == null ){
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
    // console.log('isi state: ', this.state)
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await ToastAndroid.showWithGravity("Added to cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
    await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
    await this.closeModal()

  }

  async componentDidMount(){
    console.log('datttaaaaa ::::' , this.props.navigation.state.params.data.brand)
    const data = await this.props.navigation.state.params.data
    this.props.fetchProductWithBrand(data.product_brand_id)
    await this.setState({title: data.title})
    await this.setState({stillLoading: false})
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    return DiscountPrice
  }

  toLogin(){
    this.props.navigation.navigate("LoginContainer")
    this.setState({ modalVisibleLogin: false })
  }

  render(){
    console.log('dattaa :' , this.props.receiveProductWithBrand)
    return(
      <RelatedToBrandProducts
        quantityValue={this.state.qty}
        stillLoading={this.state.stillLoading}
        dataProduct={this.props.receiveProductWithBrand}
        name={this.props.navigation.state.params.data.brand}
        title={this.state.title}
        renderProduct={({item}) => (
          <Product
            image={item.thumbnails[0].thumbnail_url} 
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.brands[0].brand} 
            price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
            star={item.product_rate} 
            action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
            toggleModalAddToCart={() => this.toggleModalAddToCart(item)}
          />
        )}

        modalVisibleAddToCart={this.state.modalVisibleAddToCart}
        toggleModalAddToCart={() => this.toggleModalAddToCart()}
        onChangeQty={(qty) => this.setState({qty: parseInt(qty)})}
        handleAddToCart={() => this.handleAddToCart()}

        image={this.props.navigation.state.params.image}
        goback={() => this.props.navigation.goBack()}

        modalVisibleLogin={this.state.modalVisibleLogin}
        loginAction={ () => this.toLogin() }
        closeModal={ () => this.setState({modalVisibleLogin: false})}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProductWithBrand: (product_brand_id) => dispatch(fetchProductWithBrand(product_brand_id)),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
  }
}

const mapStateToProps = (state) => {
  return{
    receiveProductWithBrand: state.receiveProductWithBrand
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedToBrandProductsContainer)