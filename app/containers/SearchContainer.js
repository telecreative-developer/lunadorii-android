import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Product from '../particles/Product'
import { fetchSearchProduct } from '../actions/product'
import { fetchCategoryProduct } from '../actions/categoryproduct'

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
    loading: false
  }

  componentDidMount(){
    this.props.fetchCategoryProduct()
  }

  // this.props.productsubcategories

  async handleSearch(){
    this.setState({loading: true})
    await this.setState({modalVisibleFilters: false})
    const { searchTitle, subcategory, brand, minPrice, maxPrice, selectedCategory } = await this.state   
    await console.log('oi:',this.state)
    await this.props.fetchSearchProduct( searchTitle, subcategory, brand, minPrice, maxPrice )
    await this.setState({searchResult: this.props.searchproduct})
    await this.setState({lastSearchTitle: searchTitle, selectedCategory, brand, minPrice, maxPrice})
    await this.setState({loading: false})
  }

  handleCategory(){

  }
  handleBrand(){
    
  }
  handleMinPrice(){
    
  }
  handleMaxPrice(){
    
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

  render() {
    console.log('sub:', this.state.lastSearchTitle)
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
          }}
          >
            <Text style={{color: '#fff', padding:5}}>{item}</Text>
          </Button>
        )}
        dataButtonCategory1st={this.props.categoryproduct}
        buttonCategory1st={({item, index}) => (
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
        clearCategory={() => this.setState({selectedCategory: []})}
        handleFilterSearch={() => this.handleSearch()}

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
        handleMinPrice={()=>this.handleMinPrice()}
        handleMaxPrice={()=>this.handleMaxPrice()}

        goback={() => this.props.navigation.goBack()} />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchSearchProduct: (search,subcategories,brand,maxPrice,minPrice) => dispatch(fetchSearchProduct(search,subcategories,brand,maxPrice,minPrice)),
    fetchCategoryProduct:() => dispatch(fetchCategoryProduct())
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    searchproduct: state.searchproduct,
    categoryproduct: state.categoryproduct
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)