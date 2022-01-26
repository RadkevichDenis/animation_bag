import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import InitStack, { ScreenNames } from './src/navigation';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          component={InitStack}
          name={ScreenNames.INIT}
        />
        
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
