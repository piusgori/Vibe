import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import PeopleScreen from '../screens/home/PeopleScreen';
import TvScreen from '../screens/home/TvScreen';
import MessagingScreen from '../screens/home/MessagingScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
import AddScreen from '../screens/resource/AddScreen';
import { useNavigation } from '@react-navigation/native';
import { Foundation, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomProfile from '../components/interface/BottomProfile';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeBottomNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <BottomTab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => <Foundation name='home' color={color} size={size}></Foundation>
            }}></BottomTab.Screen>
            <BottomTab.Screen name='People' component={PeopleScreen} options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='people-outline' color={color} size={size}></Ionicons>
            }}></BottomTab.Screen>
            <BottomTab.Screen name='Tv' component={TvScreen} options={{
                tabBarIcon: ({ color, size }) => <Feather name='tv' color={color} size={size}></Feather>
            }}></BottomTab.Screen>
            <BottomTab.Screen name='Messageing' component={MessagingScreen} options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='message-processing-outline' color={color} size={size}></MaterialCommunityIcons>
            }}></BottomTab.Screen>
            <BottomTab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon: () => <BottomProfile></BottomProfile>
            }}></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}

const HomeNavigation = () => {
    const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{
        headerTitle: 'Multimedia University',
        headerRight: () => <Ionicons name='add' onPress={() => {navigation.navigate('Add')}} size={30}></Ionicons>
    }}>
        <Stack.Screen name='Main' component={HomeBottomNavigator}></Stack.Screen>
        <Stack.Screen name='Add' component={AddScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigation;