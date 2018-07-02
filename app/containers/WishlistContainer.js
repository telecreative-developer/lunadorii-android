import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import { connect } from 'react-redux'

import Wishlist from '../components/Wishlist'
import WishlistIsEmpty from '../components/WishlistIsEmpty'
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
    
    await this.props.fetchwishlist(this.state.accessToken, this.state.id)
    // console.log('accesToken container: ', this.state.accessToken)
    if(this.props.wishlist.length == 0){
      await this.setState({isEmpty: true})
    }else{
      await this.setState({isEmpty: false})
    }
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  render(){
    if(this.state.isEmpty){
      return(
        <WishlistIsEmpty
          navigateToMart={() => this.props.navigation.navigate("HomeContainer")}
        />
      )
    }else{
      return(
        <Wishlist
          dataProduct={this.props.wishlist}
          renderProduct={({item}) => (
            <Product image={item.thumbnails[0].thumbnail_url} title={this.capitalize(item.product).slice(0,18) + '...'} categories={item.subcategories[0].subcategory} price={item.price} star={item.product_rate} action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
            />
          )}
          goback={() => this.props.navigation.goBack()}
        />
      )
    }
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