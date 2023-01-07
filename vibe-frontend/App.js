import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ClubsScreen from './screens/ClubsScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ClubsScreen></ClubsScreen>
    </>
  );
}

