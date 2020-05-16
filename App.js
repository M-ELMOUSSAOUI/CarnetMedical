import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import home from './pages/Home';
import login from './pages/Login';
import reg from './pages/Signup';

export default function App() {

  const stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#003e42'/>
      <stack.Navigator  
        screenOptions={{
          headerStyle:{
            backgroundColor:'#28696d',
            
          },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle:{
           fontWeight:'100',
            
          }
          
        }}
         >
       <stack.Screen 
        name='login' 
        component={login} 
        options={ {title:'Se connecter'} }/>

        <stack.Screen 
        name='home' 
        component={home} 
        options={ {title:'Accueil'} } />

        <stack.Screen 
        name='reg' 
        component={reg} 
        options={ {title:'inscreption'} }/>
      </stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  txt:{
    
  }
})
