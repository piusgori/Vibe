import { View, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Button, TextInput } from '@react-native-material/core';
import { AuthContext } from '../../services/auth-context';
import { PROFILE } from '../../utils/data';

const LoginScreen = () => {
    const { setIsAuth, setProfile } = useContext(AuthContext);

    const loginHandler = () => {
        setProfile(PROFILE);
        setIsAuth(true);
    }

  return (
    <View style={styles.container}>
        <TextInput variant='outlined' style={styles.input} placeholder='Registration Number'></TextInput>
        <TextInput variant='outlined' style={styles.input} placeholder='Password'></TextInput>
      <Button onPress={loginHandler} style={styles.button} title='Login'></Button>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginTop: 10,
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        marginVertical: 10,
        width: '100%'
    }
});