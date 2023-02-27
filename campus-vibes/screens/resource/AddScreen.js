import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useContext } from 'react';
import { Ionicons, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Button, Divider } from '@react-native-material/core';
import { AuthContext } from '../../services/auth-context';
import { useNavigation } from '@react-navigation/native';

const AddScreen = () => {
    
    const navigation = useNavigation();
    const { profile } = useContext(AuthContext);

    const goBackHandler = () => {
        navigation.goBack();
    }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeft}>
            <Ionicons name='person-circle' style={styles.topIcon} size={30}></Ionicons>
            <Text style={styles.topTitle}>Lets talk MMU</Text>
        </View>
        <Entypo onPress={goBackHandler} name='squared-cross' size={30}></Entypo>
      </View>
      <View style={styles.postContainer}>
        <Divider color='black'></Divider>
        <View style={styles.middleTop}>
            <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: profile.profile }}></Image></View>
            <Text style={styles.topTitle}>Topic</Text>
        </View>
        <TextInput style={styles.input} placeholder='Compose your message...'></TextInput>
        <Divider color='black'></Divider>
      </View>
      <View style={styles.lowerTopContainer}>
        <View style={styles.ruleContainer}>
            <View style={styles.ruleList}></View>
            <Text style={styles.ruleText}>Strictly adhere to MMU community guidelines and keep your language in line with the school rules.</Text>
        </View>
        <View style={styles.ruleContainer}>
            <View style={styles.ruleList}></View>
            <Text style={styles.ruleText}>Strictly adhere to MMU community guidelines and keep your language in line with the school rules.</Text>
        </View>
        <Text style={styles.lowerTopText}>@multimedia university of kenya</Text>
        <Divider color='black'></Divider>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
            <FontAwesome name='picture-o' size={25} style={styles.icon}></FontAwesome>
            <MaterialCommunityIcons name='poll' size={25} style={styles.icon}></MaterialCommunityIcons>
            <MaterialIcons name='gif' size={25} style={styles.icon}></MaterialIcons>
        </View>
        <Button onPress={goBackHandler} variant='contained' title='Post'></Button>
      </View>
    </View>
  )
}

export default AddScreen;

const styles = StyleSheet.create({
    bottomContainer: {
        paddingBottom: 14,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: { 
        marginRight: 30,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    imageContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginRight: 10,
    },
    input: {
        flex: 1,
        marginBottom: 20
    },
    lowerTopContainer: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    lowerTopText: {
        marginVertical: 16,
        textAlign: 'center'
    },
    middleTop: {
        width: '100%',
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    postContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        flex: 1
    },
    ruleContainer: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ruleList: {
        height: 4,
        width: 4,
        borderRadius: 2,
        backgroundColor: 'grey',
        marginRight: 10
    },
    ruleText: {
        color: 'grey'
    },
    topIcon: {
        marginRight: 10,
    },
    topContainer: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    topTitle: {
        fontWeight: 'bold'
    },
})