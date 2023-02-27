import { View, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../services/auth-context'

const BottomProfile = () => {
    const { profile } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: profile.profile }}></Image>
    </View>
  )
}

export default BottomProfile;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        height: 30,
        width: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    }
})