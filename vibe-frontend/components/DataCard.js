import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as NumberFormat from 'easy-number-formatter';
const VerifiedIcon = require('../assets/icons/verified.png');

const DataCard = ({ postData }) => {
    const { post, image, location, views, tags, profile } = postData;
    const formattedNumber = NumberFormat.formatNumber(views);

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image}></Image>
            <View style={styles.profileContainer}>
                <Image source={{ uri: profile.profile }} style={styles.profileImage}></Image>
                <View style={styles.profileText}><Text>{profile.name}</Text></View>
                {profile.verified && <Image source={VerifiedIcon} style={styles.profileVerified}></Image>}
            </View>
        </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsTop}>
            <View style={styles.innerDetailsTop}>
                <FontAwesome name='map-marker' size={16} style={styles.innerDetailsIcon}></FontAwesome>
                <Text>{location}</Text>
            </View>
            <View style={styles.innerDetailsTop}>
                <Ionicons name='people-outline' size={16} style={styles.innerDetailsIcon}></Ionicons>
                <Text>{formattedNumber}</Text>
            </View>
        </View>
        <Text>{post}</Text>
        <View style={styles.tagsContainer}>
            {tags.map((each, index) => <View key={index} style={styles.tag}><Text>{each}</Text></View>)}
        </View>
      </View>
    </View>
  )
}

export default DataCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 12,
        overflow: 'hidden',
        flexDirection: 'row',
        marginBottom: 10
    },
    detailsContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    detailsTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    innerDetailsTop: {
        flexDirection: 'row'
    },
    innerDetailsIcon: {
        marginRight: 6
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    imageContainer: {
        height: '100%',
        width: '40%',
        overflow: 'hidden',
    },
    profileContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 4,
    },
    profileText: {
        overflow: 'hidden',
        flex: 1
    },
    profileVerified: {
        height: 20,
        width: 20,
        marginLeft: 4
    },
    tag: {
        paddingVertical: 2,
        paddingHorizontal: 12,
        marginRight: 6,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 12,
        marginVertical: 2,
    },
    tagsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
})