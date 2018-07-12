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
    return(
      <DetailsOrder
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