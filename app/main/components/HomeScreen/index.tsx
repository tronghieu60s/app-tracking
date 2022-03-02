import Tracking from '@components/Common/Tracking';
import {deliveriesState} from '@reducers/deliveriesReducer';
import React from 'react';
import {View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn';

export default function HomeScreen() {
  const tailwind = useTailwind();
  const deliveries = useRecoilValue(deliveriesState);

  return (
    <View style={tailwind('flex-1 bg-neutral-100')}>
      <Tracking deliveries={deliveries} />
    </View>
  );
}
