import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

interface User{
    id:number;
    name:string;
    email:string;
}

const FlashListcallbackend = (): React.JSX.Element => {
    const[data,setData] = useState<User[]>([]);
    const[loading,setLoading] =useState(true);

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(data=>{
            setData(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error(error);
            setLoading(false);
        });
    },[]);
    const _renderItem = ({item}:{item:User})=>(
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
      )
  return (
    <View>
      {loading?(
        <ActivityIndicator size="large" color="red"/>
      ):(
        <FlatList
            data = {data}
            renderItem = {_renderItem}
            keyExtractor = {item => item.id.toString()}
        />
      )

      }
    </View>
  )
}

export default FlashListcallbackend


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding:50
    },
    item:{
        backgroundColor:'#f9c2ff',
        padding:20,
        marginVertical:8,
        marginHorizontal:16
    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    email:{
        fontSize:16
    }
});