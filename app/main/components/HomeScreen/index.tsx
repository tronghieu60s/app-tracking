import {OpenSansText} from '@components/Base/StyledText';
import Tracking from '@components/Common/Tracking';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function HomeScreen() {
  const tailwind = useTailwind();

  return <View style={tailwind('flex-1 bg-white px-4')}></View>;
}
