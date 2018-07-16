import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { createReview } from '../actions/userreview'
import DetailsOrder from '../components/DetailsOrder'

class DetailsOrderContainer extends Component{

  state={
    modalVisibleAddReviews: false,
    review:'',
    ratings: 0
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    const dataProduct = this.props.navigation.state.params.item
  }

  toggleModalAddReviews(){
    this.setState({ modalVisibleAddReviews: !this.state.modalVisibleAddReviews })
  }

  async onStarRatingPress(ratings) {
    await this.setState({
      ratings: ratings
    });
  }

  async handleReview(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    const { review, ratings } = this.state
    const dataProduct = this.props.navigation.state.params.item
    await this.props.createReview(data.id, {review , ratings} , data.accessToken, dataProduct.product_id)
    await alert('Succes Add Review')
    await this.setState({
      modalVisibleAddReviews: false,
      review:'',
      ratings: 0
    })
  }


  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  render(){
    console.log('order :' , this.props.navigation.state.params)
    const data = this.props.navigation.state.params.item
    return(
      <DetailsOrder
        billing_code={this.props.navigation.state.params.billing_code}
        payment_time={moment(data.payment_time).calendar()}
        delivery_time={moment(data.delivery_time).calendar()}
        status={this.capitalize(data.order_product_status)}
        purchase_number={data.purchase_number}
        receipt_time={moment(data.receipt_time).calendar()}
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

const mapDispatchToProps = (dispatch) =>{
  return{
    createReview: (id, items, accessToken, product_id) => dispatch(createReview(id, items, accessToken, product_id))
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    sessionPersistance: state.sessionPersistance,
    failed: state.failed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOrderContainer)