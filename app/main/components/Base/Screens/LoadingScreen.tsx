import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function LoadingScreen() {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind('flex-1 justify-center items-center bg-transparent'),
        {paddingBottom: 60},
      ]}>
      <ActivityIndicator size="large" color={'#2563EB'} />
    </View>
  );
}
