import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles';

const ProfileScreen = ():React.JSX.Element => {
    const [profileImage,setImage] = useState(require("../assets/lo.jpg"));
    const [name,setName] = useState("Narongrit Prommadaj");
    const handleChangeName = ()=>{
        setName(name == "Narongrit Prommadaj" ? "Avada Kedubbla" : "Narongrit Prommadaj");
    }
    const handleChangeImahe = ()=>{
        //setImage(require("../assets/ma.jpg"));
        setImage(profileImage == require("../assets/lo.jpg") ? require("../assets/ma.jpg"): require("../assets/lo.jpg"));
    }
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage}/>
            <View>
                <Text style={styles.profileName}>{name}</Text>
                <Button title="Click Me" onPress={handleChangeName}/>
                <Text></Text>
                <Button title="Click Me" onPress={handleChangeImahe}/>
            </View>
        </View>
    </View>
  )
}

export default ProfileScreen
