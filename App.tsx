import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileScreen from './componant/ProfileScreen'
import FlashListExample from './componant/FlashListExample'
import FlashListcallbackend from './componant/FlashListcallbackend'
import NewsApp from './componant/NewsApp'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/*<ProfileScreen/>*/}
      {/*<FlashListExample/>*/}
      {/*<FlashListcallbackend/>*/}
      {<NewsApp/>}
    </View>
  )
}

export default App