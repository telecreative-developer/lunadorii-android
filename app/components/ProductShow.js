import React, { Component } from 'react'
import { StyleSheet, FlatList, ImageBackground, TouchableOpacity, StatusBar, Dimensions, TouchableHighlight} from 'react-native'
import { Container, Content, Text, View, Item, Input } from 'native-base'
import StarRating from 'react-native-star-rating';
import NavbarTransparent from '../particles/NavbarTransparent'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import ImageViewModal from '../modals/ImageViewModal'
import { TitlePlaceholder, CategoryPlaceholder, StarPlaceholder, DescriptionPlaceholder, ReviewsAndRatings, TitleOneLine, RelatedProductsPlaceholder } from '../placeholders/ProductShowPlaceholders'
const { height, width } = Dimensions.get('window')

const ProductShow = (props) => (
  <Container style={{
    width: width,
    height: height
  }}>
    <Content style={styles.container}>
      <TouchableHighlight onPress={props.toggleImageViewModal}>
        <ImageBackground source={{ uri: props.image }} style={styles.imageBackgroundStyle}>
          <NavbarTransparent
            navbarTitle=""
            navbarIcon="arrow-back"
            actionIcon={props.goback} />
          <StatusBar
            backgroundColor="#f65857"
            barStyle="light-content"
          />
          <TouchableOpacity style={styles.touchableOpacity} onPress={props.toggleImageViewModal}>
            <Text style={styles.textPhotos}><FontAwesome name="photo" style={styles.touchableOpacityButtonIcon} /> +{props.amountOfImage} Photos</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableHighlight>
      <ImageViewModal
        modalVisible={props.modalVisibleImageView}
        actionIcon={props.toggleImageViewModal}
        images={props.images}/>
      <View style={styles.firstGroup}>
        {props.stillLoading ? (
          <View style={styles.firstGroupWrapper}>
            <View>
              <TitlePlaceholder/>
              <CategoryPlaceholder/>
            </View>
          </View>
        ) : (
          <View style={styles.firstGroupWrapper}>
            <View style={{width: (width - 90) / 1 }}>
              <Text style={styles.firstGroupTitle}>{props.title}</Text>
            </View>
            <Text style={styles.fistGroupSubtitle}>{props.categories}</Text>
          </View>
        )}
        {/* {props.wishlisted === true ? 
          <View style={styles.firstGroupWrapper2}>
            {props.clickWishlist === true ?
              <TouchableOpacity onPress={props.deleteWishlist}>
                <View style={styles.firstGroupButtonShare}>
                  <Entypo name="heart-outlined" style={styles.firstGroupButtonIcon} />
                </View>
              </TouchableOpacity>:
              <TouchableOpacity onPress={props.AddWishlist}>
                <View style={styles.firstGroupButtonShare}>
                  <Entypo name="heart" style={styles.firstGroupButtonIcon} />
                </View>
              </TouchableOpacity>
            }
          </View>:
          <View style={styles.firstGroupWrapper2}>
            {props.clickWishlist === true ?
              <TouchableOpacity onPress={props.deleteWishlist}>
                <View style={styles.firstGroupButtonShare}>
                  <Entypo name="heart-outlined" style={styles.firstGroupButtonIcon} />
                </View>
              </TouchableOpacity>:
              <TouchableOpacity onPress={props.AddWishlist}>
                <View style={styles.firstGroupButtonShare}>
                  <Entypo name="heart" style={styles.firstGroupButtonIcon} />
                </View>
              </TouchableOpacity>
            }
          </View>
          } */}
          {console.log('Wishlisted:', props.wishlisted)}
          {console.log('clicked', props.clickWishlist)}
          <View style={styles.firstGroupWrapper2}>
            {props.wishlisted[0] === true ?
              <View>
                {props.clickWishlist === true ?
                  <TouchableOpacity onPress={props.AddWishlist}>
                    <View style={styles.firstGroupButtonShare}>
                      <Entypo name="heart-outlined" style={styles.firstGroupButtonIcon} />
                    </View>
                  </TouchableOpacity>:
                  <TouchableOpacity onPress={props.deleteWishlistInHome}>
                    <View style={styles.firstGroupButtonShare}>
                      <Entypo name="heart" style={styles.firstGroupButtonIcon} />
                    </View>
                  </TouchableOpacity>
                }
              </View>:
              <View>
                {props.clickWishlist === true ?
                  <TouchableOpacity onPress={props.deleteWishlistInHome}>
                    <View style={styles.firstGroupButtonShare}>
                      <Entypo name="heart" style={styles.firstGroupButtonIcon} />
                    </View>
                  </TouchableOpacity>:
                  <TouchableOpacity onPress={props.AddWishlist}>
                    <View style={styles.firstGroupButtonShare}>
                      <Entypo name="heart-outlined" style={styles.firstGroupButtonIcon} />
                    </View>
                  </TouchableOpacity>
                }
              </View>
            }
          </View>
      </View>
      <View style={styles.secondGroup}>
        {props.stillLoading ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <StarPlaceholder/>
          </View>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={props.star}
              starSize={14}
            />
            <View style={{paddingBottom: 5}}>
              <Text style={styles.reviewsLabel}>{props.star} reviews</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.borderedSparator}>
        {props.stillLoading ? (
          <DescriptionPlaceholder/>
        ) : (
          <View style={styles.borderedSparatorFirst}>
            <Text style={styles.borderedSparatorFirstTitle}>Description</Text>
            <View style={{width: (width - 20) / 1 }}>
              <Text style={styles.borderedSparatorFirstContent}>
                {props.descriptions}
              </Text>
            </View>
          </View>
        )}
        {props.seeMoreDetails ? (
          <View>
            <View style={styles.borderedSparatorSecond}>
              <Text style={styles.borderedSparatorSecondTitle}>Product Details</Text>
              <View style={{width: (width - 20) / 1 }}>
                <Text style={styles.borderedSparatorSecondPointedContent}>
                  {props.productDetails}
                </Text>
              </View>
            </View>
            <View style={styles.borderedSparatorThird}>
              <Text style={styles.borderedSparatorThirdTitle}>How to Use</Text>
              <View style={{width: (width -20) / 1 }}>
                <Text style={styles.borderedSparatorThirdContent}>
                  {props.guide}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View/>
        )}
        <View style={styles.seeMore}>
          <TouchableOpacity onPress={props.toggleMoreDetails}>
            <Text style={styles.seeMoreText}>{props.seeMoreDetails ? "See Less" : "See More"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderedSparator1}>
        <View style={styles.borderedSparatorFirst}>
          {props.stillLoading ? (
            <TitleOneLine/>
          ) : (
            <Text style={styles.borderedSparatorFirstTitle}>Reviews & Rating</Text>
          )}
          <View style={styles.ratingCard}>
            {props.stillLoading ? (
              <View style={styles.ratingCardContentWrapper}>
                <View>
                  <ReviewsAndRatings/>
                </View>
              </View>
            ) : (
              <View style={styles.ratingCardContentWrapper}>
                <View>
                  <Text style={styles.ratingReviewsText}>
                    <Text style={styles.ratingAmountReviewsText}>{props.star}</Text> reviews
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={props.star}
                      starSize={14}
                      // selectedStar={props.onStarRatingPress}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
          <View>
            {props.isReviewsExist ? (
              <FlatList
                data={props.dataCommentAndRating}
                renderItem={props.renderCommentAndRating}
                keyExtractor={(item, index) => JSON.stringify(index)}
              />
            ) : (
              <View style={{paddingTop: 10}}>
                <View style={{alignItems: 'center', padding: 10, backgroundColor: 'transparent', borderColor: '#e2e2e2', borderWidth:1}}>
                  <Text style={{textAlign: 'center', color: '#848484'}}>No reviews yet.</Text>
                  <Text style={{textAlign: 'center', color: '#848484'}}>be the first to review this product</Text>
                </View>
              </View>
            )}
          </View>
        </View>
        {props.isReviewsExist ? (
          <View style={styles.seeMore2}>
            <TouchableOpacity onPress={props.toggleMoreReviews} style={{paddingBottom: 10}}>
              <Text style={styles.seeMoreText}>{props.seeMoreReviews ? "See Less" : "See More"}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View/>
        )}
        <View style={styles.borderedSparator1}>
          <View style={styles.borderedSparatorFirst}>
            {props.stillLoading ? (
              <TitleOneLine style={{paddingBottom: 15}}/>
            ) : (
              <Text style={styles.borderedSparatorFirstTitle2}>Related Products</Text>
            )}
            {props.stillLoading ? (
              <View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={[1,2,3,4,5,6]}
                  renderItem={({item}) => (
                    <RelatedProductsPlaceholder/>
                  )}
                />
              </View>
            ) : (
              <View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={props.dateRelatedProducts}
                  renderItem={props.renderRelatedProducts}
                  keyExtractor={(item, index) => JSON.stringify(index)}
                />
              </View>
            )}
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
                <TouchableOpacity onPress={props.minQty}>
                  <View style={styles.minusButton}>
                    <Text style={styles.buttonFontSize}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.flexOnly33}>
                <Item regular style={styles.amountTextInput}>
                  <Input value={`${props.qty}`} onChangeText={props.onChangeQty}/>
                </Item>
              </View> 
              <View style={styles.flexOnly33}>
                <TouchableOpacity onPress={props.addQty}>
                  <View style={styles.plussButton}>
                    <Text style={styles.buttonFontSize}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.leftWrapper}>
            <View style={styles.flexDirectionCol}>
              <Text style={styles.footerTotalPriceText}>Rp. {props.totalPrice}</Text>
              <TouchableOpacity onPress={props.addToCart}>
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
    fontSize: 24,
    color: '#d11e48'
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
    justifyContent: 'center',
    paddingLeft: 10,
    color: '#F7009A'
  },
  borderedSparator: {
    borderTopWidth: 1,
    borderColor: '#e2e2e2'
  },
  borderedSparator1: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  },
  touchableOpacity: {
    backgroundColor: 'rgba(202, 202, 202, 0.73)',
    marginRight: 5,
    width: (width - 130) / 2,
    height: (height - 580) / 2,
    top: 170,
    alignSelf: 'flex-end',
    borderRadius: 8,
    alignItems:'center'
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
