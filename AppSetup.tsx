import Suspense from '@components/Base/Common/Suspense';
import LoadingScreen from '@components/Base/Screens/LoadingScreen';
import React from 'react';
import KeepAwake from 'react-native-keep-awake';
import {RecoilRoot} from 'recoil';
import AppDefault from './App';

export default function AppSetup() {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingScreen />}>
        <KeepAwake />
        <AppDefault />
      </Suspense>
    </RecoilRoot>
  );
}
