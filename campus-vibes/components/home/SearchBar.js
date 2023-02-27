import { View, StyleSheet, Image, TextInput } from 'react-native'
import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../services/auth-context';

const SearchBar = () => {
    const { profile } = useContext(AuthContext);
    
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: profile.profile }}></Image>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Type to search...' style={styles.input}></TextInput>
        <View style={styles.iconContainer}>
            <Ionicons name='search' size={25}></Ionicons>
        </View>
      </View>
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        height: '100%',
        padding: 6,
        backgroundColor: '#F7F7F7',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 25,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    input: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        padding: 6,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
    }
})