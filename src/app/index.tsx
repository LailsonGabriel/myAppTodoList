import { View } from 'react-native'
import React from 'react'
import Login from './login'
import MyGlobalContext from './context/MyGlobalContext'
import { Stack } from 'expo-router'

export default function InitialRoute() {
  return (
    <MyGlobalContext>
      <Login />
    </MyGlobalContext>
  )
}