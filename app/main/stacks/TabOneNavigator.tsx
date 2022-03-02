import Suspense from '@components/Base/Common/Suspense';
import HomeScreen from '@components/HomeScreen';
import {HSHeaderLeft, HSHeaderRight} from '@components/HomeScreen/HSComponents';
import HSTrackingDetail from '@components/HomeScreen/HSTrackingDetail';
import {TabOneParamList} from '@const/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {screenOptions} from './commonNavigator';

const TabOneStack = createNativeStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      initialRouteName="TabOneScreen"
      screenOptions={screenOptions}>
      <TabOneStack.Screen
        name="TabOneScreen"
        options={{
          headerTitle: () => <HSHeaderLeft />,
          headerRight: () => <HSHeaderRight />,
        }}>
        {() => <Suspense children={<HomeScreen />} />}
      </TabOneStack.Screen>
      <TabOneStack.Screen
        name="HSTrackingDetail"
        options={{
          headerTitle: () => <HSHeaderLeft />,
          headerRight: () => <HSHeaderRight />,
        }}>
        {() => <Suspense children={<HSTrackingDetail />} />}
      </TabOneStack.Screen>
    </TabOneStack.Navigator>
  );
}
