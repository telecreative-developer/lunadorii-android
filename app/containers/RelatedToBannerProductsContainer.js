import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import RelatedToBannerProducts from '../components/RelatedToBannerProducts'
import Product from '../particles/Product'
import { connect } from 'react-redux'
import { fetchProductWithBanner } from '../actions/product'
import { addToCart } from '../actions/cart'

class RelatedToBannerProductsContainer extends Component{

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
    await alert('Berhasil Menambahkan ke Kranjang', this.state.product_name.slice(0,10))
    await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
    await this.closeModal()

  }

  async componentDidMount(){
    console.log('Banner :',this.props.navigation.state.params.data )
    const data = this.props.navigation.state.params.data
    if(this.props.fetchProductWithBanner(data.banner_id)){
      await this.setState({stillLoading: false})
      await this.setState({image: data.thumbnail_url})
    }
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
    console.log('dattaa :' , this.props.receiveProductWithBanner)
    return(
      <RelatedToBannerProducts
        stillLoading={this.state.stillLoading}
        dataProduct={this.props.receiveProductWithBanner}
        image = {this.state.image}
        title = {this.props.navigation.state.params.data.title}
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
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProductWithBanner: (banner_id) => dispatch(fetchProductWithBanner(banner_id)),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
  }
}

const mapStateToProps = (state) => {
  return{
    receiveProductWithBanner: state.receiveProductWithBanner
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedToBannerProductsContainer)