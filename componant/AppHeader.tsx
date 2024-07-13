import { View, Text } from 'react-native'
import React from 'react'

type AppHeaderProps={
    title:string;
    year?:number;
}

const AppHeader = ({title, year}:AppHeaderProps):React.JSX.Element => {
  return (
    <View>
      <Text>{title} {year}</Text>
    </View>
  )
}

export default AppHeader