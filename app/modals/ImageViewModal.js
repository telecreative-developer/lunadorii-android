import React, { Component } from 'react'
import { Modal, StyleSheet, StatusBar, Image } from 'react-native'
import { Content, Item, Input, Icon, Button, View } from 'native-base'
import NavbarImageViewer from '../particles/NavbarImageViewer'
import ImageViewer from 'react-native-image-zoom-viewer'

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
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <ImageViewer imageUrls={props.images}/>
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