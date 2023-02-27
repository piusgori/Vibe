import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClubsScreen from './ClubsScreen';
import StudyGroupsScreen from './StudyGroupsScreen';
import FloatingActionButton from '../../components/interface/FloatingActionButton';
import { Ionicons } from '@expo/vector-icons'

const Tab = createMaterialTopTabNavigator();

const PeopleScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name='Clubs' component={ClubsScreen}></Tab.Screen>
        <Tab.Screen name='Study Groups' component={StudyGroupsScreen}></Tab.Screen>
      </Tab.Navigator>
      <FloatingActionButton><Ionicons name='add' size={30}></Ionicons></FloatingActionButton>
    </>
  )
}

export default PeopleScreen