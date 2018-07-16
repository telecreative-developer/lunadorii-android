import React, { Component } from 'react'
import {AsyncStorage, View,Modalx, Text, SmartPicker, Dimensions, ScrollView, Alert, ToastAndroid} from 'react-native'
import { Content, Item, Input, Icon, Label, Button, Form, Textarea } from 'native-base'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'
import Picker from '../particles/Picker'

import { connect } from 'react-redux'
import { fetchUserShipping, updateShipping, updateSetdefault, 
         deleteShipping, createAddress, fetchProvince 
       } from '../actions/usershipping'


class YourShippingAddressContainer extends Component{

  constructor(){
    super()
    this.state = {
      stillLoading:true,
      visibleProvincePicker:true,
      visibleCityPicker: true,
      visibleRegencyPicker: true,

      modalVisibleEditAddress: false,
      modalVisibleAddAddress: false,
      name: '',
      address: '',
      province: '',
      province_id:'',
      city: '',
      postalcode: '',
      numberPhone: '',
      address_id:'',
      user_address_id:'',
      label:'',
      cities:[]
    }
  }

  closeModal(){
    this.setState({modalVisibleEditAddress: !this.state.modalVisibleEditAddress})
  }

  async toggleModalEditAddress(item){
    await this.closeModal()
    if(this.state.modalVisibleEditAddress){
      await this.setState({
        user_address_id:item.user_address_id,
        name: item.recepient,
        address: item.detail_address,
        province: item.province,
        province_id:item.province_id,
        city: item.city,
        city_id:item.city_id,
        postalcode: item.postal_code,
        numberPhone: item.phone,
        label:item.label,
      })
    }else{
      await this.setState({
        name: '',
        address: '',
        province: '',
        province_id:'',
        city: '',
        postalcode: '',
        numberPhone: '',
        label:'',
      })
    }
  }

  toggleModalAddAddress(){
    this.setState({modalVisibleAddAddress: !this.state.modalVisibleAddAddress})
  }

  async handleSaveAddress(){
    const { name, address, province_id, city_id, postalcode, numberPhone, label } = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.createAddress(data.id, {name, address, province_id, city_id, postalcode, numberPhone, label }, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalAddAddress()
    await this.setState({
      name: '',
      address: '',
      province: '',
      province_id:'',
      city: '',
      postalcode: '',
      numberPhone: '',
      label:'',
    })
    // Alert.alert('Success Add Address', 'Thanks..')
    ToastAndroid.showWithGravity("Added", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  handleSaveShippingAddress(){
    alert("Handler for save shipping address")
  }

  async btnUpdateShipping(){
    const { name, address, province_id, city_id, postalcode, numberPhone, label } = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateShipping(this.state.user_address_id, {name, address, province_id, city_id, postalcode, numberPhone, label}, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalEditAddress()
    await this.setState({
      name: '',
      address: '',
      province: '',
      province_id:'',
      city_id:'',
      city: '',
      postalcode: '',
      numberPhone: '',
      label:'',
    })
    // Alert.alert('Success Add Address', 'Thanks..')
    ToastAndroid.showWithGravity("Updated", ToastAndroid.SHORT, ToastAndroid.CENTER)
  }

  async componentDidMount() {
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.fetchProvince()
    if(this.props.fetchUserShipping(data.id, data.accessToken)){
      await this.setState({stillLoading: false})
    }    
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
  }

  async deteleShipping(item){
    await this.setState({
      address_id: item.user_address_id,
      address_default: true
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    Alert.alert(
      'Delete',
      'Are you sure to Delete ?',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => this.fetchData(item),
        }
      ],
      { cancelable: false }
    )
  }

  async fetchData(item){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.deleteShipping(this.state.address_id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
  }

  async handleProvince(province, province_id){
    await this.setState({
      province_id: province_id,
      province: province, 
      visibleProvincePicker: false,
    
    })
    await this.setState({
      cities: this.props.receiveProvince.filter(p => p.province === this.state.province).map(m => m.cities)})
  }

  async handleCity(city,city_id, postal_code){
    await this.setState({
      city_id: city_id,
      city:city, 
      visibleCityPicker: false,
      postalcode: postal_code
    })
  }

  render(){
    console.log('cities :' , JSON.stringify(this.state))
    console.log('usershipping : ', this.props.usershipping)
    return(
      <YourShippingAddress
        stillLoading={this.state.stillLoading}
        goback={() => this.props.navigation.goBack()}
        modalVisibleAddAddress={this.state.modalVisibleAddAddress}
        toggleModalAddAddress={() => this.toggleModalAddAddress()}

        modalVisibleEditAddress={this.state.modalVisibleEditAddress}
        toggleModalEditAddress={() => this.toggleModalEditAddress()}

        nameValue={this.state.name}
        onChangeName={(name) => this.setState({name})}

        labelValue={this.state.label}
        onChangeLabel={(label) => this.setState({label})}

        addressValue={this.state.address}
        onChangeAddress={(address) => this.setState({address})}

        provinceValue={this.state.province}
        onChangeProvince={(province) => this.setState({province, visibleProvincePicker: true})}

        cityValue={this.state.city}
        onChangeCity={(city) => this.setState({city, visibleCityPicker: true})}
        
        regencyValue={this.state.regency}
        onChangeRegency={(regency) => this.setState({regency, visibleRegencyPicker: true})}

        postalcodeValue={this.state.postalcode}
        onChangePostalcode={(postalcode) => this.setState({postalcode})}

        numberPhoneValue={this.state.numberPhone}
        onChangeNumberPhone={(numberPhone) => this.setState({numberPhone})}


        dataProvince={this.props.receiveProvince}
        renderDataProvince={({item}) => (
          <Picker data={item.province} onSelect={() => this.handleProvince(item.province, item.province_id) }/>
        )}
        visibleProvincePicker={this.state.visibleProvincePicker ? true : false}

        dataCity={this.state.cities[0]}
        renderDataCity={({item}) => (
          <Picker data={item.city} onSelect={() => this.handleCity(item.city, item.city_id, item.postal_code)}/>
        )}
        visibleCityPicker={this.state.visibleCityPicker ? true : false}

        visibleRegencyPicker={this.state.visibleRegencyPicker ? true : false}

        handleSaveAddress={() => this.handleSaveAddress()}
        handleUpdateAddress={() => this.btnUpdateShipping()}
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
    receiveProvince: state.receiveProvince
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourShippingAddressContainer)