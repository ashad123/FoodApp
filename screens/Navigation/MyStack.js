import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import SignUp from '../SignUp';
import Dashboard from '../Dashboard';
import MenuList from '../MenuList';
import MenuList1 from '../MenuList1';
import MenuList2 from '../MenuList2';
import OrderProcessed from '../OrderProcessed';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
      <Stack.Screen name="Signup" component={SignUp} options={{headerShown : false}} />
      <Stack.Screen name="Dashboard" component={Dashboard}  />
      <Stack.Screen name='MenuList' component={MenuList} options={{headerShown : false}}/>
      <Stack.Screen name='MenuList1' component={MenuList1} options={{headerShown : false}}/>
      <Stack.Screen name='MenuList2' component={MenuList2} options={{headerShown : false}}/>
     <Stack.Screen name='OrderProcess' component={OrderProcessed} options={{headerShown : false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;