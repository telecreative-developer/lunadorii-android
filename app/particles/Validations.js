import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { Button } from 'native-base'
const { height, width } = Dimensions.get('window')

const Validations = (props) => (
  <View 
    style={{
      marginVertical: 150,
      padding: 10, 
      alignItems: 'center',
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    }}>
    <View style={{padding: 10}}>
      <Text style={{fontSize: 24, color: '#000'}}>{props.title}</Text>
    </View>
    <View style={{padding: 10}}>
      <Text style={{fontSize: 20, color: '#ccc', textAlign: 'center'}}>{props.message1}</Text>
      <Text style={{fontSize: 20, color: '#ccc', textAlign: 'center'}}>{props.message2}</Text>
    </View>
    <Button full style={styles.backToMart} onPress={props.navigateToProfile}>
			<Text style={styles.backToMartText}>Back to profile</Text>
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
})
