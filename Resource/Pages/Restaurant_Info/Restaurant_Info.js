import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'
export default function Restaurant_Info() {
  return (
    <WebView  source={{uri:'https://noor-mahal.fr/about-us/'}}  />
  )
}