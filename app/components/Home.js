import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Dimensions, FlatList } from 'react-native'
import { Container, Header, Tabs, Tab, TabHeading, Icon, Content } from 'native-base'
import PropTypes from 'prop-types'
import Navbar from '../particles/Navbar'
import Carousel from 'react-native-looped-carousel'
import imageCover from '../assets/images/cover/cover.jpg'
import imageSkinCare from '../assets/images/icon/skincare.png'
import imageMakeUp from '../assets/images/icon/makeup.png'
import imageNails from '../assets/images/icon/nails.png'
import imageToolBrushes from '../assets/images/icon/tools-brushes.png'
import imageMore from '../assets/images/icon/more.png'

const { width, height } = Dimensions.get('window')
const Home = (props) => (
  <Container style={styles.tabHeading}>
    <Navbar 
    navbarTitle="Home"
    navbarIcon="arrow-back"
    />
    <Tabs locked={true} style={{height: 1000}} tabBarUnderlineStyle= {{ backgroundColor: '#f65857' }}>
      <Tab heading={ <TabHeading  style={styles.tabHeading} ><Text style={styles.txtHeading}>New Arrivals</Text></TabHeading>}>
        <Content>
          <Carousel
            delay={4000}
            style={styles.imageAds}
            autoplay
            bullets
            bulletStyle={{backgroundColor: '#494949', borderColor: '#494949'}}
            onAnimateNextPage={(p) => console.log(p)}
          >
            <View style={[props.size]}>
              <Image source={imageCover} style={styles.imageAds}/>
            </View>
            <View style={[props.size]}>
              <Image source={imageCover} style={styles.imageAds}/>
            </View>
            <View style={[props.size]}>
              <Image source={imageCover} style={styles.imageAds}/>
            </View>
          </Carousel>
          <View style={styles.viewWrapper}>
            <Text style={styles.txtCategories}>Category</Text>
            <View style={styles.viewWrapperCategories}>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageSkinCare} style={styles.imageCategories}/>
                </View>
                <Text style={styles.titleCategories}>Skincare</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageMakeUp} style={styles.imageCategories}/>
                </View>
                <Text style={styles.titleCategories}>Makeup</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageToolBrushes} style={styles.imageCategories}/>
                </View>
                <Text style={styles.titleCategories}>Tools & Brushes</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageNails} style={styles.imageCategories}/>
                </View>
                <Text style={styles.titleCategories}>Nails</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageMore} style={styles.imageCategories}/>
                </View>
                <Text style={styles.titleCategories}>More</Text>
              </View>
            </View>
            <View style={styles.viewFlatCategory}>
              <Text style={styles.txtHeadCategories}>Category</Text>
              <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.dataBrand}
                renderItem={props.renderBrand}
                keyExtractor={(item, index) => JSON.stringify(index)}
                style={styles.flatList}
              />
            </View>
            <View style={styles.viewArrivals}>
            <Text style={styles.txtArrivals}>More New Arrivals</Text>
              <FlatList
                numColumns={2}
                data={props.dataProduct}
                renderItem={props.renderProduct}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            </View>
          </View>
        </Content>
      </Tab>
      <Tab heading={ <TabHeading style={styles.tabHeading}><Text style={styles.txtHeading}>Best Sellers</Text></TabHeading>}>
        <Text>Tampan</Text>
      </Tab>
    </Tabs>
  </Container>
)

const styles = StyleSheet.create({
  imageAds:{
    width: '100%', 
    height: 200
  },
  viewFlatCategory:{
    paddingTop: 5, 
    paddingBottom: 5
  },
  txtHeading:{
    color: '#000'
  },
  txtHeadCategories:{
    fontWeight: 'bold', 
    fontSize: 16
  },
  txtArrivals:{
    fontWeight: 'bold', 
    fontSize: 16, 
    marginBottom: 10
  },
  tabHeading:{
    backgroundColor: '#fff'
  },
  txtCategories:{
    fontWeight: 'bold', 
    fontSize: 16
  },
  flexOnly2:{
    flex: 0.25
  },
  viewArrivals:{
    marginTop: 10
  },
  viewWrapperCategories:{
    flexDirection: 'row', 
    paddingTop: 10
  },
  viewWrapper:{
    padding: 20
  },
  viewCategories:{
    borderWidth: 1, 
    borderColor: '#e2e2e2', 
    height: 55, 
    width: 55, 
    borderRadius: 55 / 2, 
    alignSelf: 'center'
  },
  imageCategories:{
    width: 30, 
    height: 30, 
    alignSelf: 'center', 
    marginTop: 10
  },
  titleCategories:{
    textAlign: 'center', 
    color: '#da4365', 
    fontSize: 12, 
    marginTop: 5
  }
})

export default Home