import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import { connect } from 'react-redux'

import Wishlist from '../components/Wishlist'
import Product from '../particles/Product'
import {fetchwishlist} from '../actions/wishlist'

class WishlistContainer extends Component{

  state={
    wishlist: {},
    id_user: 0,
    accessToken:''
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log('wishlist' , data.id)
    await this.setState({
      id:data.id,
      accessToken: data.accessToken
    })
    await this.props.fetchwishlist(this.state.accessToken, this.state.id)
  }

  render(){
    return(
      <Wishlist
      goback={() => this.props.navigation.goBack()}
      dataProduct={this.props.wishlist}
      renderProduct={({item}) => (
         <Product image={item.thumbnails[0].thumbnail_url} title={item.product} categories={item.subcategories[0].subcategory} price={item.price} star={item.product_rate}
         />
       )}
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