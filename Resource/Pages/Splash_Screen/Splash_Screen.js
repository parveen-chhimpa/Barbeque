import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {SplashLogo} from '../../Utils/Image'
import Styles from './SplashScreen_Style'
export default function Splash_Screen(props) {

useEffect(()=>{
    setTimeout(() => {
        props.navigation.replace('SignUp');
    },2000);
})

  return (
<SafeAreaView style={Styles.container}>
  <StatusBar backgroundColor={'#000'} />
<View style={Styles.MainView}>
    <Image source={SplashLogo} style={Styles.Logo} />
</View>
</SafeAreaView>
  )
}