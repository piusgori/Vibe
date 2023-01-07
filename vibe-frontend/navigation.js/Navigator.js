import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PublicScreen from '../screens/PublicScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommercialScreen from '../screens/CommercialScreen';
import { NavigationContainer } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-safearea-height';
import PrivateScreen from '../screens/PrivateScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <View style={styles.container(getStatusBarHeight())}>
            <Tab.Navigator>
                <Tab.Screen name='Public' component={PublicScreen}></Tab.Screen>
                <Tab.Screen name='Commercial' component={CommercialScreen}></Tab.Screen>
                <Tab.Screen name='Private' component={PrivateScreen}></Tab.Screen>
            </Tab.Navigator>
        </View>
    )
}

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{ headerShown: false }} component={TopTabNavigation}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;

const styles = StyleSheet.create({
    container: (height) => ({
        flex: 1,
        marginTop: height
    })
})