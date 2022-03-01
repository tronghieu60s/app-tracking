import {HSHeaderLeft, HSHeaderRight} from '@components/HomeScreen/HSComponents';
import useCachedResources from '@hooks/useCachedResources';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
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
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => <HSHeaderLeft />,
              headerRight: () => <HSHeaderRight />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
