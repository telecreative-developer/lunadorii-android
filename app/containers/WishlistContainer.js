import React, { Component } from 'react'
import {AsyncStorage, Alert} from 'react-native'
import { connect } from 'react-redux'

import Wishlist from '../components/Wishlist'
import Product from '../particles/Product'
import {fetchwishlist, deleteWishlistInHome} from '../actions/wishlist'

class WishlistContainer extends Component{

  state={
    stillLoading: true,
    isEmpty: false,
    id_user: 0,
    accessToken:''
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({
      id:data.id,
      accessToken: data.accessToken
    })
    // console.log('accesToken container: ', this.state.accessToken)
    if(this.props.fetchwishlist(data.accessToken, data.id)){
      this.setState({stillLoading: false})
    }
    if(this.props.wishlist.length != 0){
      await this.setState({isEmpty: false})
    }else{
      await this.setState({isEmpty: true})
    }
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  async handleRemove(item) {
    console.log('delete :' , item)
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
		Alert.alert(
        'Delete',
        'Are you sure want to Delete ?',
        [
          { text: 'Cancel', onPress: () => {}, style: 'cancel' },
          {
            text: 'Delete',
            onPress: () => this.fetchData(item)
            
          }
        ],
        { cancelable: false }
      ) 
	}

  async fetchData(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteWishlistInHome(data.accessToken, data.id, item.data.product_id),
    await this.props.fetchwishlist(data.accessToken, data.id)
  }

  discountPrice(price, discount_percentage){
    let DiscountPrice = price - (price *(discount_percentage/100))
    return DiscountPrice
  }

  render(){
    console.log('data :', this.props.wishlist)
    return(
      <Wishlist
        dataProduct={this.props.wishlist}
        renderProduct={({item}) => (
          <Product 
            isOnWishlist={true}
            image={item.thumbnails[0].thumbnail_url} 
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,17)+'...'} 
            categories={item.brands[0].brand} 
            price={this.formatPrice(this.discountPrice(item.price, item.discount_percentage))} 
            star={item.product_rate} 
            action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
            handleRemove={() => this.handleRemove({data: item})}
          />
        )}
        navigateToProfile={() => this.props.navigation.navigate('ProfileContainer')}
        stillLoading={this.state.stillLoading}
        isEmpty={this.state.isEmpty}
        amountOfContent={this.props.wishlist.length}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchwishlist: (accessToken, id) => dispatch(fetchwishlist(accessToken, id)),
    deleteWishlistInHome: (accessToken, id, idProduct) => dispatch(deleteWishlistInHome(accessToken, id, idProduct))
  }
}

const mapStateToProps = (state) => ({ 
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    wishlist: state.wishlist,
    sessionPersistance: state.sessionPersistance
 });

 
export default connect(mapStateToProps, mapDispatchToProps)(WishlistContainer)