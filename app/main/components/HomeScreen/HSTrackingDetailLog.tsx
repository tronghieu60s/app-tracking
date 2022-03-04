import {OpenSansText} from '@components/Base/StyledText';
import {logTrackingState} from '@reducers/commonReducer';
import React from 'react';
import {ScrollView} from 'react-native';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn/dist';

export default function HSTrackingDetailLog() {
  const tailwind = useTailwind();
  const logTracking = useRecoilValue(logTrackingState);

  return (
    <ScrollView
      style={tailwind('flex-1 bg-white p-2')}
      showsVerticalScrollIndicator={false}>
      <OpenSansText>{logTracking}</OpenSansText>
    </ScrollView>
  );
}
