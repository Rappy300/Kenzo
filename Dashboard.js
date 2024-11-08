import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark/Light mode state
  const [gameStats, setGameStats] = useState({
    level: 42,
    rank: "Diamond",
    winRate: "68%",
    matchesPlayed: 1337
  });

  const dynamicStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Add Level Badge above Profile Image */}
      <View style={styles.levelBadge}>
        <Text style={styles.levelText}>LVL {gameStats.level}</Text>
      </View>

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

      {/* Add Gaming Stats Section */}
      <View style={[styles.statsCard, dynamicStyles.profileCard]}>
        <Text style={[styles.statsTitle, dynamicStyles.userName]}>Gaming Stats</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Ionicons name="trophy-outline" size={24} color={isDarkMode ? '#bbb' : '#777'} />
            <Text style={[styles.statValue, dynamicStyles.socialText]}>{gameStats.rank}</Text>
            <Text style={[styles.statLabel, dynamicStyles.socialLabel]}>Rank</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="stats-chart-outline" size={24} color={isDarkMode ? '#bbb' : '#777'} />
            <Text style={[styles.statValue, dynamicStyles.socialText]}>{gameStats.winRate}</Text>
            <Text style={[styles.statLabel, dynamicStyles.socialLabel]}>Win Rate</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="game-controller-outline" size={24} color={isDarkMode ? '#bbb' : '#777'} />
            <Text style={[styles.statValue, dynamicStyles.socialText]}>{gameStats.matchesPlayed}</Text>
            <Text style={[styles.statLabel, dynamicStyles.socialLabel]}>Matches</Text>
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
  levelBadge: {
    position: 'absolute',
    top: 40,
    backgroundColor: '#DDD04F', // Minecraft gold color
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 0, // Square edges like Minecraft
    zIndex: 1,
    borderColor: '#8B8B27', // Darker gold border
    borderWidth: 3,
  },
  levelText: {
    color: '#5C4033', // Brown text
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsCard: {
    width: '90%',
    padding: 15,
    borderRadius: 0, // Square edges
    marginBottom: 20,
    borderWidth: 3,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  xpBar: {
    height: 10,
    backgroundColor: '#1B5E20', // Dark green
    borderWidth: 2,
    borderColor: '#2E7D32', // Lighter green border
    width: '90%',
    marginTop: 10,
  },
});

// Light Mode Styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#7CB6B6', // Minecraft sky blue
  },
  profileCard: {
    backgroundColor: '#C6C6C6', // Light stone color
    borderColor: '#565656', // Dark stone border
    borderWidth: 3,
  },
  userName: {
    color: '#2F4F4F', // Dark green-gray (like Minecraft text)
  },
  joinDate: {
    color: '#404040',
  },
  statusText: {
    color: '#2F4F4F',
  },
  infoText: {
    color: '#404040',
  },
  socialText: {
    color: '#4A7A25', // Minecraft green
  },
  socialLabel: {
    color: '#404040',
  },
  actionButton: {
    backgroundColor: '#7A7A7A', // Stone button color
    borderColor: '#565656',
    borderWidth: 2,
  },
  actionText: {
    color: '#FFFFFF',
  },
});

// Dark Mode Styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D1D', // Minecraft night
  },
  profileCard: {
    backgroundColor: '#565656', // Dark stone color
    borderColor: '#7A7A7A', // Light stone border
    borderWidth: 3,
  },
  userName: {
    color: '#55FF55', // Minecraft bright green
  },
  joinDate: {
    color: '#ABABAB',
  },
  statusText: {
    color: '#55FF55',
  },
  infoText: {
    color: '#ABABAB',
  },
  socialText: {
    color: '#55FF55',
  },
  socialLabel: {
    color: '#ABABAB',
  },
  actionButton: {
    backgroundColor: '#454545', // Darker stone
    borderColor: '#7A7A7A',
    borderWidth: 2,
  },
  actionText: {
    color: '#55FF55',
  },
});

// Optional: Add these Minecraft-specific colors for use throughout the app
const minecraftColors = {
  dirt: '#866043',
  grass: '#4A7A25',
  stone: '#7A7A7A',
  wood: '#725F48',
  leaves: '#4A7A25',
  gold: '#DDD04F',
  diamond: '#55FFFF',
  emerald: '#55FF55',
  redstone: '#FF5555',
  obsidian: '#1D1D1D',
  water: '#2389DA',
};

export default Dashboard;
