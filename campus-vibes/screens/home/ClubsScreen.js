import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PeopleCard from '../../components/people/PeopleCard'

const ClubsScreen = () => {
  return (
    <View style={styles.container}>
      <PeopleCard></PeopleCard>
      <PeopleCard></PeopleCard>
      <PeopleCard></PeopleCard>
      <PeopleCard></PeopleCard>
      <PeopleCard></PeopleCard>
      <PeopleCard></PeopleCard>
      <PeopleCard></PeopleCard>
    </View>
  )
}

export default ClubsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 5
    }
})