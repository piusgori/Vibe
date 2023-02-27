import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const FloatingActionButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>{children}</TouchableOpacity>
  )
}

export default FloatingActionButton;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'blue',
        padding: 10,
        position: 'absolute',
        bottom: 10,
        right: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})