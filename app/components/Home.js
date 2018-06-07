import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, FlatList, StatusBar } from 'react-native'
import { Container, Tabs, Tab, TabHeading, Icon, Content } from 'native-base'
import NavbarHome from '../particles/NavbarHome'
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
    <NavbarHome
      searchIconAction={props.navigateToSearch}
      cartIconAction={props.navigateToYourCart}
      photoProfileAction={props.navigateToProfile} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <Tabs locked={true} style={{ height: 1000 }} tabBarUnderlineStyle={{ backgroundColor: '#f65857' }}>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Text style={styles.txtHeading}>New Arrivals</Text></TabHeading>}>
        <Content>
          <Carousel
            delay={4000}
            style={styles.imageAds}
            autoplay
            bullets
            bulletStyle={{ backgroundColor: '#494949', borderColor: '#494949' }}
            onAnimateNextPage={(p) => console.log(p)}
          >
            <View style={[props.size]}>
              <Image source={imageCover} style={styles.imageAds} />
            </View>
            <View style={[props.size]}>
              <Image source={{ uri: "https://i1.wp.com/3.bp.blogspot.com/-0z5ul05Ic6c/Vn6eCJJwuRI/AAAAAAAAMpY/PaTwKnYMsqI/s1600/produk%2Bkecantikan%2Bephyra%2Bskin%2Bbar.jpg?w=1140&ssl=1" }} style={styles.imageAds} />
            </View>
            <View style={[props.size]}>
              <Image source={imageCover} style={styles.imageAds} />
            </View>
          </Carousel>
          <View>
            <Text style={styles.txtCategories}>Category</Text>
            <View style={styles.viewWrapperCategories}>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageSkinCare} style={styles.imageCategories} />
                </View>
                <Text style={styles.titleCategories}>Skincare</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageMakeUp} style={styles.imageCategories} />
                </View>
                <Text style={styles.titleCategories}>Makeup</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageToolBrushes} style={styles.imageCategories} />
                </View>
                <Text style={styles.titleCategories}>Tools & Brushes</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageNails} style={styles.imageCategories} />
                </View>
                <Text style={styles.titleCategories}>Nails</Text>
              </View>
              <View style={styles.flexOnly2}>
                <View style={styles.viewCategories}>
                  <Image source={imageMore} style={styles.imageCategories} />
                </View>
                <Text style={styles.titleCategories}>More</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewBrand}>
            <Text style={styles.txtBrand}>Brand</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={props.dataBrand}
              renderItem={props.renderBrand}
              keyExtractor={(item, index) => JSON.stringify(index)}
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
        </Content>
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading}><Text style={styles.txtHeading}>Best Sellers</Text></TabHeading>}>
        <Content>
          <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={props.dataRecommend}
              renderItem={props.renderRecommend}
              keyExtractor={(item, index) => JSON.stringify(index)}
            />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={styles.txtArrivals}>More New Arrivals</Text>
            <FlatList
              numColumns={2}
              data={props.dataCategories}
              renderItem={props.renderCategories}
              keyExtractor={(item, index) => JSON.stringify(index)}
            />
          </View>
          <View style={styles.viewArrivals}>
            <Text style={styles.txtArrivals}>All Product</Text>
            <FlatList
              numColumns={2}
              data={props.dataProduct}
              renderItem={props.renderProduct}
              keyExtractor={(item, index) => JSON.stringify(index)}
            />
          </View>
        </Content>
      </Tab>
    </Tabs>
  </Container>
)

const styles = StyleSheet.create({
  imageAds: {
    width: '100%',
    height: 200
  },
  viewBrand: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20
  },
  txtHeading: {
    color: '#000'
  },
  txtBrand: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10
  },
  txtArrivals: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  tabHeading: {
    backgroundColor: '#fff'
  },
  txtCategories: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 10
  },
  flexOnly2: {
    flex: 0.25
  },
  viewArrivals: {
    paddingLeft: 20,
    marginTop: 10
  },
  viewWrapperCategories: {
    flexDirection: 'row',
    paddingTop: 10
  },
  viewCategories: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignSelf: 'center'
  },
  imageCategories: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    resizeMode: 'contain'
  },
  titleCategories: {
    textAlign: 'center',
    color: '#da4365',
    fontSize: 12,
    marginTop: 5
  }
})

export default Home