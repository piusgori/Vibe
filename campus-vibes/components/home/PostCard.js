import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import { Octicons, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import * as NumberFormat from 'easy-number-formatter';
import TimeAgo from 'react-native-timeago';

const PostCard = ({ post }) => {

    const fLikes = NumberFormat.formatNumber(post.likes);
    const fDislikes = NumberFormat.formatNumber(post.dislikes);
    const fComments = NumberFormat.formatNumber(post.comments);
    const postTime = new Date(post.time).toISOString();

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.title}>{post.title}</Text>
            <TimeAgo style={styles.time} time={postTime}></TimeAgo>
        </View>
        <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={{ uri: post.userProfile }}></Image>
            </View>
            <View style={styles.profileField}>
                <Text style={styles.profileTitle}>{post.userName}</Text>
                <Text style={styles.profileField}>{post.userField}</Text>
            </View>
        </View>
        <Text style={styles.content}>{post.post}</Text>
        {post.image && <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: post.image }}></Image>
        </View>}
      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
            <Octicons style={styles.icon} name='thumbsup' color='grey' size={20}></Octicons>
            <Text style={styles.iconText}>{fLikes}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Octicons style={styles.icon} name='thumbsdown' color='grey' size={20}></Octicons>
            <Text style={styles.iconText}>{fDislikes}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Fontisto style={styles.icon} name='comment' color='grey' size={20}></Fontisto>
            <Text style={styles.iconText}>{fComments}</Text>
        </View>
        <View style={styles.iconContainer}>
            <SimpleLineIcons style={styles.icon} name='share' color='grey' size={20}></SimpleLineIcons>
        </View>
      </View>
    </View>
  )
}

export default PostCard;

const styles = StyleSheet.create({
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        width: '100%',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 12,
        padding: 16,
        backgroundColor: 'white',
        elevation: 3,
    },
    content: {
        marginBottom: 10,
    },
    icon: {
        marginRight: 6
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 6
    },
    iconText: {
        color: 'grey'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: 10
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileField: {
        color: 'grey'
    },
    profileImage: {
        height: '100%',
        width: '100%'
    },
    profileImageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    profileTitle: {
        fontSize: 18,
        marginBottom: 5
    },
    time: {
        color: 'grey'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    topContainer: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});