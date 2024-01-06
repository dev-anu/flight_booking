import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Login from '../screens/login';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, gestureDirection: 'vertical'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false, gestureDirection: 'vertical'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
