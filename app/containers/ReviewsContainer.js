import React, { Component } from 'react'
import {AsyncStorage, Alert, NetInfo, BackHandler, ToastAndroid, Platform} from 'react-native'
import Reviews from '../components/Reviews'
import { Toast } from 'native-base'
import ProductReviews from '../particles/ProductReviews'
import { connect } from 'react-redux'
import { fetchUserReview, updateReview, deleteReview } from '../actions/userreview'
import { Spinner } from 'native-base';

class ReviewsContainer extends Component{

  state = {
    modalVisibleEditReviews: false,
    stillLoading: true,
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
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    console.log(this.props.userreview.length)
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserReview(data.id, data.accessToken)
    await this.setState({stillLoading: false})
  }

  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      this.props.navigation.navigate("HomeContainer")
    }
  };

  handleBackPress = () => {
    this.props.navigation.goBack() // works best when the goBack is async
    return true;
  }

  async btnUpdateRating(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.closeModal()
    await this.props.updateReview(this.state.id, this.state, data.accessToken)
    await this.props.fetchUserReview(data.id, data.accessToken)
    if(Platform.OS === 'ios'){
      Toast.show({
        text: 'Updated'
      })
    }else{
      ToastAndroid.showWithGravity('Updated', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
  }

  async deleteReview(item){
    const loading = this.props
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    Alert.alert(
      'Delete',
      'Are you sure to Delete ?',
      [
        { text: 'Cancel', onPress: () => {
          Platform.OS === 'ios'
          ?
          Toast.show({
            text: 'Canceled'
          })
          :
          ToastAndroid.showWithGravity('Canceled', ToastAndroid.SHORT, ToastAndroid.CENTER)
        }, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            Platform.OS === 'ios'
            ?
            Toast.show({
              text: 'Deleted'
            })
            :
            ToastAndroid.showWithGravity('Deleted', ToastAndroid.SHORT, ToastAndroid.CENTER)
            this.fetchData(item)
          }
          
        }
      ],
      { cancelable: false }
    ) 
  }
 
  async fetchData(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteReview(item.product_review_id, data.accessToken)
    await this.props.fetchUserReview(data.id, data.accessToken)
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
    return(
      <Reviews
        goback={() => this.props.navigation.goBack()}
        modalVisibleEditReviews={this.state.modalVisibleEditReviews}
        toggleModalEditReviews={() => this.toggleModalEditReviews()}
        navigateToProfile={() => this.props.navigation.navigate('HomeContainer')}
        
        stillLoading={this.state.stillLoading}
        image={this.state.image}
        title={this.capitalize(this.state.title)}
        price={this.state.price}
        star={this.state.star}
        comment={this.state.comment}
        onChangeComment={(comment) => this.setState({ comment })}
        onChangeStar={(star) => this.onStarRatingPress(star)}
        updateRating={() => this.btnUpdateRating()}

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