import {StyleSheet, View, Text } from 'react-native'
import { stylesPractice } from '../styles/styles';
import React from 'react'


type headerMsg ={
  fullname:string;
  message:string;
}
const AppHeader = ({fullname,message}:headerMsg):React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.fullname}>
        Input your fullname: {fullname}
      </Text>
      <Text style={stylesPractice.message}>{message}</Text>
    </View>
  )
}
export default AppHeader