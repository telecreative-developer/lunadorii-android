import React, { Component } from 'react'
import { StyleSheet, FlatList, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Content, Text, View, Button, Icon, Item, Input } from 'native-base'
import { Rating } from 'react-native-ratings'
import NavbarTransparent from '../particles/NavbarTransparent'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const ProductShow = (props) => (
  <Container>
    <Content style={styles.container}>
      <ImageBackground source={{ uri: props.image }} style={styles.imageBackgroundStyle}>
        <NavbarTransparent
          navbarTitle=""
          navbarIcon="arrow-back"
          actionIcon={props.goback} />
        <TouchableOpacity style={styles.touchableOpacity}>
          <StatusBar
            backgroundColor="#f65857"
            barStyle="light-content"
          />
          <Text style={styles.textPhotos}><FontAwesome name="photo" style={styles.touchableOpacityButtonIcon} /> +3 Photos</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.firstGroup}>
        <View style={styles.firstGroupWrapper}>
          <Text style={styles.firstGroupTitle}>{props.title}</Text>
          <Text style={styles.fistGroupSubtitle}>{props.categories}</Text>
        </View>
        <View style={styles.firstGroupWrapper2}>
          <TouchableOpacity>
            <View style={styles.firstGroupButtonShare}>
              <Entypo name="heart-outlined" style={styles.firstGroupButtonIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondGroup}>
        <Rating
          type='custom'
          ratingCount={5}
          startingValue={props.star}
          imageSize={16}
          ratingColor="#000"
          ratingBackgroundColor="#ccc"
          style={styles.rating} />
        <Text style={styles.reviewsLabel}>{props.star}.0 reviews</Text>
      </View>
      <View style={styles.borderedSparator}>
        <View style={styles.borderedSparatorFirst}>
          <Text style={styles.borderedSparatorFirstTitle}>Description</Text>
          <Text style={styles.borderedSparatorFirstContent}>
            {props.descriptions}
          </Text>
        </View>
        <View style={styles.borderedSparatorSecond}>
          <Text style={styles.borderedSparatorSecondTitle}>Product Details</Text>
          <Text style={styles.borderedSparatorSecondPointedContent}>{props.productDetails}</Text>
        </View>
        <View style={styles.borderedSparatorThird}>
          <Text style={styles.borderedSparatorThirdTitle}>How to Use</Text>
          <Text style={styles.borderedSparatorThirdContent}>
            {props.guide}
          </Text>
        </View>
        <View style={styles.seeMore}>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderedSparator1}>
        <View style={styles.borderedSparatorFirst}>
          <Text style={styles.borderedSparatorFirstTitle}>Reviews & Rating</Text>
          <View style={styles.ratingCard}>
            <View style={styles.ratingCardContentWrapper}>
              <Text style={styles.ratingReviewsText}>
                <Text style={styles.ratingAmountReviewsText}>{props.star}.0</Text> reviews
              </Text>
              <Rating
                type='custom'
                ratingCount={5}
                startingValue={props.star}
                imageSize={16}
                ratingColor="#000"
                ratingBackgroundColor="#ccc"
                style={styles.rating1} />
            </View>
          </View>
          <View>
            <FlatList
              data={props.dataCommentAndRating}
              renderItem={props.renderCommentAndRating}
              keyExtractor={(item, index) => JSON.stringify(index)}
            />
          </View>
        </View>
        <View style={styles.seeMore2}>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderedSparator1}>
          <View style={styles.borderedSparatorFirst}>
            <Text style={styles.borderedSparatorFirstTitle2}>Related Products</Text>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.dateRelatedProducts}
                renderItem={props.renderRelatedProducts}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            </View>
          </View>
        </View>
      </View>
    </Content>
    <View style={styles.footer}>
      <View style={styles.footer}>
        <View style={styles.flexDirectionRow}>
          <View style={styles.rightWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.flexOnly33}>
                <TouchableOpacity onPress={() => alert("Pluss")}>
                  <View style={styles.minusButton}>
                    <Text style={styles.buttonFontSize}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.flexOnly33}>
                <Item regular style={styles.amountTextInput}>
                  <Input value={props.qty}/>
                </Item>
              </View>
              <View style={styles.flexOnly33}>
                <TouchableOpacity onPress={props.addqty}>
                  <View style={styles.plussButton}>
                    <Text style={styles.buttonFontSize}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.leftWrapper}>
            <View style={styles.flexDirectionCol}>
              <Text style={styles.footerTotalPriceText}>Rp {props.price}</Text>
              <TouchableOpacity>
                <View style={styles.footerButtonStyling}>
                  <MaterialCommunityIcons name="cart" size={16} />
                  <Text style={styles.footerButtonTextStyling}>Add to Cart</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Container>
)

export default ProductShow

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  imageBackgroundStyle: {
    height: 250,
    width: '100%'
  },
  firstGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstGroupWrapper: {
    padding: 10
  },
  firstGroupTitle: {
    fontWeight: 'bold',
    fontSize: 24
  },
  fistGroupSubtitle: {
    fontSize: 16,
    paddingTop: 5,
    color: '#848484'
  },
  firstGroupWrapper2: {
    padding: 20
  },
  firstGroupButtonShare: {
    borderWidth: 1,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc'
  },
  firstGroupButtonIcon: {
    fontSize: 24
  },
  secondGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 15
  },
  borderedSparatorFirst: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  borderedSparatorFirstTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  borderedSparatorFirstTitle2: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 15
  },
  borderedSparatorFirstContent: {
    fontSize: 16,
    marginTop: 10,
    color: '#848484'
  },
  borderedSparatorSecond: {
    paddingLeft: 10,
    marginBottom: 10
  },
  borderedSparatorSecondTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  borderedSparatorSecondPointedContent: {
    fontSize: 16,
    marginTop: 10,
    color: '#848484'
  },
  borderedSparatorThird: {
    paddingLeft: 10,
    marginTop: 10,
  },
  borderedSparatorThirdTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  borderedSparatorThirdContent: {
    fontSize: 16,
    marginTop: 10,
    color: '#848484'
  },
  ratingCard: {
    marginTop: 15,
    borderRadius: 1,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    marginBottom: 5,
    alignItems: 'center'
  },
  ratingCardContentWrapper: {
    padding: 25
  },
  ratingReviewsText: {
    fontSize: 16,
    color: '#F7009A',
    alignSelf: 'center'
  },
  ratingAmountReviewsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F7009A',
    alignSelf: 'center'
  },
  seeMore: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  seeMore2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  seeMoreText: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F7009A'
  },
  rating: {
    marginBottom: 10,
  },
  rating1: {
    marginTop: 5,
    marginBottom: 10
  },
  reviewsLabel: {
    paddingLeft: 10,
    color: '#F7009A'
  },
  borderedSparator: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  borderedSparator1: {
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  touchableOpacity: {
    backgroundColor: 'rgba(202, 202, 202, 0.73)',
    marginRight: 5,
    width: 110,
    height: 30,
    top: 155,
    alignSelf: 'flex-end',
    borderRadius: 8
  },
  touchableOpacityButtonIcon: {
    fontSize: 16
  },
  textPhotos: {
    padding: 10,
    justifyContent: 'center',
    bottom: 5,
    color: '#000',
    fontWeight: 'bold'
  },
  footer: {
    backgroundColor: '#fff',
    height: 80
  },
  amountTextInput: {
    borderRadius: 10,
    alignItems: 'center',
    right: 10,
    width: '100%',
    height: 35
  },
  minusButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 80
  },
  plussButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 80
  },
  buttonFontSize: {
    fontSize: 26
  },
  flexOnly33: {
    flex: 0.33
  },
  rightWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  leftWrapper: {
    flex: 0.5,
    padding: 10
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  flexDirectionCol: {
    flexDirection: 'column'
  },
  footerButton: {
    justifyContent: 'center',
    padding: 10
  },
  footerButtonStyling: {
    borderRadius: 5,
    height: 35,
    width: 130,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ccc',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 10
  },
  footerButtonTextStyling: {
    fontWeight: 'bold',
    marginRight: 10
  },
  footerTotalPriceText: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'right'
  },
})