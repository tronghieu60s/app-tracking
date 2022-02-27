import useCachedResources from '@hooks/useCachedResources';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import KeepAwake from 'react-native-keep-awake';
import {TailwindProvider} from 'tailwind-rn';
import HomeScreen from './app/main/components/HomeScreen';
import utilities from './tailwind.json';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <KeepAwake />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
