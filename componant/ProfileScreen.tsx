import{ StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylePractice } from "../styles/styles";

interface ContentProps {
  fullname: string;
};

const ProfileScreen : React.FC<ContentProps> = ({fullname}) => {
  const handlePress = () => {
    Alert.alert("Hello", "Narongrit Prommadaj");
  };

  return (
      <View style={stylePractice.content}>
        <Text style = {stylePractice.text2}>{fullname}</Text>
        <Button title="Click Me" onPress={handlePress} color="blue" />
      </View>
  );
};

export default ProfileScreen
