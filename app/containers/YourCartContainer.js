import React, { Component } from 'react'
import YourCart from '../components/YourCart'
import BenefitCosmetics from '../particles/BenefitCosmetics'

const dataProducts = [
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Face Primere Mini',
    price: '20,000',
    quantity: '1'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Face Primere Mini',
    price: '40,000',
    quantity: '2'
  },
  {
    image: 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg',
    title: 'Face Primere Mini',
    price: '60,000',
    quantity: '3'
  },
]

export default class YourCartContainer extends Component {

  state = {
    modalVisibleEditQuantity: false
  }

  openModalEditQuantity(){
    this.setState({modalVisibleEditQuantity: true})
  }

  closeModalEditQuantity(){
    this.setState({modalVisibleEditQuantity: false})
  }

  render() {
    return (
      <YourCart 
        dataProducts={dataProducts}
        renderProducts={({item}) => (
          <BenefitCosmetics
            title={item.item}
            image={item.image}
            price={item.price}
            quantity={item.quantity}/>
        )}

        openModalEditQuantity={() => this.openModalEditQuantity()}
        closeModalEditQuantity={() => this.closeModalEditQuantity()}
        modalVisibleEditQuantity={this.state.modalVisibleEditQuantity}
      />
    );
  }
}