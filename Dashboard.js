import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark/Light mode state


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
        <View style={styles.infoContainer}>
          <Ionicons name="school-outline" size={18} color={isDarkMode ? '#bbb' : '#777'} />
          <Text style={[styles.infoText, dynamicStyles.infoText]}>BSIT - 3rd Yr</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons name="location-outline" size={18} color={isDarkMode ? '#bbb' : '#777'} />
          <Text style={[styles.infoText, dynamicStyles.infoText]}>USTP - CDO</Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons name="heart-outline" size={18} color={isDarkMode ? '#bbb' : '#777'} />
          <Text style={[styles.infoText, dynamicStyles.infoText]}>Status: Single</Text>
        </View>
        <View style={styles.socialContainer}>
          <View style={styles.socialItem}>
            <Ionicons name="people-outline" size={24} color={isDarkMode ? '#bbb' : '#777'} />
            <Text style={[styles.socialText, dynamicStyles.socialText]}>1M</Text>
            <Text style={[styles.socialLabel, dynamicStyles.socialLabel]}>Followers</Text>
          </View>
          <View style={styles.socialItem}>
            <Ionicons name="person-add-outline" size={24} color={isDarkMode ? '#bbb' : '#777'} />
            <Text style={[styles.socialText, dynamicStyles.socialText]}>100K</Text>
            <Text style={[styles.socialLabel, dynamicStyles.socialLabel]}>Following</Text>
          </View>
        </View>
      </View>

      {/* Theme Mode Toggle */}
      <View style={styles.statusContainer}>
        <Ionicons 
          name={isDarkMode ? "moon" : "sunny"} 
          size={24} 
          color={isDarkMode ? '#fff' : '#333'}
        />
        <Text style={[styles.statusText, dynamicStyles.statusText]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={[styles.actionButton, dynamicStyles.actionButton]}>
          <Ionicons name="pencil-outline" size={24} color={isDarkMode ? '#fff' : '#333'} />
          <Text style={[styles.actionText, dynamicStyles.actionText]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, dynamicStyles.actionButton]}>
          <Ionicons name="settings-outline" size={24} color={isDarkMode ? '#fff' : '#333'} />
          <Text style={[styles.actionText, dynamicStyles.actionText]}>Settings</Text>
        </TouchableOpacity>
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  },
  socialItem: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  socialLabel: {
    fontSize: 12,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
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
  infoText: {
    color: '#777',
  },
  socialText: {
    color: '#333',
  },
  socialLabel: {
    color: '#777',
  },
  actionButton: {
    backgroundColor: '#f0f0f0',
  },
  actionText: {
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
  infoText: {
    color: '#bbb',
  },
  socialText: {
    color: '#fff',
  },
  socialLabel: {
    color: '#bbb',
  },
  actionButton: {
    backgroundColor: '#3a3a3c',
  },
  actionText: {
    color: '#fff',
  },
});

export default Dashboard;
