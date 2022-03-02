import {BottomTabParamList} from '@const/types';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/core';
import TabFourNavigator from '@stacks/TabFourNavigator';
import TabOneNavigator from '@stacks/TabOneNavigator';
import * as React from 'react';
import BottomTabIcon from './BottomTabIcon';

function isTabBarVisible(navigation: any) {
  const {routes, index} = navigation.getState();
  const {state} = routes[index];
  return state && state.index > 0 ? false : true;
}

function screenOptions({
  route,
  navigation,
}: {
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>;
  navigation: any;
}): BottomTabNavigationOptions {
  const isVisible = isTabBarVisible(navigation);
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 60,
      display: isVisible ? 'flex' : 'none',
      backgroundColor: '#fff',
    },
    // tabBarButton: (props: any) => <Ripple {...props} />,
    tabBarIcon: (props: any) => <BottomTabIcon route={route} {...props} />,
  };
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={screenOptions}>
      <BottomTab.Screen name="TabOne" component={TabOneNavigator} />
      {/* <BottomTab.Screen name="TabTwo" component={TabTwoNavigator} /> */}
      {/* <BottomTab.Screen name="TabThree" component={TabThreeNavigator} /> */}
      <BottomTab.Screen name="TabFour" component={TabFourNavigator} />
    </BottomTab.Navigator>
  );
}
