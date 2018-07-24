import React, { Component } from 'react'
import {Text,View,Image,TouchableOpacity, AsyncStorage, ToastAndroid} from 'react-native'
import {Button} from 'native-base'
import Search from '../components/Search'
import Product from '../particles/Product'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { connect } from 'react-redux'
import { fetchSearchProduct } from '../actions/product'
import { fetchCategoryProduct } from '../actions/categoryproduct'
import { fetchBrandsProduct } from '../actions/brandsproduct'
import { addToCart } from '../actions/cart'

class SearchContainer extends Component {

  state = {
    modalVisibleFilters: false,
    searchTitle: "",
    lastSearchTitle: {},
    searchResult:"not yet search",
    modalVisibleBrandChooser: false,
    selectedCategory: [],
    subcategory:[],
    brand:'',
    maxPrice:'',
    minPrice:'',
    lastFillter:'',
    selectedBrand: '',
    loading: false,
    id_user: 0,
    product_id: 0,
    product_name: '',
    qty: 0,
    modalVisibleAddToCart: false
  }

  componentDidMount(){
    this.props.fetchCategoryProduct()
  }

  // this.props.productsubcategories

  async handleSearch(){
    this.setState({loading: true})
    await this.setState({modalVisibleFilters: false})
    const { searchTitle, brand, subcategory, minPrice, maxPrice, selectedCategory } = await this.state  
    await this.props.fetchSearchProduct( searchTitle, subcategory, brand, maxPrice, minPrice,  )
    await this.setState({searchResult: this.props.searchproduct})
    await this.setState({lastSearchTitle: searchTitle, selectedCategory, brand, minPrice, maxPrice})
    await this.setState({loading: false})
  }

  goodBye(index, array){
    var index = array.indexOf(index);
    if (index > -1) {
      array.splice(index, 1);
      return(array)
    }
  }

  removeSelectedCategory(item){
    this.state.selectedCategory.length == 0  ?
      this.setState({selectedCategory: [],
                     subcategory:[]})
    :
      this.setState({selectedCategory: this.goodBye(item, this.state.selectedCategory),
                     subcategory: this.goodBye(item, this.state.subcategory)})            
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  toggleModalFilters() {
    this.setState({ modalVisibleFilters: !this.state.modalVisibleFilters })
  }

  toggleModalBrandChooser(){
    this.setState({ modalVisibleBrandChooser: !this.state.modalVisibleBrandChooser })
  }

  closeModal(){    
    this.setState({modalVisibleAddToCart: !this.state.modalVisibleAddToCart})
  }

  async toggleModalAddToCart(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if( data ==  null ){
      this.props.navigation.navigate('LoginContainer')
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
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if( data == null ){
      await this.closeModal()
      await this.props.navigate.navigation('LoginContainer')
    }else{
      ToastAndroid.showWithGravity("Success add to cart", ToastAndroid.SHORT, ToastAndroid.CENTER)
      await this.props.addToCart(this.state.id_user, this.state.product_id, this.state.qty, data.accessToken )
      await this.closeModal()
    } 
  }

  render() {
    console.log('sub:', this.state)
    return (
      <Search
        modalVisibleFilters={this.state.modalVisibleFilters}
        toggleModalFilters={() => this.toggleModalFilters()}

        dateRelatedProducts={this.state.searchResult}
        modalVisibleBrandChooser={this.state.modalVisibleBrandChooser}
        toggleModalBrandChooser={() => this.toggleModalBrandChooser()}

        renderRelatedProducts={({ item }) => (
          <Product 
            image={item.thumbnails[0].thumbnail_url} 
            title={item.title <= 17 ? this.capitalize(item.title) : this.capitalize(item.product).slice(0,18)+'...'} 
            categories={item.subcategories[0].subcategory} 
            price={item.price} star={item.product_rate} 
            action={() => this.props.navigation.navigate("ProductShowContainer", { data: item })}
            toggleModalAddToCart={() => this.toggleModalAddToCart(item)}
          />
        )}

        dataButtonSelectedCategory={this.state.selectedCategory}
        buttonSelectedCategory={({item}) => (
          <Button bordered danger style={{
            height: 30,
            justifyContent: 'center',
            borderRadius: 5,
            margin: 5,
            backgroundColor: '#d11e48'
          }}>
            <Text style={{color: '#fff',padding: 5}}>{item}</Text>
            {/* <TouchableOpacity onPress={() => this.removeSelectedCategory(item)}>
              <EvilIcons name="close" style={{
                fontSize: 12,
                padding: 5,
                color:'#fff'
              }} />
            </TouchableOpacity> */}
          </Button>
        )}

        dataButtonCategory1st={this.props.categoryproduct}
        buttonCategory1st={({item}) => (
          <Button bordered danger style={{
            height: 30,
            justifyContent: 'center',
            borderColor: '#F7009A',
            borderRadius: 5,
            margin: 5
          }}
            // onPress={() => this.setState({selectedCategory: [...this.state.selectedCategory, item.categories]})}
            onPress={() => this.setState({selectedCategory: this.state.selectedCategory.concat(item.subcategory), 
                                          subcategory:this.state.subcategory.concat(item.product_subcategory_id),
                                          lastFillter:this.state.selectedCategory.concat(item.subcategory)
                                          })}
          >
            <Text style={{color: '#F7009A' ,padding:5}}>{item.subcategory}</Text>
          </Button>
        )}
        
        dataButtonBrands={this.props.brandsproduct}
        buttonBrads={({item}) => (
          <View style={{
            borderWidth: 1, 
            borderColor: this.state.selectedBrand === item.brand ? '#e2e2e2' : '#d11e48', 
            width: 150,
            margin: 5
          }}>
            <TouchableOpacity onPress={() => this.setState({selectedBrand: item.brand, brand:item.product_brand_id})}>
              <Image source={{uri: item.logo_url}} style={{
                resizeMode: 'contain',
                width: 100, 
                height: 60, 
                margin: 5, 
                justifyContent: 'center', 
                alignSelf: 'center'
              }}/>
            </TouchableOpacity>
          </View>
        )}
        
        clearCategory={() => this.setState({selectedCategory: []})}
        handleFilterSearch={() => this.handleSearch()}

        modalVisibleAddToCart={this.state.modalVisibleAddToCart}
        toggleModalAddToCart={() => this.toggleModalAddToCart()}
        onChangeQty={(qty) => this.setState({qty: parseInt(qty)})}
        quantityValue={this.state.qty}
        handleAddToCart={() => this.handleAddToCart()}

        loading={this.state.loading}
        lastFillter={this.state.lastFillter}
        searchTitle={this.state.searchTitle}
        lastSearchTitle={this.state.lastSearchTitle}
        amount={this.state.searchResult.length}
        onChangeSearchTitle={(searchTitle) => this.setState({ searchTitle })}
        clearSearchBar={() => this.setState({searchTitle: ""})}
        
        handleSearch={()=>this.handleSearch()}
        handleCategory={()=>this.handleCategory()}
        handleBrand={()=>this.handleBrand()}
        handleMinPrice={(minPrice)=>this.setState({minPrice})}
        handleMaxPrice={(maxPrice)=>this.setState({maxPrice})}

        goback={() => this.props.navigation.goBack()} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSearchProduct: (search,subcategories,brand,maxPrice,minPrice) => dispatch(fetchSearchProduct(search,subcategories,brand,maxPrice,minPrice)),
    fetchBanners: () => dispatch(fetchBanners()),
    fetchCategoryProduct:() => dispatch(fetchCategoryProduct()),
    addToCart: (id, product_id, qty, accessToken) => dispatch(addToCart(id, product_id, qty, accessToken)),
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    searchproduct: state.searchproduct,
    categoryproduct: state.categoryproduct,
    brandsproduct: state.brandsproduct,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)