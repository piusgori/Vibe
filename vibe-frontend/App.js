import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './navigation/Main';
import Navigation from './navigation/Navigation';
import AppContextProvider from './services/app-context';
import AuthContextProvider from './services/auth-context';
import InterfaceContextProvider from './services/interface-context';



export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <AppContextProvider>
          <InterfaceContextProvider>
            <Main></Main>
          </InterfaceContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
