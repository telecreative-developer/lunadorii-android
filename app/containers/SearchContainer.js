import React, { Component } from 'react'
import Search from '../components/Search'
import Product from '../particles/Product'

import { connect } from 'react-redux'
import { fetchSearchProduct } from '../actions/product'

const dateRelatedProducts = [
  {
    index: 0,
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Paket tools',
    categories: 'Tools & Brushes',
    price: '150000',
    star: 3,
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum. Nulla et velit at quam elementum sodales. Donec iaculis, urnavel lobortis auctor, nisl elit viverra quam, eget imperdiet metus lacus quis nisl.",
    productDetails: "Tools & Brushes sangat berkualitas",
    guide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum.",
    reviews: [
      {
        user: 'Riska Octaviani',
        reviews: 'Brush nya lembut saya suka',
        date: '5',
        rating: 4
      },
      {
        user: 'Tri Adinda Lestari',
        reviews: 'Gak rugi beli product ini :D',
        date: '2',
        rating: 4
      },
      {
        user: 'Rina Lee',
        reviews: 'Pesanan lama sampai :(',
        date: '5',
        rating: 3
      },
    ]
  },
  {
    index: 1,
    image: 'https://www.wanista.com/wp-content/uploads/2013/10/Modbox-Product-Line-Up2.png',
    title: 'Paket Modbox',
    categories: 'Skincare',
    price: '1200000',
    star: 5,
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum. Nulla et velit at quam elementum sodales. Donec iaculis, urnavel lobortis auctor, nisl elit viverra quam, eget imperdiet metus lacus quis nisl.",
    productDetails: "Skincare sangat berkualitas",
    guide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum.",
    reviews: [
      {
        user: 'Lena Margaretha',
        reviews: 'Skincare nya nyaman untuk wajah',
        date: '1',
        rating: 5
      },
      {
        user: 'Regina Sari',
        reviews: 'Baru pertama kali saya beli di sini, Ternyata bagus',
        date: '6',
        rating: 4
      },
    ]
  },
  {
    index: 2,
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Paket Makeup',
    categories: 'Makeup',
    price: '250000',
    star: 4,
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum. Nulla et velit at quam elementum sodales. Donec iaculis, urnavel lobortis auctor, nisl elit viverra quam, eget imperdiet metus lacus quis nisl.",
    productDetails: "Makup sangat berkualitas",
    guide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum.",
    reviews: [
      {
        user: 'Verina Ressa',
        reviews: 'Makeup nya murah namun berkualitas',
        date: '9',
        rating: 4
      },
      {
        user: 'Adinda Merlin',
        reviews: 'Ihh suka banget sama packing nya, rapih banget',
        date: '10',
        rating: 5
      },
    ]
  },
  {
    index: 2,
    image: 'http://www.forgotteninvasion.com/wp-content/uploads/2017/12/1200x800_0_0_1200_800_be71c6e15ae8c6f7bfd6e935b0ab5fcc3c2f98d3.jpg',
    title: 'Paket Makeup',
    categories: 'Makeup',
    price: '250000',
    star: 4,
    descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum. Nulla et velit at quam elementum sodales. Donec iaculis, urnavel lobortis auctor, nisl elit viverra quam, eget imperdiet metus lacus quis nisl.",
    productDetails: "Makup sangat berkualitas",
    guide: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis libero rhoncusfermentum elementum.",
    reviews: [
      {
        user: 'Verina Ressa',
        reviews: 'Makeup nya murah namun berkualitas',
        date: '9',
        rating: 4
      },
      {
        user: 'Adinda Merlin',
        reviews: 'Ihh suka banget sama packing nya, rapih banget',
        date: '10',
        rating: 5
      },
    ]
  },
]

class SearchContainer extends Component {

  state = {
    modalVisibleFilters: false,
    searchTitle: "",
    lastSearchTitle: "",
    searchResult:"not yet search",
    modalVisibleBrandChooser: false,
    loading: false
  }

  async handleSearch(){
    this.setState({loading: true})
    await this.props.fetchSearchProduct(this.state.searchTitle)
    await this.setState({searchResult: this.props.searchproduct})
    await this.setState({lastSearchTitle: this.state.searchTitle})
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
        loading={this.state.loading}
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
    fetchSearchProduct: (search) => dispatch(fetchSearchProduct(search)),
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    searchproduct: state.searchproduct,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)