import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FadeFromBottomAndroid } from "@react-navigation/stack/src/TransitionConfigs/TransitionPresets";

import FirstScreen from '../components/FirstScreen';
import SecondScreen from '../components/SecondScreen';

export enum ScreenNames {
  MAIN = "MAIN",
  INIT = "INIT",
  FIRST_SCREEN = "FIRST_SCREEN",
  SECOND_SCREEN = "SECOND_SCREEN",
};

const Init = createStackNavigator();

const InitStack = () =>
  <Init.Navigator
    // detachInactiveScreens={false}
    screenOptions={{
      headerStyle: { backgroundColor: "#002663" },
      headerTitleStyle: {
        color: "#fff",
      },
      presentation: "modal",
      ...FadeFromBottomAndroid,
    }}
  >
    <Init.Screen
      component={FirstScreen}
      name={ScreenNames.FIRST_SCREEN}
      options={{
        title: "First screen",
      }}
    />
    <Init.Screen
      component={SecondScreen}
      name={ScreenNames.SECOND_SCREEN}
      options={{
        title: "Second screen",
      }}
    />
  </Init.Navigator>;

export default InitStack;