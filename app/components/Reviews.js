import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import Navbar from '../particles/Navbar'

const Reviews = (props) => (
  <Container style={styles.container}>
    <Navbar
    navbarTitle="Reviews"
    navbarIcon="arrow-back"
    />
    <Content>
      <View style={styles.viewReviews}>
        <Text style={styles.txtReviews}>Your Reviews</Text>
        <FlatList 
          data={props.dataReviews}
          renderItem={props.renderReviews}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      </View>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  viewReviews:{
    marginLeft: 20,
    marginRight: 20, 
    marginTop: 20
  },
  txtReviews:{
    fontWeight: 'bold', 
    fontSize: 16
  }
})

export default Reviews