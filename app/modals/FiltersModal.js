import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { Content, Item, Input, Icon, Button } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import NavbarModal from '../particles/NavbarModal'

const FiltersModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarTitle="Filters"
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    <Content style={styles.container}>
      <Text style={styles.txtLabel}>Category</Text>
      <Item regular style={styles.item}>
        {/* <Input placeholder='Select category below' placeholderTextColor="#ccc" onChangeText={props.handleCategory} value={props.searchCategoryValue}/> */}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={props.dataButtonSelectedCategory}
          renderItem={props.buttonSelectedCategory}
        />
        <TouchableOpacity onPress={props.clearCategory}>
          <EvilIcons name="close" style={styles.searchIcon} />
        </TouchableOpacity>
      </Item>
      <View style={styles.flexStart}>
        {/* <View style={styles.buttonWrapper}>
          <Button bordered danger style={styles.mediumButton}>
            <Text style={styles.buttonText}>Makeup</Text>
          </Button>
          <Button bordered danger style={styles.mediumButton}>
            <Text style={styles.buttonText}>Nails</Text>
          </Button>
          <Button bordered danger style={styles.mediumButton}>
            <Text style={styles.buttonText}>Skincare</Text>
          </Button>
        </View> */}
        <FlatList
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          numColumns={3}
          data={props.dataButtonCategory1st}
          renderItem={props.buttonCategory1st}
        />
      </View>
      {/* <Text style={styles.txtLabel}>Brands</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.dataButtonBrands}
        renderItem={props.buttonBrads}
      /> */}
      {/* <Item regular style={styles.item}>
        <Input placeholder='Select brand' placeholderTextColor="#ccc" onChangeText={props.handleBrand} />
        <Icon type='Entypo' name="chevron-small-down" style={{color: '#ccc'}}/>
      </Item> */}
      <Text style={styles.txtLabel}>Price</Text>
      <View style={styles.inputWrapper}>
        <Item regular style={styles.inputMin}>
          <Input placeholder='Min' placeholderTextColor="#ccc" onChangeText={props.handleMinPrice} keyboardType={'numeric'} maxLength={7}/>
        </Item>
        <Text style={styles.sparator}>-</Text>
        <Item regular style={styles.inputMax}>
          <Input placeholder='Max' placeholderTextColor="#ccc" onChangeText={props.handleMaxPrice} keyboardType={'numeric'} maxLength={7}/>
        </Item>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile} onPress={props.handleFilterSearch} >
      <Text style={styles.buttonSaveTextStyleEditProfile}>Search</Text>
    </Button>
  </Modal>
)

export default FiltersModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:10
  },
  searchIcon: {
    fontSize: 26,
    paddingRight: 10
  },
  sparator: {
    fontSize: 36,
    color: '#ccc',
    alignSelf: 'center',
    paddingBottom: 15
  },
  inputMin: {
    width: 130,
    height: 40,
    marginBottom: 10,
    borderRadius: 5
  },
  inputMax: {
    width: 130,
    height: 40,
    marginBottom: 10,
    borderRadius: 5
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mediumButton: {
    height: 30,
    width: 80,
    justifyContent: 'center',
    borderColor: '#F7009A',
    borderRadius: 5,
    margin: 5
  },
  flexStart: {
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  largeButton: {
    height: 30,
    width: 125,
    justifyContent: 'center',
    borderColor: '#F7009A',
    borderRadius: 5,
    margin: 5
  },
  buttonText: {
    color: '#F7009A'
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  item: {
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
  buttonSaveStyleEditProfile: {
    height: 50,
    backgroundColor: '#d11e48'
  },
  buttonSaveTextStyleEditProfile: {
    color: '#fff',
    fontSize: 18
  }
})