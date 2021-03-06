import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Button } from 'native-base'
const { height, width } = Dimensions.get('window')
import { convertWidthPercentToDP, convertHeightPercentToDP } from '../particles/Converter'

const Validations = (props) => (
  <View 
    style={{
      marginVertical: convertWidthPercentToDP('25%'),
      padding: 10, 
      alignItems: 'center',
      backgroundColor: '#fff',
      
      justifyContent: 'center',
      alignContent: 'center',
    }}>
    {props.showIcon || props.showImportedImage ? (
      <View>
        <Image source={props.showImportedImage ? props.image : {uri: props.icon}} style={styles.imageCategories} />
      </View>
    ) : (
      <View style={{width: 30,height: 30}}/>
    )}
    <View style={{padding: convertHeightPercentToDP('1%')}}>
      <Text style={{fontSize: 24, color: '#000', textAlign: 'center'}}>{props.title}</Text>
    </View>
    <View style={{padding: convertHeightPercentToDP('1%')}}> 
      <Text style={{fontSize: 20, color: '#ccc', textAlign: 'center'}}>{props.message1}</Text>
      <Text style={{fontSize: 20, color: '#ccc', textAlign: 'center'}}>{props.message2}</Text>
    </View>
    <Button full style={styles.backToMart} onPress={props.buttonAction}>
			<Text style={styles.backToMartText}>{props.buttonText}</Text>
		</Button>
  </View>
)

export default Validations

const styles = StyleSheet.create({
  backToMart:{
    marginLeft:30,
    marginRight:30,
    marginTop: 60,
    height: 60,
    borderRadius: 10, 
    backgroundColor: '#d11e48'
  },
  backToMartText:{
    color: '#fff', 
    fontSize: 18 
  },

  imageCategories: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  }
})
