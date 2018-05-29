import React,{ Component } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import imageCover from '../assets/images/cover/cover.jpg'
import imageSkinCare from '../assets/images/icon/skincare.png'

const { width, height } = Dimensions.get('window')
const BestCategories = (props) => (
  <View>
    <View style={{borderWidth: 1, borderColor: '#e2e2e2', width: ( width - 50 ) / 2, marginRight: 10, marginBottom: 10, padding: 10 }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.2}}>
          <Image source={imageSkinCare} style={{width: 35, height: 35, alignSelf: 'center'}}/>
        </View>
        <View style={{flex: 0.8}}>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', color: '#f65857'}}>Nails</Text>
            <Text>38 Product</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
)

export default BestCategories