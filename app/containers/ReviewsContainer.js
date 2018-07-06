import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import Reviews from '../components/Reviews'
import ProductReviews from '../particles/ProductReviews'
import ReviewIsEmpty from '../components/ReviewIsEmpty'
import { connect } from 'react-redux'
import { fetchUserReview, updateReview, deleteReview } from '../actions/userreview'
import { Spinner } from 'native-base';

class ReviewsContainer extends Component{

  state = {
    modalVisibleEditReviews: false,
    isEmpty: false,
    id: 0,
    image: '',
    title: '',
    price: 0,
    star: 0,
    comment: '',
    modalVisibleLoading:false,
    maessage:''
  }

  closeModal(){
    this.setState({modalVisibleEditReviews: !this.state.modalVisibleEditReviews})
  }

  async toggleModalEditReviews(item){
    await this.closeModal()
    if(this.state.modalVisibleEditReviews){
      await this.setState({
        id: item.product_review_id,
        image: item.product.thumbnails[0].thumbnail_url,
        title: item.product.name,
        price: item.product.price,
        star: item.rate,
        comment: item.comment
      }) 
    }else{
      await this.setState({
        id: 0,
        image: '',
        title: '',
        price: 0,
        star: 0,
        comment: ''
      })
    }
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserReview(data.id, data.accessToken)
    this.setState
    if(this.props.userreview.length != 0){
      await this.setState({isEmpty: false})
    }else{
      await this.setState({isEmpty: true})
    }
  }

  async btnUpdateRating(){
    alert('updated')
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateReview(this.state.id, this.state, data.accessToken)
    await this.props.fetchUserReview(data.id, data.accessToken)
    await this.closeModal()
  }

  async deleteReview(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteReview(item.product_review_id, data.accessToken)
    await this.props.fetchUserReview(data.id, data.accessToken)
    this.setState({message:'DELETING'})
  }
 
  async onStarRatingPress(star) {
    await this.setState({
      star: star
    });
  }

  capitalize(string) {
    return string.replace(/(^|\s)\S/g, l => l.toUpperCase())
  }

  render(){
    const loading = this.props
    console.log('isi modal loading :' , this.state.modalVisibleLoading)
    console.log('loading :' , loading.condition, loading.process_on)
    if(this.state.isEmpty){
      return(
        <ReviewIsEmpty
          navigateToMart={() => this.props.navigation.navigate("HomeContainer")}
        />
      )
    }else{
      return(
        <Reviews
          goback={() => this.props.navigation.goBack()}
          modalVisibleEditReviews={this.state.modalVisibleEditReviews}
          toggleModalEditReviews={() => this.toggleModalEditReviews()}
          
          image={this.state.image}
          title={this.capitalize(this.state.title)}
          price={this.state.price}
          star={this.state.star}
          comment={this.state.comment}
          onChangeComment={(comment) => this.setState({ comment })}
          onChangeStar={(star) => this.onStarRatingPress(star)}
          updateRating={() => this.btnUpdateRating()}
          modalVisibleLoading={this.props.loading.condition}
          message={this.state.message}
  
          dataReviews={this.props.userreview}
          renderReviews={({item}) => (
            <ProductReviews 
              id={item.product_review_id}
              image={item.product.thumbnails[0].thumbnail_url} 
              title={this.capitalize(item.product.name)} 
              star={item.rate} 
              date={item.updated_at} 
              review={item.comment}
              action={() => this.toggleModalEditReviews(item)}
              deleteReview={() => this.deleteReview(item)}
            />
          )}
        />
      )
    }
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchUserReview: (id, accessToken) => dispatch(fetchUserReview(id, accessToken)),
    updateReview: (id, items, accessToken) => dispatch(updateReview(id, items, accessToken)),
    deleteReview: (id, accessToken) => dispatch(deleteReview(id, accessToken))
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    userreview: state.userreview,
    sessionPersistance: state.sessionPersistance,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)