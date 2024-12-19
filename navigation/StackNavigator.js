import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomePage from '../screens/Homepage';
import DetailScreen from '../screens/Detailscreen'; 

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={({ route }) => ({ title: route.params.item.title })} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
