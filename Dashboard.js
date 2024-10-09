import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark/Light mode state

  // Styles based on the theme mode (dark or light)
  const dynamicStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Profile Card Section */}
      <View style={[styles.profileCard, dynamicStyles.profileCard]}>
        <Image
          source={require('./Profile/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={[styles.userName, dynamicStyles.userName]}>OCIONES RALPH R.</Text>
        <Text style={[styles.joinDate, dynamicStyles.joinDate]}>BSIT - 3rd Yr </Text>
        <Text style={[styles.joinDate, dynamicStyles.joinDate]}>USTP - CDO </Text>
        <Text style={[styles.joinDate, dynamicStyles.joinDate]}>Status : Single</Text>
        <Text style={[styles.joinDate, dynamicStyles.joinDate]}>Followers : 1M  Following : 100K</Text>
        
      </View>

      {/* Theme Mode Toggle */}
      <View style={styles.statusContainer}>
        <Text style={[styles.statusText, dynamicStyles.statusText]}>
          Mode: {isDarkMode ? 'Dark' : 'Light'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

// Shared Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileCard: {
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
  },
  joinDate: {
    fontSize: 14,
    marginTop: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
});

// Light Mode Styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
  },
  profileCard: {
    backgroundColor: '#fff',
  },
  userName: {
    color: '#333',
  },
  joinDate: {
    color: '#777',
  },
  statusText: {
    color: '#333',
  },
});

// Dark Mode Styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
  },
  profileCard: {
    backgroundColor: '#2c2c2e',
  },
  userName: {
    color: '#fff',
  },
  joinDate: {
    color: '#bbb',
  },
  statusText: {
    color: '#fff',
  },
});

export default Dashboard;
