import React, { Component } from 'react'
import {AsyncStorage, View,Modalx, Text, SmartPicker, Dimensions, ScrollView, Alert, ToastAndroid, BackHandler, Platform, NetInfo} from 'react-native'
import { Content, Item, Input, Icon, Label, Button, Form, Textarea, Toast } from 'native-base'
import YourShippingAddress from '../components/YourShippingAddress'
import ShippingAddress from '../particles/ShippingAddress'
import Picker from '../particles/Picker'

import { connect } from 'react-redux'
import { fetchUserShipping, updateShipping, updateSetdefault, 
         deleteShipping, createAddress, fetchProvince 
       } from '../actions/usershipping'
import { getLanguages } from 'react-native-i18n'

class YourShippingAddressContainer extends Component{

  constructor(){
    super()
    this.state = {
      stillLoading:true,
      setDefaultLoading:false,
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
      city_with_type: '',
      city_id: '',
      postal_code: 0,
      numberPhone: '',
      address_id:'',
      user_address_id:'',
      label:'',
      cities:[],
      loading: false,
      language: ''
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
        province_id:item.province_id,
        province: item.province,
        city_id:item.city_id,
        city: item.city,
        city_with_type: item.city,
        postal_code: item.postal_code,
        numberPhone: item.phone,
        label:item.label,
      })
    }else{
      await this.setState({
        name: '',
        address: '',
        province: '',
        province_id:'',
        province:'',
        city_id: '',
        city: '',
        city_with_type: '',
        postal_code: '',
        numberPhone: '',
        label:'',
      })
    }
  }

  toggleModalAddAddress(){
    this.setState({modalVisibleAddAddress: !this.state.modalVisibleAddAddress})
  }

  async handleSaveAddress(){
    this.setState({loading: true})
    const { name, address, province_id, city_id, postal_code, numberPhone, label } = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.createAddress(data.id, {name, address, province_id, city_id, postal_code, numberPhone, label }, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalAddAddress()
    await this.setState({
      name: '',
      address: '',
      province: '',
      province_id:'',
      city_id:'',
      city_with_type: '',
      city: '',
      postal_code: '',
      numberPhone: '',
      label:'',
    })
    // Alert.alert('Success Add Address', 'Thanks..')
    if(Platform.OS === 'android'){
      ToastAndroid.showWithGravity("Added", ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      Toast.show({
        text: "Added"
      }) 
    }
    this.setState({loading: false})
  }

  handleSaveShippingAddress(){
    alert("Handler for save shipping address")
  }

  async btnUpdateShipping(){
    this.setState({loading: true})
    const { name, address, province_id, city_id, postal_code, numberPhone, label } = this.state
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.props.updateShipping(this.state.user_address_id, {name, address, province_id, city_id, postal_code, numberPhone, label}, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.toggleModalEditAddress()
    await this.setState({
      name: '',
      address: '',
      province: '',
      province_id:'',
      city_id:'',
      city_with_type: '',
      city: '',
      postal_code: '',
      numberPhone: '',
      label:'',
    })
    // Alert.alert('Success Add Address', 'Thanks..')
    if(Platform.OS === 'android'){
      ToastAndroid.showWithGravity("Updated", ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      Toast.show({
        text: "Updated"
      })
    }
    this.setState({loading: false})
  }

  async componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    await BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(this.props.fetchUserShipping(data.id, data.accessToken)){
      await this.props.fetchProvince()
      await this.setState({stillLoading: false})
    }
  }

  componentWillUnmount() {
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

  async onChangeDefault(item){
    await this.setState({
      address_id: item.user_address_id,
      address_default: true
    })
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    await this.setState({setDefaultLoading: true})
    await this.props.updateSetdefault(data.id, this.state.address_id, data.accessToken)
    await this.props.fetchUserShipping(data.id, data.accessToken)
    await this.setState({setDefaultLoading: false})
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
        { text: 'Cancel', onPress: () => {
          Platform.OS === 'ios'
          ?
          Toast.show({
            text: 'Canceled'
          })
          :
          ToastAndroid.showWithGravity("Canceled", ToastAndroid.SHORT, ToastAndroid.CENTER)
        }, style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            this.fetchData(item)
            Platform.OS === 'ios'
            ?
            Toast.show({
              text: "Deleted"
            })
            :
            ToastAndroid.showWithGravity("Delete", ToastAndroid.SHORT, ToastAndroid.CENTER)
          },
        }
      ],
      { cancelable: false }
    )
  }

  async fetchData(){
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

  async handleCity(city,city_id, postal_code, city_with_type){
    await this.setState({
      city_id: city_id,
      city:city, 
      visibleCityPicker: false,
      postal_code: postal_code,
      city_with_type
    })
  }

  handleBackPress = () => {
    this.handleGoBack(); // works best when the goBack is async
    return true;
  }

  handleGoBack(){
    const {navigation} = this.props
    navigation.state.params.func()
    navigation.goBack()
  }

  render(){
    console.log('city ', this.state.cities[0])
    return(
      <YourShippingAddress
        stillLoading={this.state.stillLoading}
        setDefaultLoading={this.state.setDefaultLoading}
        loading={this.state.loading}
        goback={() => this.handleBackPress()}
        
        province_id={this.state.province_id}
        city_id={this.state.city_id}

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
        onChangeProvince={(province) => this.setState({province, visibleProvincePicker: true, province_id:'', city_with_type: ''})}

        cityValue={this.state.city_with_type}
        onChangeCity={(city_with_type) => this.setState({city_with_type, visibleCityPicker: true, city_id:''})}
        
        regencyValue={this.state.regency}
        onChangeRegency={(regency) => this.setState({regency, visibleRegencyPicker: true})}

        postalcodeValue={this.state.postal_code.toString()}
        onChangePostalcode={(postal_code) => this.setState({postal_code})}

        numberPhoneValue={this.state.numberPhone}
        onChangeNumberPhone={(numberPhone) => this.setState({numberPhone})}

        dataProvince={this.props.receiveProvince}
        renderDataProvince={({item}) => (
          <Picker data={item.province} onSelect={() => this.handleProvince(item.province, item.province_id) }/>
        )}
        visibleProvincePicker={this.state.visibleProvincePicker ? true : false}

        dataCity={this.state.cities[0]}
        renderDataCity={({item}) => (
          <Picker data={item.city_with_type} onSelect={() => this.handleCity(item.city, item.city_id, item.postal_code, item.city_with_type)}/>
        )}
        visibleCityPicker={this.state.visibleCityPicker ? true : false}

        visibleRegencyPicker={this.state.visibleRegencyPicker ? true : false}

        handleSaveAddress={() => this.handleSaveAddress()}
        handleUpdateAddress={() => this.btnUpdateShipping()}
        dataShippingAddressDefault={this.props.usershipping.filter(item => item.address_default === true)}
        dataShippingAddress={this.props.usershipping.filter(item => item.address_default === false)}
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