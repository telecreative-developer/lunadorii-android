import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid, Platform, NetInfo } from 'react-native'
import RelatedToBannerProducts from '../components/RelatedToBannerProducts'
import Product from '../particles/Product'
import { Toast } from 'native-base' 
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
    // await alert('Berhasil Menambahkan ke Kranjang', this.state.product_name.slice(0,10))
    if(Platform.OS === 'android'){
      ToastAndroid.showWithGravity("Success add to cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      Toast.show({
        text: "Success add to cart"
      })
    }
    await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
    await this.closeModal()

  }

  async componentDidMount(){
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    console.log('Banner :',this.props.navigation.state.params.data )
    const data = await this.props.navigation.state.params.data
    await this.props.fetchProductWithBanner(data.banner_id)
    await this.setState({image: data.thumbnail_url})
    await this.setState({stillLoading: false})
  }

  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      this.props.navigation.navigate("HomeContainer")
    }
  };

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
    console.log('dattaa :' , this.props.receiveProductWithBanner)
    return(
      <RelatedToBannerProducts
        quantityValue={this.state.qty}
        qty={this.state.qty}
        increaseQty={() => this.setState({qty: this.state.qty + 1})}
        decreaseQty={() => this.setState({qty: this.state.qty - 1})}

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
        navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
        goback={() => this.props.navigation.goBack()}
        modalVisibleLogin={this.state.modalVisibleLogin}
        loginAction={ () => this.toLogin() }
        handleRefresh={() => this.handleRefresh()}
        closeModal={ () => this.setState({modalVisibleLogin: false})}
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