import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { styles, stylesPractice } from '../styles/styles';

interface UserItem{
    id:string;
    name:string;
    email:string;
}

const FlashListExample = (): React.JSX.Element => {

    const user: UserItem[] = [
        { id: '1', name: 'Alice', email: 'alice@example.com' },
        { id: '2', name: 'Bob', email: 'bob@example.com' },
        { id: '3', name: 'Cara', email: 'cara@example.com' }
      ];
      const _renderItem = ({item}:{item:UserItem})=>(
        <View style={stylesPractice.text}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
      )
  return (
    <View style={styles.container1}>
      <FlatList
        data = {user}
        renderItem={_renderItem}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default FlashListExample
