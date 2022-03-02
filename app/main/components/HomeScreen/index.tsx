import {OpenSansText} from '@components/Base/StyledText';
import Tracking from '@components/Common/Tracking';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function HomeScreen() {
  const tailwind = useTailwind();
  const [packageCode, setPackageCode] = useState('');
  const [packageDelivery, setPackageDelivery] = useState('');

  return (
    <View style={tailwind('flex-1 bg-white px-4')}>
      <OpenSansText
        style={tailwind(
          'text-center text-2xl text-slate-800 font-bold underline mt-5',
        )}>
        Tra cứu mã vận đơn của bạn!
      </OpenSansText>
      <Tracking
        packageCode={packageCode}
        setPackageCode={setPackageCode}
        packageDelivery={packageDelivery}
        setPackageDelivery={setPackageDelivery}
      />
    </View>
  );
}
