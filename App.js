// App.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Dashboard from './Dashboard'; // Import the Dashboard component

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor: isDarkMode ? '#1a1a1a' : '#f0f4f8' }
    ]}>
      {/* Render the Dashboard component */}
      <Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
