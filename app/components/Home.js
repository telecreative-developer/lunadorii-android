import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Tabs, Tab, TabHeading, Icon, Content } from 'native-base'
import NavbarHome from '../particles/NavbarHome'
// import Carousel from 'react-native-looped-carousel'
import Carousel from 'react-native-banner-carousel'
// import imageCover from '../assets/images/cover/cover.jpg'
import Categories from '../particles/Categories'
import AddToCart from '../modals/AddToCart'

const { height, width } = Dimensions.get('window')

const bannerWidth = Dimensions.get('window').width

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
    <AddToCart
      modalVisible={props.modalVisibleAddToCart}
      toggleModalAddToCart={props.toggleModalAddToCart}
      onChangeQty={props.onChangeQty}
      handleAddToCart={props.handleAddToCart}
    />
    <Tabs locked={true} style={styles.tabHeight} tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Text style={styles.txtHeading}>New Arrivals</Text></TabHeading>}>
        <Content>
          {/* <Carousel
            delay={4000}
            style={styles.imageAds}
            autoplay
            bullets
            bulletStyle={styles.carouselBulletStyle}
            // onAnimateNextPage={(p) => console.log(p)}
          >
          <View>
            {props.dataBanners.map((data) => {
              console.log('home banners: ', data)
              return (
                <View style={[props.size]}>
                  <Image source={{ uri: data.thumbnail_url }} style={styles.imageAds}/>
                </View>
              )
            })}
          </View>
          </Carousel> */}
          <Carousel autoplay={true} autoplayTimeout={2000} loop={true} index={0} pageSize={bannerWidth}>
            {props.banners}
          </Carousel>
          <View>
            <Text style={styles.txtCategories}>Category</Text>
            <View style={styles.viewWrapperCategories}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.dataCategoriesButton}
                renderItem={props.renderCategoriesButton} />
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
          <View style={styles.recommededProductWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={props.dataRecommend}
              renderItem={props.renderRecommend}
              keyExtractor={(item, index) => JSON.stringify(index)}
            />
          </View>
          <View style={styles.moreNewArrivalsWrapper}>
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
  tabHeight: {
    height: 1000
  },
  moreNewArrivalsWrapper: {
    paddingLeft: 20
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#f65857'
  },
  recommededProductWrapper: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  carouselBulletStyle: {
    backgroundColor: '#494949',
    borderColor: '#494949'
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
  viewArrivals: {
    paddingLeft: 20,
    marginTop: 10
  },
  viewWrapperCategories: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
})

export default Home