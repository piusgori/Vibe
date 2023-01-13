import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useReducer } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DataCard from '../components/DataCard';
import { POSTS } from '../data';

const reducer = (state, action) => {
    switch (action.type) {
        case 'Following': 
            return { ...state, option: 'Following' }
        case "Popular": 
            return { ...state, option: "Popular" }
        case "Trending":
            return { ...state, option: "Trending" }
        case "changeTag":
            return { ...state, tag: action.payload, displayedPosts: action.payload === 0 ? POSTS : POSTS.filter(each => each.tags.includes(TAGS[action.payload])) }
        default: 
            return { ...state }
    }
}

const TAGS = ['All', 'News', 'Celebrity', 'Comedy', 'Reality']

const PublicScreen = () => {

    const [state, dispatch] = useReducer(reducer, { option: 'Following', tag: 0, displayedPosts: POSTS });

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Ionicons name='search' color='grey' size={20} style={styles.searchIcon}></Ionicons>
            <TextInput placeholder='Search' style={styles.searchInput}></TextInput>
        </View>
        <View style={styles.options}>
            <Text onPress={() => dispatch({ type: 'Following' })} style={[styles.optionText, { color: state.option !== 'Following' ? "grey" : "white" }]}>Following</Text>
            <Text onPress={() => dispatch({ type: 'Popular' })} style={[styles.optionText, { color: state.option !== 'Popular' ? "grey" : "white" }]}>Popular</Text>
            <Text onPress={() => dispatch({ type: 'Trending' })} style={[styles.optionText, { color: state.option !== 'Trending' ? "grey" : "white" }]}>Trending</Text>
        </View>
        <View style={styles.tagsContainer}>
            {TAGS.map((tag, index) => <TouchableOpacity onPress={() => dispatch({ type: 'changeTag', payload: index })} key={index}><View style={[styles.tag, { backgroundColor: state.tag === index ? "grey" : "black" }]}><Text>{tag}</Text></View></TouchableOpacity>)}
        </View>
        <ScrollView style={styles.dataContainer} showsVerticalScrollIndicator={false}>
            {state.displayedPosts.map((eachPost, index) => <DataCard key={index} postData={eachPost}></DataCard>)}
        </ScrollView>
    </View>
  )
}

export default PublicScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 44,
        alignItems: 'center',
    },
    dataContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
    options: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%'
    },
    optionText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    searchContainer: {
        width: '90%',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    searchIcon: {
        paddingRight: 10
    },
    searchInput: {
        flex: 1,
        paddingLeft: 0,
    },
    tag: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        marginHorizontal: 5,
    },
    tagsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        marginBottom: 20
    }
})