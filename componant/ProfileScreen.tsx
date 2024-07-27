import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles';

const ProfileScreen = ():React.JSX.Element => {
    const profileImage = require("../assets/lo.jpg");
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage}/>
            <Text style={styles.profileName}>Narongrit Prommadaj</Text>
        </View>
    </View>
  )
}

export default ProfileScreen
