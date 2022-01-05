import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'


const stack = createNativeStackNavigator()

export const HomeStack = () => {
    return( 
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='home' component={Home}/>
        </stack.Navigator>
    )
}
