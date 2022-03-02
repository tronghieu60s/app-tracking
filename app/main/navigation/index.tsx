/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import NotFoundScreen from '@components/Base/Screens/NotFoundScreen';
import {OpenSansText} from '@components/Base/StyledText';
import {RootStackParamList} from '@const/types';
import I18n from '@core/i18n';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ColorSchemeName} from 'react-native';
import {enableScreens} from 'react-native-screens';
import BottomTabNavigator from './BottomTabNavigator';

enableScreens(true);

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: NonNullable<ColorSchemeName>;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      fallback={<OpenSansText>{I18n.t('app.common.loading')}</OpenSansText>}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{title: 'Oops!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
