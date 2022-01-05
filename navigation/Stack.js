import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import { Icon } from 'react-native-elements'
import { Image } from 'react-native'

const stack = createNativeStackNavigator()

export const HomeStack = () => {
    return( 
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='home' component={Home}/>
        </stack.Navigator>
    )
}
// export const CitiesStack = () => {
//     return( 
//         <stack.Navigator screenOptions={{headerShown:false}}>
//             <stack.Screen name='stackCities' component={Cities}/>
//             <stack.Screen name='City' component={City}/>
//         </stack.Navigator>
//     )
// }

// export const SignUpStack = () => {
//     return( 
//         <stack.Navigator screenOptions={{headerShown:false}}>
//             <stack.Screen name='stackSignUp' component={SignUp}/>
//         </stack.Navigator>
//     )
// }

// export const SignInStack = () => {
//     return( 
//         <stack.Navigator screenOptions={{headerShown:false}}>
//             <stack.Screen name='stackSignIn' component={SignIn}/>
//         </stack.Navigator>
//     )
// }


// export default Navigator