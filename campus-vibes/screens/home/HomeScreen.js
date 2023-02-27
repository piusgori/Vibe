import { View, StyleSheet, VirtualizedList } from 'react-native'
import React from 'react'
import SearchBar from '../../components/home/SearchBar';
import PostCard from '../../components/home/PostCard';
import { POSTS } from '../../utils/data';
import FloatingActionButton from '../../components/interface/FloatingActionButton';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    const addNavigatorHandler = () => {
        navigation.navigate('Add');
    }

  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <VirtualizedList
        style={{ marginTop: 10 }}
        data={POSTS}
        initialNumToRender={1}
        keyExtractor={(item) => item.id}
        getItemCount={(data)=> data.length}
        getItem={(data, index) => data[index]}
        renderItem={(itemData) => <PostCard post={itemData.item}></PostCard>}
      ></VirtualizedList>
      <FloatingActionButton onPress={addNavigatorHandler}><Ionicons name='add' size={30}></Ionicons></FloatingActionButton>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
        flex: 1
    }
})