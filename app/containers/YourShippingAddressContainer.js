import React, { Component } from 'react'
import {AsyncStorage, View,Modalx, Text, SmartPicker, Dimensions, ScrollView, Picker} from 'react-native'
import { Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'

import { connect } from 'react-redux'
import { fetchUserShipping, updateShipping, updateSetdefault, 
         deleteShipping, createAddress, fetchProvince 
       } from '../actions/usershipping'


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
      address_default: false,
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
    console.log(this.state)
    const {name, phone, detail_address, province, city, district, address_default, regency} = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.createAddress(data.id, {name, phone, detail_address, province, city, district, address_default, regency}, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalAddAddress()
    
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
    // console.log('clicked: ', this.state.address_id)
  }

  async componentDidMount() {
    console.log('ini isi province: ',this.props.province)
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.props.fetchProvince()

  }

  async onChangeDefault(item){
    await this.setState({
      address_id: item.user_address_id,
      address_default: true
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateSetdefault(data.id, this.state.address_id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    // console.log('clicked onchange: ', this.state.address_default)
  }

  async deteleShipping(item){
    await this.setState({
      address_id: item.user_address_id,
      address_default: true
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteShipping(this.state.address_id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    // console.log('clicked delete id: ', this.state.address_id)
  }

  renderProvince(){
  }

  render(){
    return(
      <YourShippingAddress
        goback={() => this.props.navigation.goBack()}    

        modalVisibleAddAddress={this.state.modalVisibleAddAddress}
        toggleModalAddAddress={() => this.toggleModalAddAddress()}
        name={(name) => this.setState({name})}
        address={(address) => this.setState({address})}
        handleSaveAddress={() => this.handleSaveAddress()}
        onChangeName={(name) => this.setState({name})}
        onChangeNumberPhone= {(phone) => this.setState({phone})}
        onChangeAddress={(detail_address)  => this.setState({detail_address})}
        onChangeProvince={(province) => this.setState({province})}
        onChangeCity={(city) => this.setState({city})}
        onChangeDistrict={(district) => this.setState({district})}
        onChangeRegency={(regency) => this.setState({regency})}
        renderProvince={this.renderProvince()}

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
    createAddress: (id, items, accessToken) => dispatch(createAddress(id, items, accessToken)),
    fetchProvince: () => dispatch(fetchProvince())
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    usershipping: state.usershipping,
    province: state.province
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourShippingAddressContainer)