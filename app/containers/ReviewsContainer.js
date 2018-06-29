import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import Reviews from '../components/Reviews'
import ProductReviews from '../particles/ProductReviews'
import { connect } from 'react-redux'
import { fetchUserReview, updateReview } from '../actions/userreview'

class ReviewsContainer extends Component{

  state = {
    modalVisibleEditReviews: false,
    id: 0,
    image: '',
    title: '',
    price: 0,
    star: 0,
    comment: ''
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
  }

  async btnUpdateRating(){
    alert('updated')
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateReview(this.state.id, this.state, data.accessToken)
    await this.props.fetchUserReview(data.id, data.accessToken)
    await this.closeModal()
  }

  render(){
    return(
      <Reviews
      goback={() => this.props.navigation.goBack()}
      modalVisibleEditReviews={this.state.modalVisibleEditReviews}
      toggleModalEditReviews={() => this.toggleModalEditReviews()}
      
      image={this.state.image}
      title={this.state.title}
      price={this.state.price}
      star={this.state.star}
      comment={this.state.comment}
      onChangeComment={(comment) => this.setState({ comment })}
      updateRating={() => this.btnUpdateRating()}

      dataReviews={this.props.userreview}
      renderReviews={({item}) => (
        <ProductReviews 
          id={item.product_review_id}
          image={item.product.thumbnails[0].thumbnail_url} 
          title={item.product.name} 
          star={item.rate} 
          date={item.updated_at} 
          review={item.comment}
          action={() => this.toggleModalEditReviews(item)}
        />
      )}
      />
    )
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchUserReview: (id, accessToken) => dispatch(fetchUserReview(id, accessToken)),
    updateReview: (id, items, accessToken) => dispatch(updateReview(id, items, accessToken))
    
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