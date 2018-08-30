import React from 'react'
import { StyleSheet, View, Text, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Tabs, Tab, TabHeading, Icon, Content, Spinner } from 'native-base'
import NavbarHome from '../particles/NavbarHome'
import Carousel from 'react-native-banner-carousel'
import AddToCart from '../modals/AddToCart'
import LoginRequiredModal from '../modals/LoginRequiredModal'
import Reloader from '../particles/Reloader'
import InternetConnectionProblem  from '../particles/InternetConnectionProblem'
import I18n from '../i18n'
const { height, width } = Dimensions.get('window')

const bannerWidth = Dimensions.get('window').width

const Home = (props) => (
  <Container style={styles.tabHeading}>
  {console.log(props.person)}
    <NavbarHome
      searchIconAction={props.navigateToSearch}
      cartIconAction={props.navigateToYourCart}
      image={props.image}
      photoProfileAction={props.navigateToProfile} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <AddToCart
      increaseQty={props.increaseQty}
      decreaseQty={props.decreaseQty}
      quantityValue={props.quantityValue}
      modalVisible={props.modalVisibleAddToCart}
      toggleModalAddToCart={props.toggleModalAddToCart}
      onChangeQty={props.onChangeQty}
      handleAddToCart={props.handleAddToCart}      
    />
    <LoginRequiredModal 
      modalVisibleLogin={props.modalVisibleLogin}
      closeModal={props.closeModal}
      loginAction={props.loginAction}
    />
    <Tabs locked={true} style={styles.tabHeight} tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Text style={styles.txtHeading}>{I18n.t('new_arrivals')}</Text></TabHeading>}>
        {props.isConnected == false ? (
          // <Reloader reloadAction={props.handleRefresh}/>
          <View style={styles.style}>
            <InternetConnectionProblem buttonAction={props.handleRefresh} />
          </View>
        ) :
        props.stillLoading ? (
          <View style={styles.style}>
            <Spinner color="#d11e48"/>
          </View>
        ) : (
          <Content style={{width: width,height: height}}>
            <Carousel autoplay={true} autoplayTimeout={2000} loop={true} index={0} pageSize={bannerWidth}>
              {props.banners}
            </Carousel>
            <View style={styles.viewCategory}>
              <Text style={styles.txtCategories}>{I18n.t('categories')}</Text>
              <View style={styles.viewWrapperCategories}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={props.dataCategoriesButton}
                  renderItem={props.renderCategoriesButton} />
              </View>
            </View>
            <View style={styles.viewBrand}>
              <Text style={styles.txtCategories}>{I18n.t('brands')}</Text>
              <View style={styles.viewWrapperCategories}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={props.dataBrand}
                  renderItem={props.renderBrand}
                  keyExtractor={(item, index) => JSON.stringify(index)}
                />
              </View>  
            </View>
            <View style={styles.viewArrivals}>
              <Text style={styles.txtArrivals}>{I18n.t('more_new_arrivals')}</Text>
                {props.isConnected? (
                  <FlatList
                    numColumns={2}
                    data={props.dataProduct}
                    renderItem={props.renderProduct}
                    keyExtractor={(item, index) => JSON.stringify(index)}
                  />
                  ) : (
                    <View style={{alignItems: 'center', marginBottom: 20}}>
                      <Text>{I18n.t('offline_message')}</Text>
                    </View>
                  )
                }
            </View>
          </Content>
        )}
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading}><Text style={styles.txtHeading}>{I18n.t('best_sellers')}</Text></TabHeading>}>
        {props.isConnected == false ? (
          // <Reloader reloadAction={props.handleRefresh}/>
          <View style={styles.style}>
            <InternetConnectionProblem buttonAction={props.handleRefresh} />
          </View>
        ) :
        props.stillLoading ? (
          <Content contentContainerStyle={styles.style}>
            <View>
              <Spinner color="#d11e48"/>
            </View>
          </Content>
        ) : (
          <Content style={{width: width,height: height}}>
            <View style={styles.recommededProductWrapper}>
            {props.dataProduct.length == 0 ?
              <View>
                <View style={{alignItems: 'center'}}>
                  <Text>{I18n.t('empty')}</Text>
                </View>
              </View>
            :
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.dataBigCard}
                renderItem={props.renderRecommend}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            }
            </View>
            <View style={styles.moreNewArrivalsWrapper}>
              <Text style={styles.txtArrivals}>{I18n.t('all_categories')}</Text>
              {props.dataCategories.length == 0 ?
              <View>
                <View style={{alignItems: 'center'}}>
                  <Text>{I18n.t('empty')}</Text>
                </View>
              </View>
              :
              <FlatList
                numColumns={2}
                data={props.dataCategories}
                renderItem={props.renderCategories}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
              }
            </View>
            <View style={styles.viewArrivals}>
              <Text style={styles.txtArrivals}>{I18n.t('all_product')}</Text>
              {props.dataBestSeller.length == 0 ?
                <View style={{alignItems: 'center', paddingBottom: 10}}>
                  <Text>{I18n.t('empty')}</Text>
                </View>
              :
              <FlatList
                numColumns={2}
                data={props.dataBestSeller}
                renderItem={props.renderProduct}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
              }
            </View>
          </Content>
        )}
      </Tab>
    </Tabs>
  </Container>
)

const styles = StyleSheet.create({
  imageAds: {
    width: '100%',
    height: 200
  },
  viewCategory: {
    marginTop: 5
  },
  viewBrand: {
    // marginBottom: 5,
  },
  tabHeight: {
    height: 1000
  },
  moreNewArrivalsWrapper: {
    paddingLeft: 10
  },
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabBarUnderlineStyle: {
    alignItems: 'center',
    backgroundColor: '#d11e48'
  },
  recommededProductWrapper: {
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
    paddingRight: 5
  },
  txtArrivals: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  tabHeading: {
    backgroundColor: '#fff',
  },
  txtCategories: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 10
  },
  viewArrivals: {
    paddingLeft: 10,
    marginTop: 10
  },
  viewWrapperCategories: {
    marginTop: 5,
  },
})

export default Home