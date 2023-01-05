import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const ClubsScreen = () => {

    const { width } = Dimensions.get('window');

  return (
    <View>
      <LinearGradient colors={['white', 'grey']} style={{ width }}></LinearGradient>
    </View>
  )
}

export default ClubsScreen;

const styles = StyleSheet.create({

})