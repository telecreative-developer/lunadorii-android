import React, { Component } from 'react'
import DetailsOrder from '../components/DetailsOrder'

export default class DetailsOrderContainer extends Component{

  state={
    modalVisibleAddReviews: false,
    review:'',
    ratings: 0
  }

  toggleModalAddReviews(){
    this.setState({ modalVisibleAddReviews: !this.state.modalVisibleAddReviews })
  }

  async onStarRatingPress(ratings) {
    await this.setState({
      ratings: ratings
    });
  }

  handleReview(){
    alert("Review : " + this.state.review + "\n" + "Ratings : " + this.state.ratings)
  }

  render(){
    console.log('order :' , this.props.navigation.state.params)
    const data = this.props.navigation.state.params.item
    return(
      <DetailsOrder
        billing_code={this.props.navigation.state.params.billing_code}
        payment_time={data.payment_time}
        delivery_time={data.delivery_time}
        status={data.order_product_status}
        purchase_number={data.purchase_number}
        receipt_time={data.receipt_time}
        delivery_service={data.delivery_service}
        goback={() => this.props.navigation.goBack()}
        navigateToHome={() => this.props.navigation.navigate('HomeContainer')}
        toggleModalAddReviews={() => this.toggleModalAddReviews()}
        modalVisibleAddReviews={this.state.modalVisibleAddReviews}

        review={this.state.review}
        onChangeReview={(review) => this.setState({review}) }
        
        ratings={this.state.ratings}
        onChangeRatings={(ratings) => this.onStarRatingPress(ratings)}

        handleReview={() => this.handleReview()}
      />
    )
  }
}