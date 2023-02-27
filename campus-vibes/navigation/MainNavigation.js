import React, { useContext } from 'react'
import { AuthContext } from '../services/auth-context'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const MainNavigation = () => {
    const { isAuth } = useContext(AuthContext);
  return (
    <NavigationContainer>
        {isAuth ? <HomeNavigation></HomeNavigation> : <AuthNavigation></AuthNavigation>}
    </NavigationContainer>
  )
}

export default MainNavigation