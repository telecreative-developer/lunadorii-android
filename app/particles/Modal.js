import React from 'react'
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Content, Radio, Button, Item, Input, CheckBox, Form, Label, Icon } from 'native-base'
import Navbar from '../particles/Navbar'
import BenefitCosmetics from '../particles/BenefitCosmetics'

export const ModalCategory = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content style={styles.content}>
      <View style={styles.viewWrap}>
        <View style={styles.flexOnly8}>
          <Text style={styles.txtRadio}>Discussion with Client</Text>
        </View>
        <View style={styles.flexOnly2}>
          <Radio selected={false} style={styles.radio}/>
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend}><Text style={styles.txtBtnSend}>Select Category</Text></Button>
  </Modal>
)

export const ModalChangePassword = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content style={styles.content}>  
      <View style={styles.viewInputPassword}>
        <Text style={styles.txtLabel}>Old Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter Current Password' placeholderTextColor="#ccc" />
        </Item>
        <Text style={styles.txtLabel}>New Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Password' placeholderTextColor="#ccc" />
        </Item>
        <Text style={styles.txtLabel}>Confirm Password</Text>
        <Item regular style={styles.item}>
          <Input placeholder='Enter New Password' placeholderTextColor="#ccc" />
        </Item>
      </View>
    </Content>
    <Button full style={styles.btnSend}><Text style={styles.txtBtnSend}>Change Password</Text></Button>
  </Modal>
)

export const ModalNotification = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
  >
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content>
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Message</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima pesan eksklusif dan info terbaru khusus untuk anda.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>      
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Pesanan dan Logistik</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima info mengenai pesanan dana.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Notifikasi Sistem</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima info terbaru mengenai whislist dan troli belanja anda.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.txtLabel}>Chat</Text>
        <View style={styles.viewNotif}>
          <View>
            <Text>Terima pesan in-app di handphone anda.</Text>
          </View>
          <View>
            <CheckBox color="#D50039" checked/>
          </View>
        </View>
      </View>
    </Content>
    <Button full style={styles.btnSend}>
      <Text style={styles.txtBtnSend}>Save</Text>
    </Button>
  </Modal>
)

export const ModalEditQuantity = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
  >
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content style={{ margin: 10 }}>
      <View style={styles.Card}>
        <View style={styles.contentCard}>
          <Image source={{uri : 'https://cdns.klimg.com/vemale.com/headline/650x325/2015/09/7-cara-kreatif-menyimpan-menata-kosmetik-dan-alat-kecantikan-anda.jpg'}} style={styles.image}/>
          <View style={styles.wrapLeft}>
            <Text style={styles.txtHeader}>Benefit Cosmetics</Text>
            <Text style={styles.txtDetail}>Face Primer Mini</Text>
            <Text style={styles.txtBlank}></Text>
            <Text style={styles.txtDetail}>Quantity: <Text style={styles.txtpcs}>1 pcs</Text></Text>
          </View>
          <View style={styles.wrapRight}>
            <Text style={styles.txtHeader}>Rp 20,000</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, paddingTop: 10}}>
        <Button style={{width: 35, height: 35, borderRadius: 20, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center', marginRight: 5}}>
          <Text style={{fontSize: 16}}>-</Text>
        </Button>
        <Item regular style={{borderRadius: 10, width: 50, height: 35}}>
          <Input value="1"/>
        </Item>
        <Button style={{width: 35, height: 35, borderRadius: 20, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center', marginLeft: 5}}>
          <Text style={{fontSize: 16}}>+</Text>
        </Button>
      </View>
    </Content>
    <Button full style={styles.buttonSaveStyle}>
      <Text style={styles.buttonSaveTextStyle}>Save</Text>
    </Button>
  </Modal>
)

export const ModalEditProfile = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.modalVisible}
  >
    <Navbar
      navbarTitle={props.navbarTitle}
      navbarIcon={props.navbarIcon}
      actionIcon = {props.actionIcon}
    />
    <Content style={{ margin: 10 }}>
      <View>
        <Image source={{uri: 'https://telecreativenow.com/images/team/Rendi.png'}} style={styles.imageFrame}/>
        <View style={styles.takePhotoButton}>
          <TouchableOpacity>
            <Icon name='camera' style={{alignSelf: 'center',fontSize: 20}}/>
          </TouchableOpacity>
        </View>
      </View>
      <Form style={{paddingRight: 15,paddingLeft: 15, paddingBottom: 15}}>
        <Label style={styles.labels}>First Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Muhammad Isa" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Last Name</Label>
        <Item regular style={styles.items}>
          <Input placeholder="Wijaya Kusuma" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Email</Label>
        <Item regular style={styles.items}>
          <Input placeholder="muhammadisawk@gmail.com" placeholderTextColor="#CDCDCD"/>
        </Item>
        <Label style={styles.labels}>Birth Date</Label>
        <Item regular style={styles.items}>
          <Input placeholder="17/11/1999" placeholderTextColor="#CDCDCD"/>
        </Item>
      </Form>
    </Content>
    <Button full style={styles.buttonSaveStyleEditProfile}>
      <Text style={styles.buttonSaveTextStyleEditProfile}>Save</Text>
    </Button>
  </Modal>
)

const styles = StyleSheet.create({
  content:{
    marginTop: 20
  },
  viewWrap:{
    flexDirection: 'row', 
    paddingBottom: 10
  },
  flexOnly8:{
    flex: 0.8
  },
  flexOnly2:{
    flex: 0.2
  },
  viewInputPassword:{
    paddingLeft: 20, 
    paddingRight: 20
  },
  txtLabel:{
    fontSize: 16, 
    fontWeight: 'bold', 
    paddingBottom: 10
  },
  item:{
    marginBottom: 10
  },
  radio:{
    alignSelf: 'flex-end', 
    paddingRight: 20
  },
  txtRadio:{
    paddingLeft: 20, 
    fontSize: 16
  },
  btnSend:{
    backgroundColor: '#D50039'
  },
  txtBtnSend:{
    color: "#fff", 
    fontSize: 16
  },
  viewNotif:{
    flexDirection: "row",
    justifyContent: 'space-between',
    borderColor: "#fff"
  },

  Card:{
    borderRadius:1,
    borderColor:'#E2E2E2',
    borderWidth:1,
    marginBottom:5
  },
  contentCard:{
    margin:10,
    flexDirection:'row',
    flex:1,
  },
  image:{
    width:75,
    height:75,
    marginRight:10
  },
  wrapLeft:{
    flex:1,
  },
  wrapRight:{
    alignItems:'flex-end'
  },
  txtHeader:{
    fontSize:16,
    fontWeight:'bold',
  },
  txtDetail:{
    fontSize:14,
  },
  txtBlank:{
    marginVertical:5
  },
  txtpcs:{
    fontSize:14,
    fontWeight:'bold'
  },
  buttonSaveStyle:{
    height: 50, 
    backgroundColor: '#AEAEAE'
  },
  buttonSaveTextStyle:{
    color: '#fff',
    fontSize: 20
  },
  buttonSaveStyleEditProfile:{
    height: 50, 
    backgroundColor: '#D50039'
  },
  buttonSaveTextStyleEditProfile:{
    color: '#fff',
    fontSize: 20
  },
  labels: {
    fontSize: 16, 
    fontFamily: 'Avenir Next',
    fontWeight: 'bold', 
    paddingBottom: 10,
    paddingTop: 10
  },
  items:{
    width: '100%', 
    borderRadius: 5, 
    height: 40
  },
  imageFrame:{
    marginTop: 10,
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    alignSelf: 'center'
  },
  takePhotoButton:{
    backgroundColor: '#bdc3c7',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight:5,
    width: 25,
    height: 20,
    right: 120,
    bottom: 75
  }
})