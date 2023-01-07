import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './navigation.js/Navigator';
import PublicScreen from './screens/PublicScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator></Navigator>
    </>
  );
}

