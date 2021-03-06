import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import Navbar from '../particles/Navbar'
import Validations from '../particles/Validations'
import ImageWhislist from '../assets/images/icon/wishlist.png'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const Wishlist = (props) => (
  <Container style={styles.container}>
    {console.log(props.isEmpty)}
    <Navbar
      navbarIcon="arrow-back"
      navbarTitle={I18n.t('wishlist_title')}
      actionIcon={props.goback}
    />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    {/* {props.stillLoading ?
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>
      :
      <Content>
        {props.isEmpty ? (
          <Validations 
            title={"Your Wishlist is empty"} 
            message1={"Go shop to find what you need"} 
            message2={"and add it to wishlist"}
            buttonText={"Go to mart"}
            buttonAction={props.navigateToProfile}
          />
        ) : (
          props.stillLoading ? (
            <View style={styles.viewArrivals}>
              <View style={{backgroundColor: '#f6f6f6',height: 20, width: 100, marginBottom: 10}}/>
              <FlatList
                numColumns={2}
                data={[1,2,3,4,5]}
                renderItem={({item}) => (
                  <View style={{width: (width - 35) / 2, height: 200, backgroundColor: '#f6f6f6',marginRight: 10,marginBottom: 10}}/>
                )}
              />
            </View>
          ) : (
            <View style={styles.viewArrivals}>
              <Text style={styles.yourWhisListTextTitle}>Your Wishlist</Text>
              <FlatList
                numColumns={2}
                data={props.dataProduct}
                renderItem={props.renderProduct}
                keyExtractor={(item, index) => JSON.stringify(index)}
                handleRemove={() => alert('hai')}
              />
            </View>
          )
        )}
        {props.dataProduct.lenght == 0 ? 
          <Validations 
            title="Your Wishlist is empty" 
            message1="Go shop to find what you need " 
            message2="and add it to wishlist" 
            navigateToProfile={props.navigateToProfile}/>
          :
          <View style={styles.viewArrivals}>
            <Text style={styles.yourWhisListTextTitle}>Your Wishlist</Text>
            <FlatList
              numColumns={2}
              data={props.dataProduct}
              renderItem={props.renderProduct}
              keyExtractor={(item, index) => JSON.stringify(index)}
              handleRemove={() => alert('hai')}
            />
          </View>
        }
      </Content>
    } */}
    {props.stillLoading ? 
      <View style={styles.style}>
        <Spinner color="#d11e48"/>
      </View>:
      <Content>
        {props.dataProduct <= 0 ? 
          <Validations 
            showImportedImage={true}
            image={ImageWhislist}
            title={I18n.t('wishlist_validation_title')}
            message1={I18n.t('wishlist_validation_message1')}
            message2={I18n.t('wishlist_validation_message2')}
            buttonText={I18n.t('wishlist_validation_button')}
            buttonAction={props.navigateToProfile}/>:
          <View style={styles.viewArrivals}>
            <Text style={styles.yourWhisListTextTitle}>{I18n.t('wishlist_flatlist_title')}</Text>
            <FlatList
              numColumns={2}
              data={props.dataProduct}
              renderItem={props.renderProduct}
              keyExtractor={(item, index) => JSON.stringify(index)}
              handleRemove={() => alert('hai')}
            />
          </View>
        }
      </Content>
    }
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  viewArrivals: {
    paddingLeft: 10,
    paddingTop: 10
  },
  yourWhisListTextTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default Wishlist