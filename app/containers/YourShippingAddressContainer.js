import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'


import { connect } from 'react-redux'
import { fetchUserShipping } from '../actions/usershipping'


class YourShippingAddressContainer extends Component{

  constructor(){
    super()
    this.state = {
      modalVisibleEditAddress: false,
      modalVisibleAddAddress: false,
      name: '',
      phone: '',
      detail_address: '',
      province: '',
      city: '',
      district: ''
    }
  }

  closeModal(){
    this.setState({modalVisibleEditAddress: !this.state.modalVisibleEditAddress})
  }

  async toggleModalEditAddress(item){
    await this.closeModal()
    if(this.state.modalVisibleEditAddress){
      await this.setState({
        name: item.recepient,
        phone: item.phone,
        detail_address: item.detail_address,
        province: item.province,
        city: item.city,
        district: item.district
      }) 
    }else{
      await this.setState({
        name: '',
        phone: '',
        detail_address: '',
        province: '',
        city: '',
        district: ''
      })
    }
  }

  toggleModalAddAddress(){
    this.setState({modalVisibleAddAddress: !this.state.modalVisibleAddAddress})
  }

  handleSaveShippingAddress(){
    alert("Handler for save shipping address")
  }

  handleUpdateShippingAddress(){
    alert("Handler for update shipping address")
  }

  async componentDidMount() {
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserShipping(data.id, data.accessToken)

  }

  render(){
    return(
      <YourShippingAddress
        goback={() => this.props.navigation.goBack()}

        modalVisibleEditAddress={this.state.modalVisibleEditAddress}
        toggleModalEditAddress={() => this.toggleModalEditAddress()}
        handleUpdateShippingAddress={() => this.handleUpdateShippingAddress()}

        modalVisibleAddAddress={this.state.modalVisibleAddAddress}
        toggleModalAddAddress={() => this.toggleModalAddAddress()}
        handleSaveShippingAddress={() => this.handleSaveShippingAddress()}

        name={this.state.name}
        phone={this.state.phone}
        detail_address={this.state.detail_address}
        province={this.state.province}
        city={this.state.city}
        district={this.state.district}

        onChangeName={(name) => this.setState({ name })}
        onChangePhone={(phone) => this.setState({ phone })}
        onChangeAddress={(detail_address) => this.setState({ detail_address })}
        onChangeProvince={(province) => this.setState({ province })}
        onChangeCity={(city) => this.setState({ city })}
        onChangeDistrict={(district) => this.setState({ district })}
        
        dataShippingAddress={this.props.usershipping}
        renderShippingAddress={({item}) => (
          <ShippingAddress
            name={item.recepient}
            numberPhone={item.phone}
            detail_address={item.detail_address}
            action={() => this.toggleModalEditAddress(item)}/>
        )}
      />
    )
  }

}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    usershipping: state.usershipping
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourShippingAddressContainer)