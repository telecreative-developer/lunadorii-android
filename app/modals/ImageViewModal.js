import React, { Component } from 'react'
import { Modal, StyleSheet, StatusBar, Image } from 'react-native'
import { Content, Item, Input, Icon, Button, View } from 'native-base'
import NavbarModal from '../particles/NavbarModal'
import ImageViewer from 'react-native-image-zoom-viewer'

const ImageViewModal = (props) => (
  <Modal
    animationType="fade"
    transparent={false}
    visible={props.modalVisible}
    onRequestClose={props.actionIcon}>
    <NavbarModal
      navbarIcon="close"
      actionIcon={props.actionIcon} />
    <StatusBar
      backgroundColor="#f65857"
      barStyle="light-content"
    />
    <View style={styles.style}>
      <Image source={{ uri: props.image }} style={{resizeMode: 'contain', height: '100%', width: '100%'}}/>
      {/* <ImageViewer imageUrls={[{ url: props.image }]} renderIndicator={(curentIndex) => null} /> */}
    </View>
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