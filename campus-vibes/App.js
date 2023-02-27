import { StatusBar } from 'expo-status-bar';
import MainNavigation from './navigation/MainNavigation';
import AppContextProvider from './services/app-context';
import AuthContextProvider from './services/auth-context';
import InterfaceContextProvider from './services/interface-context';

export default function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <InterfaceContextProvider>
          <StatusBar style="auto" />
          <MainNavigation></MainNavigation>
        </InterfaceContextProvider>
      </AppContextProvider>
    </AuthContextProvider>
  );
}

