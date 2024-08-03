import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert,TextInput} from 'react-native';
import React,{useState,useEffect} from 'react';

import AppHeader from './ExcerciseComponant/AppHeader';
import AppFooter from './ExcerciseComponant/AppFooter';
import Content from './ExcerciseComponant/Content';

import { stylesPratice } from './styles/styles';


export default function App():React.JSX.Element {
 const [fullname,setFullname] = useState("");
 const [message,setMessage] = useState("Message from App.tsx");
 const [footerMessage,setFooterMessage] = useState("Thai-Nichi Institude of Technology");
useEffect(()=>{
  console.log("Componet has mounted")
},[]);
useEffect(()=>{
  console.log(`Fullname has changed to : ${fullname}`)},[fullname]);
const handleButtonClick=()=>{
  Alert.alert("Hello",`Fullname has changed to : ${fullname}`)
};
return (
  <View style={stylesPratice.container}>
      <AppHeader fullname={fullname} message={message}/>
      <Content message={message} fullname={fullname}/>
      <AppFooter footerMessage={footerMessage}/>
      <TextInput 
        style={stylesPratice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
        />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});