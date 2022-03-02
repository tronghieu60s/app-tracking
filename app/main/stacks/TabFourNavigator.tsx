import Suspense from '@components/Base/Common/Suspense';
import SettingScreen from '@components/SettingScreen';
import SSApplicationInfo from '@components/SettingScreen/SSApplicationInfo';
import {TabFourParamList} from '@const/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screenOptions} from './commonNavigator';

const TabFourStack = createNativeStackNavigator<TabFourParamList>();

export default function TabFourNavigator() {
  return (
    <TabFourStack.Navigator
      initialRouteName="TabFourScreen"
      screenOptions={screenOptions}>
      <TabFourStack.Screen name="TabFourScreen">
        {() => <Suspense children={<SettingScreen />} />}
      </TabFourStack.Screen>
      <TabFourStack.Screen name="TabApplicationInfoScreen">
        {() => <Suspense children={<SSApplicationInfo />} />}
      </TabFourStack.Screen>
    </TabFourStack.Navigator>
  );
}
