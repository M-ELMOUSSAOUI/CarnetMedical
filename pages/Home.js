import React from 'react'
import { View, Text,Button } from 'react-native'

export default function Home (props){
    return (
        <View>
            <Button title='go to login' onPress={()=>{props.navigation.push('login')}} />
            
            <Button title='go to Signup' onPress={()=>{props.navigation.push('reg')}} />
        </View>
    )
}


