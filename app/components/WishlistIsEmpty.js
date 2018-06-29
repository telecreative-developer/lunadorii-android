import React from 'react'
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native'
import { Container, Icon, Button } from 'native-base'
const { height, width } = Dimensions.get('window')

const WishlistIsEmpty = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <View 
      style={{
        padding: 10, 
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 24, color: '#000'}}>Your Wishlist is empty.</Text>
      </View>
      <Text style={{fontSize: 20, color: '#ccc'}}>click <Icon type="Entypo" name="heart-outlined" style={{color: '#d11e48'}}/> to deviate your</Text>
      <Text style={{fontSize: 20, color: '#ccc'}}>stuff on wishlist</Text>
      <Button full style={styles.backToMart} onPress={props.navigateToMart}>
				<Text style={styles.backToMartText}>Back to mart</Text>
			</Button>
    </View>
  </Container>
)

export default WishlistIsEmpty

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  content:{
    backgroundColor: '#fff'
  },
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
