import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import { connect } from 'react-redux'

import Wishlist from '../components/Wishlist'
import Product from '../particles/Product'
import {fetchwishlist} from '../actions/wishlist'

class WishlistContainer extends Component{

  state={
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
    await this.props.fetchwishlist(data.accessToken, data.id)
    if(this.props.wishlist.length != 0){
      await this.setState({isEmpty: true})
    }else{
      await this.setState({isEmpty: false})
    }
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  render(){
    return(
      <Wishlist
        dataProduct={this.props.wishlist}
        renderProduct={({item}) => (
          <Product 
            isOnWishlist={true}
            image={item.thumbnails[0].thumbnail_url} 
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,17)+'...'} 
            categories={item.subcategories[0].subcategory} 
            price={this.formatPrice(item.price)} 
            star={item.product_rate} 
            action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
          />
        )}
        stillLoading={this.props.loading.condition === true && this.props.loading.process_on === 'LOADING_FETCH_WISHLIST' ||
        this.props.loading.condition === true && this.props.loading.process_on === 'SUCCESS_FETCH_WISHLIST' ? true : false}
        amountOfContent={this.props.wishlist.length}
        isEmpty={this.state.isEmpty}
        goback={() => this.props.navigation.goBack()}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchwishlist: (accessToken, id) => dispatch(fetchwishlist(accessToken, id))
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