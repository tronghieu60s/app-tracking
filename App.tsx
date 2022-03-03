import useCachedResources from '@hooks/useCachedResources';
import Navigation from '@navigation/index';
import {loadingState, themeState} from '@reducers/baseReducer';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  const isLoadingComplete = useCachedResources();

  const colorScheme = useRecoilValue(themeState);
  const loadingSpinner = useRecoilValue(loadingState);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <Spinner visible={loadingSpinner} cancelable={true} />
      </SafeAreaProvider>
    </TailwindProvider>
  );
}
