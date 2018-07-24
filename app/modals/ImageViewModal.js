import React, { Component } from 'react'
import { Modal, StyleSheet, StatusBar, Image } from 'react-native'
import { Content, Item, Input, Icon, Button, View } from 'native-base'
import NavbarImageViewer from '../particles/NavbarImageViewer'
// import ImageViewer from 'react-native-image-zoom-viewer'
// import ImageViewer from '@dwqs/react-native-image-viewer'
import Gallery from 'react-native-image-gallery';

const ImageViewModal = (props) => (
  <Modal
    animationType="fade"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarImageViewer
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <StatusBar
      backgroundColor="#d11e48"
      barStyle="light-content"
    />
    {/* <ImageViewer imageUrls={[
      'https://facebook.github.io/react/logo-og.png',
      'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg',
      'http://img.sc115.com/uploads1/sc/jpgs/1508/apic22412_sc115.com.jpg',
      'http://h.hiphotos.baidu.com/zhidao/pic/item/0df431adcbef7609bca7d58a2adda3cc7cd99e73.jpg'
    ]}/> */}
    <Gallery
      style={{ backgroundColor: 'black' }}
      images={props.images}
    />
  </Modal>
)

export default ImageViewModal

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})