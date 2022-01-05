import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View } from 'react-native'
import {useFonts, Italianno_400Regular } from '@expo-google-fonts/italianno'
import { ZillaSlabHighlight_700Bold } from '@expo-google-fonts/zilla-slab-highlight'
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './navigation/Drawer'




import { LogBox } from "react-native"
LogBox.ignoreAllLogs(true)



const App =() => {

  let [fontsLoaded] = useFonts({
    Italianno_400Regular,
    ZillaSlabHighlight_700Bold,
    Ubuntu_700Bold,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
       <NavigationContainer>
        
            <Navigator/>
         
       </NavigationContainer>
  )
}
  }

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App