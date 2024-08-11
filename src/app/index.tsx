import { View } from 'react-native'
import React from 'react'
import Login from './login'

export default function InitialRoute() {
  return (
    <View style={{ marginTop: 20 }}>
      <Login />
    </View>
  )
}