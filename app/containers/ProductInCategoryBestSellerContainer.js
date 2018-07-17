import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import ProductInCategoryBestSeller from '../components/ProductInCategoryBestSeller'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchBestProductWithSubCategory } from '../actions/product'
import { addToCart } from '../actions/cart'

class ProductInCategoryBestSellerContainer extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      stillLoading: true,
      loadingModal: false,
      showMore: false,
      id_user: 0,
      product_id: 0,
      product_name: '',
      qty: 0,
      modalVisibleAddToCart: false
    };
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
    // await alert('Berhasil Menambahkan ke Kranjang', this.state.product_name.slice(0,10))
    ToastAndroid.showWithGravity("Success add to cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
    await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
    await this.closeModal()

  }

  async componentDidMount(){
    const data = this.props.navigation.state.params.data
    if(this.props.fetchProductWithCategory(data.product_subcategory_id)){
      await this.setState({stillLoading: false})
    }
    console.log('data :', data.product_subcategory_id)
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

  render(){
    return(
      <RelatedToCategoryProducts    
        stillLoading={this.state.stillLoading}
        name={this.props.navigation.state.params.data.subcategory}
        dataProduct={this.props.receiveProductWithCategory}
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

        image={this.props.navigation.state.params.data.thumbnail_url}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchBestProductWithSubCategory: (product_subcategory_id) => dispatch(fetchBestProductWithSubCategory(product_subcategory_id)),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
  }
}

const mapStateToProps = (state) => {
  return{
    receiveBestProductWithCategory: state.receiveBestProductWithCategory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCategoryBestSellerContainer)