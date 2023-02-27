import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthNavigation