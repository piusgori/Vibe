import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PeopleCard = () => {
    const image = 'https://cdn.pixabay.com/photo/2021/11/25/08/52/mountains-6822937__340.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}><Image style={styles.image} source={{ uri: image }}></Image></View>
        <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>MMU Football Club</Text>
            <Text style={styles.contentText}>647 Member</Text>
            <Text style={styles.contentText}>Upcoming: Game Talk</Text>
        </View>
      </View>
      <Text style={styles.rightText}>12:45 PM</Text>
    </View>
  )
}

export default PeopleCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 3,
        marginVertical: 3
    },
    contentContainer: {
        display: 'flex',
        padding: 8
    },
    contentText: {
        marginBottom: 6,
        color: 'grey'
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    imageContainer: {
        height: '95%',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginRight: 10,
        borderRadius: 10
    },
    rightText: {
        color: 'grey',
        margin: 8
    },
})