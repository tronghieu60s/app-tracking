import Suspense from '@components/Base/Common/Suspense';
import HomeScreen from '@components/HomeScreen';
import {
  HSHeaderLeft,
  HSHeaderRight,
  HSHeaderTrackingDetailLeft,
  HSHeaderTrackingDetailRight,
} from '@components/HomeScreen/HSComponents';
import HSTrackingDetail from '@components/HomeScreen/HSTrackingDetail';
import HSTrackingDetailLog from '@components/HomeScreen/HSTrackingDetailLog';
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
        options={({navigation}: {navigation: any}) => ({
          headerTitle: () => <HSHeaderLeft />,
          headerRight: () => <HSHeaderRight navigation={navigation} />,
        })}>
        {() => <Suspense children={<HomeScreen />} />}
      </TabOneStack.Screen>
      <TabOneStack.Screen
        name="HSTrackingDetail"
        options={({route}: {route: any}) => ({
          headerTitle: () => <HSHeaderTrackingDetailLeft route={route} />,
          headerRight: () => <HSHeaderTrackingDetailRight />,
        })}>
        {() => <Suspense children={<HSTrackingDetail />} />}
      </TabOneStack.Screen>
      <TabOneStack.Screen
        name="HSTrackingDetailLog"
        options={({route}: {route: any}) => ({
          headerTitle: () => <HSHeaderTrackingDetailLeft route={route} />,
        })}>
        {() => <Suspense children={<HSTrackingDetailLog />} />}
      </TabOneStack.Screen>
    </TabOneStack.Navigator>
  );
}
