import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'

import { connect } from 'react-redux'
import { fetchUserShipping, updateShipping } from '../actions/usershipping'


class YourShippingAddressContainer extends Component{

  constructor(){
    super()
    this.state = {
      modalVisibleEditAddress: false,
      modalVisibleAddAddress: false,
      address_id: 0,
      name: '',
      phone: '',
      detail_address: '',
      province: '',
      city: '',
      district: '',
      address_default: false
    }
  }

  closeModal(){
    this.setState({modalVisibleEditAddress: !this.state.modalVisibleEditAddress})
  }

  async toggleModalEditAddress(item){
    await this.closeModal()
    if(this.state.modalVisibleEditAddress){
      await this.setState({
        address_id: item.user_address_id,
        name: item.recepient,
        phone: item.phone,
        detail_address: item.detail_address,
        province: item.province,
        city: item.city,
        district: item.district,
        address_default: item.address_default
      }) 
    }else{
      await this.setState({
        address_id: '',
        name: '',
        phone: '',
        detail_address: '',
        province: '',
        city: '',
        district: '',
        address_default: ''
      })
    }
  }

  toggleModalAddAddress(){
    this.setState({modalVisibleAddAddress: !this.state.modalVisibleAddAddress})
  }

  handleSaveShippingAddress(){
    alert("Handler for save shipping address")
  }

  async btnUpdateShipping(){
    alert('updated')
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateShipping(this.state.address_id, this.state, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalEditAddress()
    console.log('clicked: ', this.state.address_id)
  }

  async componentDidMount() {
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserShipping(data.id, data.accessToken)

  }

  onChangeDefault(){
    this.setState({
      address_default: !this.state.address_default
    })
  }

  render(){
    return(
      <YourShippingAddress
        goback={() => this.props.navigation.goBack()}

        modalVisibleEditAddress={this.state.modalVisibleEditAddress}
        toggleModalEditAddress={() => this.toggleModalEditAddress()}

        modalVisibleAddAddress={this.state.modalVisibleAddAddress}
        toggleModalAddAddress={() => this.toggleModalAddAddress()}
        handleSaveShippingAddress={() => this.handleSaveShippingAddress()}

        name={this.state.name}
        phone={this.state.phone}
        detail_address={this.state.detail_address}
        province={this.state.province}
        city={this.state.city}
        district={this.state.district}
        address_default={this.state.address_default}

        onChangeName={(name) => this.setState({ name })}
        onChangePhone={(phone) => this.setState({ phone })}
        onChangeAddress={(detail_address) => this.setState({ detail_address })}
        onChangeProvince={(province) => this.setState({ province })}
        onChangeCity={(city) => this.setState({ city })}
        onChangeDistrict={(district) => this.setState({ district })}
        onChangeDefault={() => this.onChangeDefault()}

        handlerUpdateShipping={() => this.btnUpdateShipping()}

        dataShippingAddress={this.props.usershipping}
        renderShippingAddress={({item}) => (
          <ShippingAddress
            name={item.recepient}
            numberPhone={item.phone}
            detail_address={item.detail_address}
            address_default={item.address_default}
            actionEdit={() => this.toggleModalEditAddress(item)}/>
        )}
      />
    )
  }

}


const mapDispatchToProps = (dispatch) =>{
  return{

    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    updateShipping: (id, items, accessToken) => dispatch(updateShipping(id, items, accessToken)),

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