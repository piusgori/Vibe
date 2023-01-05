import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClubsScreen from '../screens/ClubsScreen';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <ClubsScreen></ClubsScreen>
    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name='Clubs' component={ClubsScreen}></Stack.Screen>
    //     </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default Main;