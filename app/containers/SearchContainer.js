import React, { Component } from 'react'
import Search from '../components/Search'
import Product from '../particles/Product'

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

export default class SearchContainer extends Component {

  state = {
    modalVisibleFilters: false,
    searchTitle: ""
  }

  toggleModalFilters() {
    this.setState({ modalVisibleFilters: !this.state.modalVisibleFilters })
  }

  render() {
    return (
      <Search
        modalVisibleFilters={this.state.modalVisibleFilters}
        toggleModalFilters={() => this.toggleModalFilters()}

        dateRelatedProducts={dateRelatedProducts}
        renderRelatedProducts={({ item }) => (
          <Product image={item.image} title={item.title} categories={item.categories} price={item.price} star={item.star} action={() => this.props.navigation.navigate("ProductShowContainer", { data: dateRelatedProducts[item.index] })}
          />
        )}

        searchTitle={this.state.searchTitle}
        amount={0}
        onChangeSearchTitle={(searchTitle) => this.setState({ searchTitle })}

        goback={() => this.props.navigation.goBack()} />
    )
  }
}