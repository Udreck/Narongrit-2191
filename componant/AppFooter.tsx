import { StyleSheet, Text, View } from 'react-native'
import { stylesPractice } from '../styles/styles';
import React from 'react'


type footerMsg ={
  footerMessage:string;
}
const AppFooter = ({footerMessage}:footerMsg):React.JSX.Element => {
  const hello = "Hello TNI Footer" 
  const hello2 = <Text>Hello JSX</Text>
  const isLogin = true;
return (
  <View style={stylesPractice.footer}>
        <Text style={stylesPractice.text}>{footerMessage}</Text>
    </View>
  )
}
export default AppFooter