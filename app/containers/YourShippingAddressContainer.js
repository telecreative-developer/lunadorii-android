import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'

import { connect } from 'react-redux'
import { fetchUserShipping, updateShipping, updateSetdefault, deleteShipping, createAddress } from '../actions/usershipping'


class YourShippingAddressContainer extends Component{

  constructor(){
    super()
    this.state = {
      modalVisibleEditAddress: false,
      modalVisibleAddAddress: false,
      name: '',
      address: '',
      province: '',
      city: '',
      regency: '',
      postalcode: '',
      numberPhone: '',
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
        address_default: '',
        regency:''
      })
    }
  }

  toggleModalAddAddress(){
    this.setState({modalVisibleAddAddress: !this.state.modalVisibleAddAddress})
  }

  async handleSaveAddress(){
    alert(JSON.stringify(this.state))
  }

  async btnUpdateShipping(){
    // alert('updated')
    // const session = await AsyncStorage.getItem('session')
    // const data = await JSON.parse(session)
    // await this.props.updateShipping(this.state.address_id, this.state, data.accessToken)
    // await this.props.fetchUserShipping(data.id, data.accessToken)
    // await this.toggleModalEditAddress()
  }

  async componentDidMount() {
    // const session = await AsyncStorage.getItem('session')
    // const data = await JSON.parse(session)
    // await this.props.fetchUserShipping(data.id, data.accessToken)

  }

  async onChangeDefault(item){
    // await this.setState({
    //   address_id: item.user_address_id,
    //   address_default: true
    // })
    // const session = await AsyncStorage.getItem('session')
    // const data = await JSON.parse(session)
    // await this.props.updateSetdefault(data.id, this.state.address_id, data.accessToken)
    // await this.props.fetchUserShipping(data.id, data.accessToken)
  }

  async deteleShipping(item){
    // await this.setState({
    //   address_id: item.user_address_id,
    //   address_default: true
    // })
    // const session = await AsyncStorage.getItem('session')
    // const data = await JSON.parse(session)
    // await this.props.deleteShipping(this.state.address_id, data.accessToken)
    // await this.props.fetchUserShipping(data.id, data.accessToken)
  }

  render(){
    return(
      <YourShippingAddress
        goback={() => this.props.navigation.goBack()}
        modalVisibleAddAddress={this.state.modalVisibleAddAddress}
        toggleModalAddAddress={() => this.toggleModalAddAddress()}

        nameValue={this.state.name}
        onChangeName={(name) => this.setState({name})}

        addressValue={this.state.address}
        onChangeAddress={(address) => this.setState({address})}

        provinceValue={this.state.province}
        onChangeProvince={(province) => this.setState({province})}

        cityValue={this.state.city}
        onChangeCity={(city) => this.setState({city})}
        
        regencyValue={this.state.regency}
        onChangeRegency={(regency) => this.setState({regency})}

        postalcodeValue={this.state.postalcode}
        onChangePostalcode={(postalcode) => this.setState({postalcode})}

        numberPhoneValue={this.state.numberPhone}
        onChangeNumberPhone={(numberPhone) => this.setState({numberPhone})}

        handleSaveAddress={() => this.handleSaveAddress()}
        dataShippingAddress={this.props.usershipping}
        renderShippingAddress={({item}) => (
          <ShippingAddress
            name={item.recepient}
            numberPhone={item.phone}
            detail_address={item.detail_address}
            address_default={item.address_default}
            actionEdit={() => this.toggleModalEditAddress(item)}
            actionSetdefault={() => this.onChangeDefault(item)}
            actionDelete={() => this.deteleShipping(item)}/>
        )}
      />
    )
  }

}


const mapDispatchToProps = (dispatch) =>{
  return{
    fetchUserShipping: (id, accessToken) => dispatch(fetchUserShipping(id, accessToken)),
    updateShipping: (id, items, accessToken) => dispatch(updateShipping(id, items, accessToken)),
    updateSetdefault: (id_user, id_addres, accessToken) => dispatch(updateSetdefault(id_user, id_addres, accessToken)),
    deleteShipping: (id, accessToken) => dispatch(deleteShipping(id, accessToken)),
    createAddress: (id, items, accessToken) => dispatch(createAddress(id, items, accessToken))
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