import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

interface News{
    title:string;
    description:string;
    publishedAt:string;
    url:string;
}

const NewsApp = (): React.JSX.Element => {
    const[news,setNews] = useState([]);
    const[loading,setLoading] =useState<boolean>(true);
    //const[error,setError] =useState(false);

    const API_KEY = "d679ce9793be45c0b7134f3641102317";
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    useEffect(()=>{
       fetch(URL)
       .then(response=>response.json())
       .then(data=>{
            setNews(data.articles);
            setLoading(false);
            //setError(true);
        })
        /*.catch(error=>{
            console.error(error);
            setLoading(false);
        });*/
    },[]);
    const _renderItem = ({item}:{item:News})=>(
        <TouchableOpacity style={styles.card}>
            <Text style={styles.headline}>{item.title}</Text>
            <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
            <Text style={styles.description}>{item.publishedAt}</Text>
        </TouchableOpacity>
      )
  return (
    <View style={styles.container}>
      {loading?(
        <ActivityIndicator size="large" color="red"/>
      ):(
        <FlatList
            data = {news}
            renderItem = {_renderItem}
            keyExtractor = {item => item.url}
        />
      )

      }
    </View>
  )
}

export default NewsApp

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffa54a',
        padding:16
    },
    loadingContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    errorContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    errorText:{
        fontSize:18,
        color:'red'
    },
    card:{
        backgroundColor:'#ff6a4a',
        padding:16,
        marginVertical:8,
        margin:10,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:8,
        elevation:3
    },
    headline:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8
    },
    date:{
        fontSize:14,
        color:'#888',
        marginBottom:8
    },
    description:{
        fontSize:16,
        color:'#333'
    }
});