import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileScreen from './componant/ProfileScreen'
import FlashListExample from './componant/FlashListExample'
import FlashListcallbackend from './componant/FlashListcallbackend'
import NewsApp from './componant/NewsApp'
import WeatherLondon from './componant/WeatherLondon'
import WeatherBangkok from './componant/WeatherBangkok'
import ModelExample from './componant/ModelExample'
import WeatherApp from './componant/WeatherApp'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/*<ProfileScreen/>*/}
      {/*<FlashListExample/>*/}
      {/*<FlashListcallbackend/>*/}
      {/* <NewsApp/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample/> */}
      <WeatherApp/>
    </View>
  )
}

export default App