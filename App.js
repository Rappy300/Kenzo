// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Dashboard from './Dashboard'; // Import the Dashboard component

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Render the Dashboard component */}
      <Dashboard />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Match the Dashboard's background color
  },
});
