import React, { Component } from 'react'
import YourCart from '../components/YourCart'


import { connect } from 'react-redux'
import { fetchCartUser } from '../actions/cart'

class YourCartContainer extends Component {

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchCartUser(data.id, data.accessToken)
  }

  render() {
    return (
      <YourCart 
        goback={() => this.props.navigation.goBack()}/>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchCartUser: (id, accessToken) => dispatch(fetchCartUser(id, accessToken)),
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    cartuser: state.cartuser,
    sessionPersistance: state.sessionPersistance
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourCartContainer)